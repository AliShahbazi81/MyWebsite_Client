import Image from "next/image";
import React from "react";
import {Trans, useTranslation} from "next-i18next";

export default function ECommerce() {
	const {t} = useTranslation('common');
	return(
		<>
			<h2 className={'projectDetailHeading'}>{t('projectECommerceIntro')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans 
				i18nKey={'projectECommerceIntroDescription'}
				components={{
					1: <span className="text-primary font-normal"><b/></span>,
					3: <span className="text-primary font-normal"><b/></span>,
				}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectECommerceFeatures')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans 
				i18nKey={'projectECommerceFeaturesDescription'}
				components={{
					1: <span className="text-primary font-normal"><b/></span>,
					3: <span className="text-primary font-normal"><b/></span>,
					5: <span className="text-primary font-normal"><b/></span>,
					7: <span className="text-primary font-normal"><b/></span>,
				}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectECommerceArchitecture')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans 
				i18nKey={'projectECommerceArchitectureDescription'}
				components={{
					1: <span className="text-primary font-normal"><b/></span>,
					3: <span className="text-primary font-normal"><b/></span>,
				}}
				/>
			</p>
			<Image
				className={'projectDetailDiagram'}
				src={`/images/diagrams/e-commerce-diagram.svg`}
				alt={"e-commerce-diagram"}
				width={1300}
				height={1200}
				title={"E-Commerce Diagram"}
			/>

			<h2 className={'projectDetailHeading'}>{t('projectECommerceTechnology')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans 
				i18nKey={'projectECommerceTechnologyDescription'}
				components={{
					1: <span className="text-primary font-normal"><b/></span>,
					3: <span className="text-primary font-normal"><b/></span>,
					5: <span className="text-primary font-normal"><b/></span>,
					7: <span className="text-primary font-normal"><b/></span>,
					9: <span className="text-primary font-normal"><b/></span>,
				}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectECommerceImpact')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans 
				i18nKey={'projectECommerceImpactDescription'}
				components={{
					1: <span className="text-primary font-normal"><b/></span>,
					3: <span className="text-primary font-normal"><b/></span>,
				}}
				/>
			</p>
		</>
	)
}