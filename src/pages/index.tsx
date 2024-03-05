import HomePageImage from "@/components/HomePageImage";
import "../app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
			<Navbar/>
			<HomePageImage/>
			<Footer/>
		</>
	);
}

export default Home;
