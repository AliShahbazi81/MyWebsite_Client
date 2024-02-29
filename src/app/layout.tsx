import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Ali Shahbazi",
	description: "Ali Shahbazi's portfolio",
};

export default function RootLayout({
									   children,
								   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">

		<body className={inter.className} >
		<Navbar/>
		<main className={'mainDiv relative'}>
			{children}
		</main>
		<Footer/>
		</body>
		</html>
	);
}
