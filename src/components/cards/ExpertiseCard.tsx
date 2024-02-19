import React, {useState} from 'react';
import CardHeader from "@/components/cards/CardHeader";
import TagElement from "@/components/cards/TagElement";
import DescriptionLine from "@/components/cards/DescriptionLine";
import Technologies from "@/components/cards/Technologies";
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Image from "next/image";

const cardData = [
	  {
			id: 'softwareDevelopment',
			nextLine: true,
			expertise: 'Software',
			secondExpertise: 'Development',
			description: (
				  <p className={'descriptionText'}>
						Seasoned in .NET with <span className="text-primary"><b>6+ years</b></span> crafting scalable solutions, adept in <span className="text-primary"><b>OOP</b></span>, <span className="text-primary"><b>SOLID principles</b></span>, and best coding practices.
				  </p>
			),
			technologies: [],
	  },
	  {
			id: 'backend',
			nextLine: false,
			expertise: 'Backend',
			description: (
				  <p className={'descriptionText'}>
						Expert in <span className="text-primary"><b>.NET</b></span> with a strong focus on robust, scalable backends, complemented by proficiency in <span className="text-primary"><b>Django</b></span> and <span className="text-primary"><b>Spring Boot</b></span>.
				  </p>
			),
			technologies: ['DotNetCore', 'Django', 'SpringBoot'],
	  },
	  {
			id: 'frontend',
			nextLine: false,
			expertise: 'Frontend',
			description: (
				  <p className={'descriptionText'}>
						Skilled in <span className="text-primary"><b>React</b></span>, <span className="text-primary"><b>Next.js</b></span>, and <span className="text-primary"><b>TypeScript</b></span> creating responsive, user-focused interfaces that seamlessly integrate with dynamic backends.
				  </p>
			),
			technologies: ['React', 'Redux', 'NextJs', 'MaterialUI', 'Tailwind', 'JavaScript', 'TypeScript'],
	  },
	  {
			id: 'database',
			nextLine: false,
			expertise: 'Database',
			description: (
				  <p className={'descriptionText'}>
						Proficient with <span className="text-primary"><b>SQL Server</b></span>, <span className="text-primary"><b>PostgreSQL</b></span>,<span className="text-primary"><b> MongoDB</b></span>, optimizing data storage and retrieval for high-performance, scalable applications.
				  </p>
			),
			technologies: ['MongoDb', 'PostgresSql', 'Redis', 'SqlServer', 'MySql'],
	  },
];

export default function ExpertiseCard() {
	  const [currentIndex, setCurrentIndex] = useState(0);
	  const totalCards = cardData.length;

	  const nextCard = () => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
	  };

	  const prevCard = () => {
			setCurrentIndex((prevIndex) => {
				  return prevIndex - 1 < 0 ? totalCards - 1 : prevIndex - 1;
			});
	  };

	  const determineVisibleCards = () => {
			let cardsToShow = [];
			for (let i = 0; i < 3; i++) {
				  let index = (currentIndex + i) % totalCards;
				  cardsToShow.push(cardData[index]);
			}
			return cardsToShow;
	  };

	  const visibleCards = determineVisibleCards();
	  return (
			<div className={'flex flex-col items-center justify-start space-y-4'}>
				  <TransitionGroup className="flex justify-start items-start space-x-4 overflow-hidden">
						{visibleCards.map((card) => (
							  <CSSTransition key={card.id} timeout={1000} classNames="slide">
									<div key={card.id} className={`card ${card.id + "Card"}`}>
										  {/* Card Header*/}
										  <CardHeader
												expertise={card.expertise}
												nextLine={card.nextLine} secondExpertise={card.secondExpertise}
										  />
										  {/*Card Body*/}
										  <div className={'mt-4'}>
												<TagElement {...{[card.id]: true}} />
												<div className={'cardBody'}>
													  <DescriptionLine>
															{card.description}
													  </DescriptionLine>
												</div>
												<TagElement {...{[card.id]: true}} />
												{/*Technologies */}
												<div className={'flex flex-col items-start justify-start'}>
													  <h1 className={'technologyTitle'}>Technologies: </h1>
													  <div className={'flex items-center justify-center'}>
															{card.technologies.map((tech) => (
																  <Technologies key={tech} keyword={tech}/>
															))}
													  </div>
												</div>
										  </div>
									</div>
							  </CSSTransition>
						))}
				  </TransitionGroup>
				  {/* Blur Logo*/}
				  <div className={'flex items-center justify-center'}>
						<Image
							  className={'blurLogo'}
							  src={"/images/Logo.png"}
							  alt={"Logo"}
							  width={800}
							  height={900}

						/>
				  </div>
				  <div className={'flex items-center justify-center space-x-4 z-50'}>
						<button onClick={prevCard} className="px-4 py-2 rounded-full text-primary shine-effect">&#60;</button>
						<button onClick={nextCard} className="px-4 py-2 rounded-full text-primary shine-effect">&#62;</button>
				  </div>
			</div>
	  );
}