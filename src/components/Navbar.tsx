'use client'
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Image from "next/image";
import "../app/css/navbar.scss" // Ensure the path is correct

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

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

	return (
		<nav className={`left-0 w-full z-40 ease-in-ease-out duration-1000 ${isSticky ? 'fixed transition-all top-0 animate-slideDown bg-opacity-60 backdrop-filter backdrop-blur-sm' : 'relative top-10 bg-transparent h-0'}`}>
			<div className="navbar-container">
				<div className="navbar-flex-container">
					<div className="navbar-logo-link">
						<Link href={"/"}>
							<Image src={"/images/Logo.png"} alt={"Logo"} width={70} height={70} />
						</Link>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								{/* Navigation Links */}
								<Link href="/" className="navLink">Home</Link>
								<Link href="/Experience" className="navLink">Expertise</Link>
								<Link href="/Education" className="navLink">Projects</Link>
								<Link href="/about" className="navLink">Experience</Link>
								<Link href="/Contact" className="navLink">Education</Link>
								<Link href="/Contact" className="navLink">Reference</Link>
							</div>
						</div>
					</div>
					<div className="-mr-2 flex md:hidden">
						{/* Mobile menu button */}
						<Menu as="div" className="relative inline-block text-left">
							{({ open }) => (
								<>
									<Menu.Button className="mobile-menu-button">
										<Bars3Icon className="mobile-icon" aria-hidden="true" />
									</Menu.Button>
									<Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
										<Menu.Items className="menu-items-container">
											<div className="py-1">
												<Menu.Item>
													{({ active }) => (
														<Link href="/" className={classNames(active ? 'menu-item-active' : '', 'menu-item')}>Home</Link>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<Link href="/about" className={classNames(active ? 'menu-item-active' : '', 'menu-item')}>About</Link>
													)}
												</Menu.Item>
												{/* More mobile links */}
											</div>
										</Menu.Items>
									</Transition>
								</>
							)}
						</Menu>
					</div>
				</div>
			</div>
		</nav>
	);
}
