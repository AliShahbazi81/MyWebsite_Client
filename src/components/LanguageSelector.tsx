import React, {useEffect, useState} from 'react';
import './../app/css/languageSelector.scss';
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";

type Language = {
	code: string;
	name: string;
	flagUrl: string;
};

export default function LanguageSelector() {
	const router = useRouter();
	const [languages] = useState<Language[]>([
		{code: 'en', name: 'English', flagUrl: '/images/lang/English.png'},
		{code: 'de', name: 'German', flagUrl: '/images/lang/Germany.png'},
		{code: 'fr', name: 'France', flagUrl: '/images/lang/France.png'},
	]);
	const [isOpen, setIsOpen] = useState(false);

	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		// Update the state based on window width
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1281); // Example breakpoint
		};

		// Set initial value
		handleResize();

		// Add event listener
		window.addEventListener('resize', handleResize);

		// Clean up
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const toggleDropdown = () => setIsOpen(!isOpen);
	const openDropdown = () => !isMobile && setIsOpen(true);
	const closeDropdown = () => !isMobile && setIsOpen(false);
	return (
		<div
			className={'languageSelector'}
			onClick={toggleDropdown}
			onMouseEnter={openDropdown}
			onMouseLeave={closeDropdown}>
			<Image
				src={languages.find(l => l.code === router.locale)?.flagUrl || '/images/lang/English.png'}
				alt="Current Language"
				width={30}
				height={30}
			/>
			<span className={`arrow ${isOpen ? 'open' : ''} ml-3`}>▼</span>
			<ul className={`languageList ${isOpen ? 'open' : ''}`}>
				{languages.map((language) => (
					<li key={language.code}>
						<Link
							href={{
								pathname: router.pathname,
								query: router.query,
							}}
							locale={language.code}
							scroll={false}
						>
							<span
								onClick={(e) => {
									e.stopPropagation(); // Prevent the dropdown from toggling when a language is selected
									setIsOpen(false);
								}}>
									  <Image
										  src={language.flagUrl}
										  alt={language.name}
										  width={30}
										  height={30}
									  />
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}