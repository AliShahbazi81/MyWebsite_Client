import Image from "next/image";
import React from "react";
import {Trans, useTranslation} from "next-i18next";

export default function ELearning()
{
	const {t} = useTranslation('common');
	return(
		<>
			<h2 className={'projectDetailHeading'}>{t('projectELearningIntro')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans 
				i18nKey={'projectELearningIntroDescription'}
				components={{
					1: <span className="text-primary font-normal"><b/></span>,
					3: <span className="text-primary font-normal"><b/></span>,
				}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>K{t('projectELearningFeatures')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectELearningFeaturesDescription'}
					components={{
						1: <span className="text-primary font-normal"><b/></span>,
						3: <span className="text-primary font-normal"><b/></span>,
						5: <span className="text-primary font-normal"><b/></span>,
						7: <span className="text-primary font-normal"><b/></span>,
						9: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectELearningTechnology')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectELearningTechnologyDescription'}
					components={{
						1: <span className="text-primary font-normal"><b/></span>,
						3: <span className="text-primary font-normal"><b/></span>,
						5: <span className="text-primary font-normal"><b/></span>,
						7: <span className="text-primary font-normal"><b/></span>,
						9: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectELearningDevelopment')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectELearningDevelopmentDescription'}
				/>
			</p>
			<Image
				className={'projectDetailDiagram'}
				src={`/images/diagrams/e-learning-diagram.svg`}
				alt={"e-learning-diagram"}
				width={2000}
				height={2000}
				objectFit={"cover"}
				title={"E-Learning Diagram"}
				quality={100}
			/>

			<h2 className={'projectDetailHeading'}>{t('projectELearningPersonalContributions')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectELearningPersonalContributionsDescription'}
					components={{
						1: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>
		</>
	)
}