'use client'
import Link from 'next/link';
import {useEffect, useRef, useState} from 'react';
import {Bars3Icon} from '@heroicons/react/24/outline';
import Image from "next/image";
import "../app/css/navbar.scss"
import "../app/css/languageSelector.scss"
import LanguageSelector from "@/components/LanguageSelector";
import {useTranslation} from "next-i18next";

export default function Navbar() {
	const [isSticky, setIsSticky] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeMenu = () => setIsMenuOpen(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const {t} = useTranslation('common');

	useEffect(() => {
		const handleScroll = () => {
			const shouldBeSticky = window.scrollY > window.innerHeight * 0.30;
			setIsSticky(shouldBeSticky);
		};

		const handleOutsideClick = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				closeMenu();
			}
		};

		window.addEventListener('scroll', handleScroll);
		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	return (
		<nav className={`left-0 w-full z-40 fixed ${isSticky ? 'nav-desktop' : 'relative top-10 bg-transparent h-0'}`}>
			<div className="navbar-container">
				<div className="navbar-flex-container">
					<div className="navbar-logo-link">
						<Link href="/">
							<Image src="/images/Logo.png" alt="Logo" width={70} height={70}/>
						</Link>
					</div>
					<div className="hidden md:flex space-x-4">
						<Link href="/" className="navLink">{t('navbarHome')}</Link>
						<Link href="/#expertise" className="navLink">{t('navbarExpertise')}</Link>
						<Link href="/#projects" className="navLink">{t('navbarProjects')}</Link>
						<Link href="/#experience" className="navLink">{t('navbarExperience')}</Link>
						<Link href="/#education" className="navLink">{t('navbarEducation')}</Link>
						<Link href="/#contact-me" className="navLink">{t('navbarContactMe')}</Link>
						<LanguageSelector/>
					</div>
					<div className="-mr-2 flex md:hidden">
						<button className="mobile-menu-button" onClick={toggleMenu}>
							<Bars3Icon className="mobile-icon" aria-hidden="true"/>
						</button>
						<div ref={menuRef} className={`menu-slide-container ${isMenuOpen ? 'is-open' : ''}`}>
								<Link href="/" className={'mb-6'}>
									<Image src="/images/Logo.png" alt="Logo" width={70} height={70}/>
								</Link>
							<Link href="/">
								<span
									className={'menu-item'}
									onClick={closeMenu}
								>{t('navbarHome')}
								</span>
							</Link>
							<Link href="/#expertise">
								<span
									className={'menu-item'}
									onClick={closeMenu}
								>{t('navbarExpertise')}
								</span>
							</Link>
							<Link href="/#projects">
								<span
									className={'menu-item'}
									onClick={closeMenu}
								>{t('navbarProjects')}
								</span>
							</Link>
							<Link href="/#experience">
								<span
									className={'menu-item'}
									onClick={closeMenu}
								>{t('navbarExperience')}
								</span>
							</Link>
							<Link href="/#education">
								<span
									className={'menu-item'}
									onClick={closeMenu}
								>{t('navbarEducation')}
								</span>
							</Link>
							<Link href="/#contact-me">
								<span
									className={'menu-item'}
									onClick={closeMenu}
								>{t('navbarContactMe')}
								</span>
							</Link>
							<LanguageSelector/>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}