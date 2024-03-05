import React, {useState} from 'react';
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
	]);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={'languageSelector'} onClick={() => setIsOpen(!isOpen)}>
			<Image
				src={languages.find(l => l.code === router.locale)?.flagUrl || '/images/lang/English.png'}
				alt="Current Language"
				width={30}
				height={30}
			/>
			{isOpen && (
				<ul className={'languageList'}>
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
													onClick={() => setIsOpen(false)}
												>
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
			)}
		</div>
	);
}