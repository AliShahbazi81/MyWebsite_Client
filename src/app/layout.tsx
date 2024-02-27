import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
		<main className={'relative'}>
			{children}
		</main>
		<Footer/>
		</body>
		</html>
	);
}
