import HomePageImage from "@/components/HomePageImage";
import Navbar from "@/components/Navbar";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className={'relative overflow-clip'}>
			<Navbar/>
			<HomePageImage/>
			<Footer/>
		</div>
	);
}
