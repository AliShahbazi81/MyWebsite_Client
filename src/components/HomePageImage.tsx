'use client'

import Image from "next/image";
import MouseScroll from "@/components/MouseScroll";
import MyExpertise from "@/pages/projects/MyExpertise";
import MyProjects from "@/pages/projects/MyProjects";
import "./../app/css/homepage.scss"
import MyExperience from "@/pages/projects/MyExperience";
import ContactMe from "@/pages/projects/ContactMe";
import {useTranslation} from "next-i18next";

export default function HomePageImage() {
	  const {t} = useTranslation('common');

	  return (
			<>
				  <div id={"home"} className={'homePageEnv'}>
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
				  <div id={"expertise"} className={'divBackground'}>
						<h1 className={'title'}>
							  {t('titleExpertise')}
						</h1>
						{/* Expertise Card*/}
						<MyExpertise/>
				  </div>
				  <div id={"projects"} className={'divBackground'}>
						<h1 className={'title'}>
							  {t('titleProjects')}
						</h1>
						<MyProjects/>
				  </div>
				  <div id={"experience"} className={'divBackground'}>
						<h1 className={'title'}>
							  {t('titleExperience')}
						</h1>
						<MyExperience/>
				  </div>
				  <div id={"contact-me"} className={'divBackground'}>
						<h1 className={'title'}>
							  {t('titleContactMe')}
						</h1>
						<ContactMe/>
				  </div>
			</>
	  );
}
