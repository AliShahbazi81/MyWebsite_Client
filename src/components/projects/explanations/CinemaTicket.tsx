import Image from "next/image";
import React from "react";
import {Trans, useTranslation} from "next-i18next";

export default function CinemaTicket() {
	const {t} = useTranslation('common');
	return (
		<>
			<h2 className={'projectDetailHeading'}>{t('projectCinemaTicketIntro')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectCinemaTicketIntroDescription'}
					components={{
						1: <span className="text-primary font-normal"><b/></span>,
						2: <span className="text-primary font-normal"><b/></span>,
						3: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectCinemaTicketFeatures')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectCinemaTicketFeaturesDescription'}
					components={{
						1: <span className="text-primary font-normal"><b/></span>,
						2: <span className="text-primary font-normal"><b/></span>,
						3: <span className="text-primary font-normal"><b/></span>,
						4: <span className="text-primary font-normal"><b/></span>,
						5: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectCinemaTicketTechnology')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectCinemaTicketTechnologyDescription'}
					components={{
						1: <span className="text-primary font-normal"><b/></span>,
						2: <span className="text-primary font-normal"><b/></span>,
						3: <span className="text-primary font-normal"><b/></span>,
						4: <span className="text-primary font-normal"><b/></span>,
						5: <span className="text-primary font-normal"><b/></span>,
						6: <span className="text-primary font-normal"><b/></span>,
						7: <span className="text-primary font-normal"><b/></span>,
						8: <span className="text-primary font-normal"><b/></span>,
						9: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectCinemaTicketDevelopment')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectCinemaTicketDevelopmentDescription'}
				/>
			</p>
			<Image
				className={'projectDetailDiagram'}
				src={`/images/diagrams/cinema-ticket-diagram.svg`}
				alt={"cinema-ticket-diagram"}
				width={1300}
				height={1200}
				title={"Cinema Ticket Diagram"}
			/>

			<h2 className={'projectDetailHeading'}>{t('personalCinemaTicketPersonalContributions')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectCinemaTicketPersonalContributionsDescription'}
				/>
			</p>
		</>
	)
}