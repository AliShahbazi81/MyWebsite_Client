'use client'
import Link from 'next/link';
import {Fragment, useEffect, useState} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {Bars3Icon} from '@heroicons/react/24/outline';
import Image from "next/image";
import "../app/css/navbar.scss"
import "../app/css/languageSelector.scss"
import LanguageSelector from "@/components/LanguageSelector";

export default function Navbar() {
	  const [isSticky, setIsSticky] = useState(false);

	  useEffect(() => {
			const handleScroll = () => {
				  const shouldBeSticky = window.scrollY > window.innerHeight * 0.30;
				  setIsSticky(shouldBeSticky);
			};

			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
	  }, []);

	  function classNames(...classes: any) {
			return classes.filter(Boolean).join(' ');
	  }

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
									<Link href="/" className="navLink">Home</Link>
									<Link href="/#expertise" className="navLink">Expertise</Link>
									<Link href="/#projects" className="navLink">Projects</Link>
									<Link href="/#experience" className="navLink">Experience</Link>
									<Link href="/#education" className="navLink">Education</Link>
									<Link href="/#contact-me" className="navLink">Contact Me</Link>
									<LanguageSelector/>
							  </div>
							  <div className="-mr-2 flex md:hidden">
									<Menu as="div" className="relative inline-block text-left">
										  <Menu.Button className="mobile-menu-button">
												<Bars3Icon className="mobile-icon" aria-hidden="true"/>
										  </Menu.Button>
										  <Transition
												as={Fragment}
												enter="transition ease-in-out duration-800"
												enterFrom="transform translate-x-full"
												enterTo="transform translate-x-0"
												leave="transition ease-in-out duration-800"
												leaveFrom="transform translate-x-0"
												leaveTo="transform translate-x-full"
										  >
												<Menu.Items className="menu-slide-container">
													  <div className="menu-items">
															<Menu.Item>
																  {({active}) => (
																		<Link href="/">
																			  <span className={classNames(active ? 'menu-item-active' : '', 'menu-item')}>Home</span>
																		</Link>
																  )}
															</Menu.Item>
															<Menu.Item>
																  {({active}) => (
																		<Link href="/#expertise">
																			  <span className={classNames(active ? 'menu-item-active' : '', 'menu-item')}>Expertise</span>
																		</Link>
																  )}
															</Menu.Item>
															<Menu.Item>
																  {({active}) => (
																		<Link href="/#experience">
																			  <span className={classNames(active ? 'menu-item-active' : '', 'menu-item')}>Experience</span>
																		</Link>
																  )}
															</Menu.Item>
															<Menu.Item>
																  {({active}) => (
																		<Link href="/#education">
																			  <span className={classNames(active ? 'menu-item-active' : '', 'menu-item')}>Education</span>
																		</Link>
																  )}
															</Menu.Item>
															<Menu.Item>
																  {({active}) => (
																		<Link href="/#contact-me">
																			  <span className={classNames(active ? 'menu-item-active' : '', 'menu-item')}>Contact Me</span>
																		</Link>
																  )}
															</Menu.Item>
													  </div>
												</Menu.Items>
										  </Transition>
									</Menu>
							  </div>
						</div>
				  </div>
			</nav>
	  );
}