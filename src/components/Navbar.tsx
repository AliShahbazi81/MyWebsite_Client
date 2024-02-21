'use client'
import Link from 'next/link';
import {Fragment, useEffect, useState} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {Bars3Icon} from '@heroicons/react/24/outline';
import Image from "next/image";
import "../app/globals.css"
import "../app/css/navbar.scss"

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
			<nav className={`fixed top-0 left-0 w-full z-30 transition-all ease-in-out duration-1000 ${isSticky ? 'animate-slideDown bg-opacity-60 backdrop-filter backdrop-blur' : 'bg-transparent'}`}>
				  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-center h-16">
							  <div className="flex items-center justify-start">
									<Link href={"/"}>
										  <Image
												src={"/images/Logo.png"}
												alt={"Logo"}
												width={70}
												height={70}
										  />
									</Link>
									<div className="hidden md:block">
										  <div className="ml-10 flex items-baseline space-x-4">

												{/* Navigation Links */}
												<Link href="/" className="navLink">
													  Home
												</Link>
												<Link href="/Experience" className="navLink">
													  Experience
												</Link>
												<Link href="/Education" className="navLink">
													  Education
												</Link>
												<Link href="/about" className="navLink">
													  About
												</Link>
												<Link href="/Contact" className="navLink">
													  Contact
												</Link>
												{/* More navigation links here */}
										  </div>
									</div>
							  </div>
							  <div className="-mr-2 flex md:hidden">
									{/* Mobile menu button */}
									<Menu as="div" className="relative inline-block text-left">
										  {({open}) => (
												<>
													  <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
															<span>Menu</span>
															<Bars3Icon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true"/>
													  </Menu.Button>
													  <Transition
															as={Fragment}
															enter="transition ease-out duration-100"
															enterFrom="transform opacity-0 scale-95"
															enterTo="transform opacity-100 scale-100"
															leave="transition ease-in duration-75"
															leaveFrom="transform opacity-100 scale-100"
															leaveTo="transform opacity-0 scale-95"
													  >
															<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
																  <div className="py-1">
																		<Menu.Item>
																			  {({active}) => (
																					<Link
																						  href="/"
																						  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
																					>
																						  Home
																					</Link>
																			  )}
																		</Menu.Item>
																		<Menu.Item>
																			  {({active}) => (
																					<Link
																						  href="/about"
																						  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
																					>
																						  About
																					</Link>
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
