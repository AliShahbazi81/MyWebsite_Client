'use client'

import Image from "next/image";
import MouseScroll from "@/components/MouseScroll";
import MyExpertise from "@/components/cards/MyExpertise";
import MyProjects from "@/components/projects/MyProjects";
import "./../app/css/homepage.scss"
import MyExperience from "@/components/experience/MyExperience";

export default function HomePageImage() {
	return (
		<>
			<div className={'homePageEnv'}>
				<Image
					className={'homePageImage'}
					src="/images/BackgroundImage.png"
					alt="BackgroundImage"
					layout={"fill"}
					objectFit={"cover"}
					objectPosition={"center"}
					quality={100}
				/>
				<div className={'homePage'}>
					
					<div className="absolute inset-0 z-10"
						 style={{background: 'linear-gradient(to bottom, transparent, #1A191D)'}}></div>
					<div className="flex items-center justify-center z-10">
						<h1 className="nameInitial">
							A
						</h1>
						<h1 className="name">
							li
						</h1>
						<div className="nameSpace"/>
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
			</div>
			<div className={'divBackground'}>
				<h1 className={'title'}>
					Expertise
				</h1>
				{/* Expertise Card*/}
				<MyExpertise/>
			</div>
			<div className={'divBackground'}>
				<h1 className={'title'}>
					Projects
				</h1>
				<MyProjects/>
			</div>
			<div className={'divBackground'}>
				<h1 className={'title'}>
					Experience
				</h1>
				<MyExperience/>
			</div>
		</>
	);
}
