import React, {useState} from 'react';
import CardHeader from "@/components/cards/CardHeader";
import TagElement from "@/components/cards/TagElement";
import DescriptionLine from "@/components/cards/DescriptionLine";
import Technologies from "@/components/cards/Technologies";
import Image from "next/image";

const cardData = [
	  {
			id: 'softwareDevelopment',
			nextLine: true,
			expertise: 'Software',
			secondExpertise: 'Development',
			description: 'Seasoned in .NET with 6+ years crafting scalable solutions, adept in OOP, SOLID principles, and best coding practices.',
			technologies: [],
	  },
	  {
			id: 'backend',
			nextLine: false,
			expertise: 'Backend',
			description: 'Expert in .NET with a strong focus on robust, scalable backends, complemented by proficiency in Django and Spring Boot.',
			technologies: ['DotNetCore', 'Django', 'SpringBoot'],
	  },
	  {
			id: 'frontend',
			nextLine: false,
			expertise: 'Frontend',
			description: 'Skilled in React, Next.js, and TypeScript creating responsive, user-focused interfaces that seamlessly integrate with dynamic backends.',
			technologies: ['React', 'Redux', 'NextJs', 'MaterialUI', 'Tailwind', 'JavaScript', 'TypeScript'],
	  },
	  {
			id: 'database',
			nextLine: false,
			expertise: 'Database',
			description: 'Proficient with SQL Server, PostgreSQL, MongoDB, optimizing data storage and retrieval for high-performance, scalable applications.',
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
			setCurrentIndex((prevIndex) => (prevIndex + totalCards - 1) % totalCards);
	  };

	  const visibleCards = cardData.slice(currentIndex, currentIndex + 3).concat(cardData.slice(0, Math.max(0, currentIndex + 3 - totalCards)));

	  return (
			<div className={'flex flex-col items-center justify-start space-y-4'}>
				  <div className={"flex justify-start items-start space-x-4 overflow-hidden"}>
						{visibleCards.map((card) => (
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
													  <p className={'descriptionText'}>{card.description}</p>
												</DescriptionLine>
										  </div>
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
						))}
				  </div>
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
						<button onClick={prevCard} className="px-4 py-2 rounded-full">Prev</button>
						<button onClick={nextCard} className="px-4 py-2 rounded-full">Next</button>
				  </div>
			</div>
	  );
}
