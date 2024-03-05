import Image from "next/image";
import React from "react";
import {Trans, useTranslation} from "next-i18next";

export default function UserActivity()
{
	const {t} = useTranslation('common');
	return(
		<>
			<h2 className={'projectDetailHeading'}>{t('projectUserActivityIntro')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans 
				i18nKey={'projectUserActivityIntroDescription'}
				components={{
					1: <span className="text-primary font-normal"><b/></span>,
					3: <span className="text-primary font-normal"><b/></span>,
					5: <span className="text-primary font-normal"><b/></span>,
				}}
				/>
			</p>
			<Image
				className={'projectDetailDiagram'}
				src={`/images/diagrams/user-activity-diagram.svg`}
				alt={"user-activity-diagram"}
				width={1300}
				height={1200}
				title={"User Activity Diagram"}
			/>

			<h2 className={'projectDetailHeading'}>{t('projectUserActivityFeatures')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectUserActivityFeaturesDescription'}
					components={{
						1: <span className="text-primary font-normal"><b/></span>,
						3: <span className="text-primary font-normal"><b/></span>,
						5: <span className="text-primary font-normal"><b/></span>,
						7: <span className="text-primary font-normal"><b/></span>,
						9: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectUserActivityTechnology')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectUserActivityTechnologyDescription'}
					components={{
						1: <span className="text-primary font-normal"><b/></span>,
						3: <span className="text-primary font-normal"><b/></span>,
						5: <span className="text-primary font-normal"><b/></span>,
						7: <span className="text-primary font-normal"><b/></span>,
						9: <span className="text-primary font-normal"><b/></span>,
						11: <span className="text-primary font-normal"><b/></span>,
						13: <span className="text-primary font-normal"><b/></span>,
						15: <span className="text-primary font-normal"><b/></span>,
						17: <span className="text-primary font-normal"><b/></span>,
						19: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectUserActivityDevelopment')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectUserActivityDevelopmentDescription'}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectUserActivityPersonal')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectUserActivityPersonalDescription'}
					components={{
						1: <span className="text-primary font-normal"><b/></span>,
						3: <span className="text-primary font-normal"><b/></span>,
						5: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>
		</>
	)
}