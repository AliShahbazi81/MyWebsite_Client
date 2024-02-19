'use client'
import Link from 'next/link';
import {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import Image from "next/image";

function classNames(...classes: any) {
	  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
	  return (
			<nav className="absolute top-0 left-0 w-full z-30">
				  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-between h-16">
							  <div className="flex items-center">
									<div className="flex-shrink-0 col-auto">
										  
									</div>
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
