'use client'

import Image from "next/image";
import MouseScroll from "@/components/MouseScroll";
import ExpertiseCard from "@/components/cards/ExpertiseCard";

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
						<div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, transparent, #1A191D)' }}></div>
						<div className="flex items-center justify-center z-10">
							  <h1 className="nameInitial">
									A
							  </h1>
							  <h1 className="name">
									li
							  </h1>
							  <div className="nameSpace" />
							  <h1 className="nameInitial">
									S
							  </h1>
							  <h1 className="name">
									hahbazi
							  </h1>
						</div>
						<h2 className="profession">
							  Web, Full Stack & App Developer
						</h2>
						<div className="absolute bottom-0 mb-5">
							  <MouseScroll/>
						</div>
				  </div>
				  <div className={'divBackground'}>
						<h1 className={'title'}>
							  My Expertise
						</h1>
						{/* Expertise Card*/}
						<ExpertiseCard />
						
				  </div>
				  
			</>
	  );
}
