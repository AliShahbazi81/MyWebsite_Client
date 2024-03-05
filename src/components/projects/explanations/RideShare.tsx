import Image from "next/image";
import React from "react";
import {Trans, useTranslation} from "next-i18next";

export default function RideShare() {
	const {t} = useTranslation('common');
return(
	<>
		<h2 className={'projectDetailHeading'}>{t('projectRideShareOverview')}</h2>
		<p className={'projectDetailDescription'}>
			<Trans 
			i18nKey={'projectRideShareOverviewDescription'}
			components={{
				1: <span className="text-primary font-normal"><b/></span>,
				3: <span className="text-primary font-normal"><b/></span>,
				5: <span className="text-primary font-normal"><b/></span>,
			}}
			/>
		</p>
		<Image
			className={'projectDetailDiagram'}
			src={`/images/diagrams/ride-share-diagram.svg`}
			alt={"ride-share-diagram"}
			width={2000}
			height={2000}
			objectFit={"cover"}
			title={"Ride Share Diagram"}
			quality={100}
		/>

		<h2 className={'projectDetailHeading'}>{t('projectRideShareFeatures')}</h2>
		<p className={'projectDetailDescription'}>
			<Trans
				i18nKey={'projectRideShareFeaturesDescription'}
				components={{
					1: <span className="text-primary font-normal"><b/></span>,
					3: <span className="text-primary font-normal"><b/></span>,
					5: <span className="text-primary font-normal"><b/></span>,
				}}
			/>
		</p>

		<h2 className={'projectDetailHeading'}>{t('projectRideShareTechnology')}</h2>
		<p className={'projectDetailDescription'}>
			<Trans
				i18nKey={'projectRideShareTechnologyDescription'}
				components={{
					1: <span className="text-primary font-normal"><b/></span>,
					3: <span className="text-primary font-normal"><b/></span>,
					5: <span className="text-primary font-normal"><b/></span>,
					7: <span className="text-primary font-normal"><b/></span>,
					9: <span className="text-primary font-normal"><b/></span>,
				}}
			/>
		</p>

		<h2 className={'projectDetailHeading'}>{t('projectRideShareSecurity')}</h2>
		<p className={'projectDetailDescription'}>
			<Trans
				i18nKey={'projectRideShareSecurityDescription'}
				components={{
					1: <span className="text-primary font-normal"><b/></span>,
					3: <span className="text-primary font-normal"><b/></span>,
				}}
			/>
		</p>

		<h2 className={'projectDetailHeading'}>{t('projectRideShareChallenges')}</h2>
		<p className={'projectDetailDescription'}>
			<Trans
				i18nKey={'projectRideShareChallengesDescription'}
				components={{
					1: <span className="text-primary font-normal"><b/></span>,
					3: <span className="text-primary font-normal"><b/></span>,
					5: <span className="text-primary font-normal"><b/></span>,
				}}
			/>
		</p>

		<h2 className={'projectDetailHeading'}>{t('projectRideShareReflections')}</h2>
		<p className={'projectDetailDescription'}>
			<Trans
				i18nKey={'projectRideShareReflectionsDescription'}
			/>
		</p>
	</>
)
}