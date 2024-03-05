import HomePageImage from "@/components/HomePageImage";
import "../app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";


export async function getStaticProps({locale}: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}

function Home() {
	return (
		<>
			<Head>
				<title>Ali Shahbazi</title>
				<meta name="description" content="Ali Shahbazi's personal website" />
			</Head>
			<Navbar/>
			<HomePageImage/>
			<Footer/>
		</>
	);
}

export default Home;
