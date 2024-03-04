import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import React from "react";
import "./../app/css/navbar.scss"

interface LayoutProps {
	children: React.ReactNode;
	title?: string;
	description?: string;
}


const Layout: React.FC<LayoutProps> = ({ children, title = 'Default Title', description = 'Default Description' }) => (
	<>
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			{/* Any other head elements */}
		</Head>
		<Navbar />
		<main className="mainDiv relative">{children}</main>
		<Footer />
	</>
);

export default Layout;
