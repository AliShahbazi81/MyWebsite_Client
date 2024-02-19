'use client'

import Image from "next/image";
import * as http2 from "http2";
import MouseScroll from "@/components/MouseScroll";

export default function HomePageImage() {
	  return (
			<>
				  <div className={'relative flex items-center justify-center h-screen'}>
						<Image
							  src="/images/BackgroundImage.jpg"
							  alt="BackgroundImage"
							  layout={"fill"}
							  objectFit={"cover"}
							  objectPosition={"center"}
							  quality={100}
							  loading={"eager"}
						/>
						<h1 className={'name'}>
							  Ali Shahbazi
						</h1>
						<h2 className={'profession'}>
							  Web Developer, Full Stack Developer & App Developer
						</h2>
						<div className={'absolute bottom-0 mb-5'}>	  
							  <MouseScroll/>
						</div>
				  </div>
			</>

	  );
}