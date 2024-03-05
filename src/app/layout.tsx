import type {Metadata} from "next";
import "./globals.css";
import {Inter} from "next/font/google";
import ToasterProvider from "@/app/providers/ToasterProvider";
import {Analytics} from "@vercel/analytics/react"

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
		<body className={inter.className}>
		<ToasterProvider/>
		<main className={'mainDiv relative'}>
			{children}
			<Analytics/>
		</main>
		</body>
		</html>
	);
}
