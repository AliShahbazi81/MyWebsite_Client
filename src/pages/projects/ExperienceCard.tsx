import Image from "next/image";
import "../../app/css/experience.scss";
import {DateTime} from "next-auth/providers/kakao";
import ExperienceDescription from "@/components/experience/ExperienceDescription";
import {CiLocationOn} from "react-icons/ci";
import {useTranslation} from "next-i18next";

type Props = {
	companyName: string;
	dateFrom: DateTime;
	dateTo: DateTime;
	description: string;
	country: string;
	position: string;
	isActive: boolean;
	role: string;
	image?: boolean;
	imageUrl?: string;
	onHeaderClick: () => void;
}
export default function ExperienceCard(
	{
		companyName,
		dateFrom,
		dateTo,
		description,
		country,
		position,
		isActive,
		role,
		onHeaderClick,
		imageUrl,
		image
	}: Props) {
	const {t} = useTranslation('common');
	return (
		<>
			<div
				className={`headerEnv ${isActive ? 'bg-cardActive' : 'bg-card'}`}
				onClick={onHeaderClick}
			>
				<div className={'headerDetail'}>
					<h2 className={'expHeader'}>{companyName}</h2>
					<h3 className={'headerCountry'}><CiLocationOn color={"white"} className={'mr-1'}/> {t(country)} -
						({t(position)})</h3>
				</div>
				<h2 className={'expDate'}>{t(dateFrom)} - {t(dateTo)}</h2>
			</div>
			<div
				className={`bodyEnv ${isActive ? 'visible max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<ExperienceDescription
					description={t(description)}
					role={t(role)}
				/>
				{image &&
                    <Image
                        className={'bodyImage'}
                        src={`/images/experience/${imageUrl}.png`}
                        alt={`${companyName} icon`}
                        width={100}
                        height={100}
                    />
				}
			</div>
		</>
	);
}