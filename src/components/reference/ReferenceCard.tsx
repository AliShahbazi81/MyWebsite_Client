import Image from "next/image";
import {FaLinkedin} from "react-icons/fa6";
import Link from "next/link";

type Props = {
	profName: string;
	profImageUrl: string;
	profRole: string;
	profText: string;
	profUniversity: string;
	profLinkedInUrl: string;
}

export default function ReferenceCard(
	{
		profName,
		profImageUrl,
		profRole,
		profText,
		profUniversity,
		profLinkedInUrl
	}: Props) {
	return (
		<>
			{/* Profile picture and roles */}
			<div className={'referenceInfoEnv'}>
				<div className={'referenceInfo'}>
					<Image
						className={'referenceImage'}
						src={`/images/reference/${profImageUrl}.jpg`}
						alt={`Prof. + ${profName}`}
						width={80}
						height={80}
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
					<Link href={`${profLinkedInUrl}`}>
						<FaLinkedin
							className={'cursor-pointer w-[80%] h-[80%]'}
							color={"white"}
							size={22}
						/>
					</Link>
				</div>
				{/* Reference text */}
				<p className={'referenceText'}>
					{profText}
				</p>
			</div>
		</>
	)
}