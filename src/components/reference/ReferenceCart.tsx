import Image from "next/image";

type Props = {
	profName: string;
	profImageUrl: string;
	profRole: string;
	profText: string;
	profUniversity: string;
}

export default function ReferenceCard({profName, profImageUrl, profRole, profText, profUniversity}: Props) {
	return (
		<>
			{/* Profile picture and roles */}
			<div className={'referenceInfoEnv'}>
				<div className={'referenceInfo'}>
					<Image
						className={'referenceImage'}
						src={`/images/reference/${profImageUrl}.jpg`}
						alt={`Prof. + ${profName}`}
						width={50}
						height={50}
					/>
					<h3 className={'referenceName'}>
						{profName}
					</h3>
					<h3 className={'referenceRole'}>
						{profRole}
					</h3>
					<h4 className={'referenceUniversity'}>
						{profUniversity}
					</h4>
				</div>
				{/* Reference text */}
				<p className={'referenceText'}>
					{profText}
				</p>
			</div>
		</>
	)
}