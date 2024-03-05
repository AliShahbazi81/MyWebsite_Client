import React, {useState} from 'react';
import CardHeader from "@/components/cards/CardHeader";
import TagElement from "@/components/cards/TagElement";
import DescriptionLine from "@/components/cards/DescriptionLine";
import Technologies from "@/components/cards/Technologies";
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Image from "next/image";
import "../../app/css/expertise.scss"
import {Trans, useTranslation} from "next-i18next";

const cardData = [
	{
		id: 'softwareDevelopment',
		expertise: 'expertiseSoftwareDevelopmentTitle',
		description:'expertiseDescriptionSoftwareDevelopment',
		technologies: [],
	},
	{
		id: 'backend',
		nextLine: false,
		expertise: 'expertiseBackendTitle',
		description: 'expertiseDescriptionBackend',
		technologies: ['DotNetCore', 'Django', 'SpringBoot'],
	},
	{
		id: 'frontend',
		expertise: 'expertiseFrontendTitle',
		description: 'expertiseDescriptionFrontend',
		technologies: ['React', 'Redux', 'NextJs', 'MaterialUI', 'Tailwind', 'JavaScript', 'TypeScript'],
	},
	{
		id: 'database',
		expertise: 'expertiseDatabaseTitle',
		description:'expertiseDescriptionDatabase',
		technologies: ['MongoDb', 'PostgresSql', 'Redis', 'SqlServer', 'MySql'],
	},
];

export default function MyExpertise() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState('prev');
	const {t} = useTranslation('common');

	const totalCards = cardData.length;

	const nextCard = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
		setDirection('next');
	};

	const prevCard = () => {
		setCurrentIndex((prevIndex) => {
			return prevIndex - 1 < 0 ? totalCards - 1 : prevIndex - 1;
		});
		setDirection('prev');
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
		<div className={'cardEnv'}>
			<TransitionGroup className="cardTransition">
				{visibleCards.map((card) => (
					<CSSTransition
						key={card.id}
						timeout={250}
						classNames={direction === 'next' ? "slide" : "slide-prev"}
					>
						<div className={`cardExpertise ${card.id + "Card"}`}>
							<CardHeader
								expertise={t(card.expertise)}
								id={card.id}
							/>
							<div className={'mt-4'}>
								<TagElement {...{[card.id]: true}} />
								<div className={'cardBody'}>
									<DescriptionLine>
										<p className={'descriptionText'}>
											<Trans
												i18nKey={card.description}
												components={{
													1: <span className="text-primary font-normal"><b/></span>,
													3: <span className="text-primary font-normal"><b/></span>,
													5: <span className="text-primary font-normal"><b/></span>,
												}}
											/>
										</p>
									</DescriptionLine>
								</div>
								<TagElement {...{[card.id]: true}} />
								<div className={'technologyEnv'}>
									<h1 className={'technologyTitle'}>{t('expertiseTitleTechnologies')} :</h1>
									<div className={'flex items-center justify-center flex-wrap'}>
										{card.technologies.map((tech) => (
											<Technologies key={tech} keyword={tech}/>
										))}
									</div>
								</div>
								<div className={'break-line shine-effect'}></div>
							</div>
						</div>
					</CSSTransition>
				))}
			</TransitionGroup>
			<div className={'flex items-center justify-center'}>
				<Image
					className={'blurLogo'}
					src={"/images/Logo.png"}
					alt={"Logo"}
					width={800}
					height={900}
				/>
			</div>
			<div className={'navigation'}>
				<button onClick={prevCard} className="px-2 py-1 sm:px-4 sm:py-2 shine-effect">&#60;</button>
				<button onClick={nextCard} className="px-2 py-1 sm:px-4 sm:py-2 shine-effect">&#62;</button>
			</div>
		</div>
	);
}