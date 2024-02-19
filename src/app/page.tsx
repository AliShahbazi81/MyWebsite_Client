import HomePageImage from "@/components/HomePageImage";
import Navbar from "@/components/Navbar";

export default function Home() {
	  return (
			<div className={'relative h-screen'}>
				  <Navbar/>
				  <HomePageImage/>
			</div>
	  );
}
