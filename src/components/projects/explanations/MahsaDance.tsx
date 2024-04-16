import Image from "next/image";
import React from "react";
import {Trans, useTranslation} from "next-i18next";

export default function MahsaDance() {
	const {t} = useTranslation('common');
	return (
		<>
			<h2 className={'projectDetailHeading'}>{t('projectMahsaDanceIntro')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey="projectMahsaDanceIntroDescription"
					components={{
						1: <span className="text-primary font-normal"><b/></span>,
						3: <span className="text-primary font-normal"><b/></span>,
						5: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectMahsaDanceFeatures')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectMahsaDanceFeaturesDescription'}
					components={{
						1: <span className="text-primary font-normal"><b/></span>,
						3: <span className="text-primary font-normal"><b/></span>,
						5: <span className="text-primary font-normal"><b/></span>,
						7: <span className="text-primary font-normal"><b/></span>,
						9: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectMahsaDanceTechnology')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectMahsaDanceTechnologyDescription'}
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
						10: <span className="text-primary font-normal"><b/></span>,
						11: <span className="text-primary font-normal"><b/></span>,
						12: <span className="text-primary font-normal"><b/></span>,
						13: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>
			<Image
				className={'projectDetailDiagram h-1/2'}
				src={`/images/diagrams/mahsa-dance-diagram.svg`}
				alt={"mahsa-dance-diagram"}
				width={400}
				height={800}
				title={"Mahsa Dance Diagram"}
			/>

			<h2 className={'projectDetailHeading'}>{t('projectMahsaDanceDevelopment')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectMahsaDanceDevelopmentDescription'}
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
						10: <span className="text-primary font-normal"><b/></span>,
						11: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectMahsaDancePersonal')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectMahsaDancePersonalDescription'}
					components={{
						1: <span className="text-primary font-normal"><b/></span>,
						2: <span className="text-primary font-normal"><b/></span>,
						3: <span className="text-primary font-normal"><b/></span>,
						4: <span className="text-primary font-normal"><b/></span>,
						5: <span className="text-primary font-normal"><b/></span>,
						6: <span className="text-primary font-normal"><b/></span>,
						7: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>
		</>
	)
}