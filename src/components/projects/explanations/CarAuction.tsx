import Image from "next/image";
import React from "react";
import {Trans, useTranslation} from "next-i18next";

export default function CarAuction() {
	const {t} = useTranslation('common');
	return (
		<>
			<h2 className={'projectDetailHeading'}>{t('projectCarAuctionIntro')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey="projectCarAuctionIntroDescription"
					components={{
						1: <span className="text-primary font-normal"><b/></span>,
						3: <span className="text-primary font-normal"><b/></span>
					}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectCarAuctionFeatures')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectCarAuctionFeaturesDescription'}
					components={{
						1: <span className="text-primary font-normal"><b/></span>,
						3: <span className="text-primary font-normal"><b/></span>,
						5: <span className="text-primary font-normal"><b/></span>,
						7: <span className="text-primary font-normal"><b/></span>,
						9: <span className="text-primary font-normal"><b/></span>,
					}}
				/>
			</p>

			<h2 className={'projectDetailHeading'}>{t('projectCarAuctionArchitecture')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectCarAuctionArchitectureDescription'}
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
				className={'projectDetailDiagram'}
				src={`/images/diagrams/car-auction-diagram.svg`}
				alt={"car-auction-diagram"}
				width={1300}
				height={1200}
				title={"Car Auction Diagram"}
			/>

			<h2 className={'projectDetailHeading'}>{t('projectCarAuctionTechnological')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectCarAuctionTechnologicalDescription'}
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

			<h2 className={'projectDetailHeading'}>{t('projectCarAuctionImpact')}</h2>
			<p className={'projectDetailDescription'}>
				<Trans
					i18nKey={'projectCarAuctionImpactDescription'}
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