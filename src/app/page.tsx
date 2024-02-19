import HomePageImage from "@/components/HomePageImage";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
	  return (
			<div className={'relative h-screen'}>
				  <Navbar/>
				  <HomePageImage/>
			</div>
	  );
}
