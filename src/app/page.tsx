import HomePageImage from "@/components/HomePageImage";
import Navbar from "@/components/Navbar";
import MouseScroll from "@/components/MouseScroll";

export default function Home() {
	  return (
			<div className={'flex flex-auto'}>
				  <Navbar />
				  <HomePageImage/>
					<MouseScroll />
			</div>
	  );
}
