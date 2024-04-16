'use client'
import Image from "next/image";
import ProjectTechnology from "@/components/projects/ProjectTechnology";
import "./../../app/css/project.scss"
import Link from "next/link";
import {useRouter} from "next/router";
import Language from "@mui/icons-material/Language";

type Props = {
	imageName: string
	projectName: string
	projectDetail: string
	github?: string
	webUrl?: string
	techName: string[],
	projectDetailUrl: string;
}

export default function ProjectCard(
	{
		imageName,
		projectName,
		projectDetail,
		techName,
		github,
		webUrl,
		projectDetailUrl,
	}: Props) {
	const router = useRouter();
	const {locale} = router;
	return (
		<div className={'projectCardEnv'}>
			<Link
				href={`/projects/${projectDetailUrl}`}
				className={'flex items-center justify-center w-full h-full'}
				locale={locale}
			>
				<Image
					className={'projectImage w-full h-full'}
					src={`/images/project/${imageName}.png`}
					alt={`${imageName}`}
					width={500}
					height={400}
					quality={100}
				>
				</Image>
			</Link>
			<div className={'projectCardBodyEnv'}>
				<div className={'projectCardBodyHeader'}>
					<Link href={`/projects/${projectDetailUrl}`} locale={locale}>
						<span>
							<h2 className={'projectTitle'}>
								{projectName}
							</h2>
							<span className={'projectArrow'}>
									➜
							</span>
						</span>
					</Link>
					{github ? (
						<Link href={github}>
							<Image
								src="/images/keywords/GitHub.png"
								alt="GitHub"
								width={25}
								height={20}
							/>
						</Link>
					) : null}
					{webUrl ? (
						<Link href={webUrl}>
							<Language />
						</Link>
					) : null}
				</div>
				<div className={'break-line'}></div>
				<h6 className={'projectBodyDetail'}>
					{projectDetail}
				</h6>
				<div className={'break-line'}></div>
				<ProjectTechnology techName={techName}/>
			</div>
		</div>
	)
}