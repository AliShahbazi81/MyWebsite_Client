import Image from "next/image";
import ProjectTechnology from "@/components/projects/ProjectTechnology";
import "./../../app/css/project.scss"
import Link from "next/link";

type Props = {
	  imageName: string
	  projectName: string
	  projectDetail: string
	  github?: string
	  techName: string[]
}

export default function ProjectCard({imageName, projectName, projectDetail, techName, github}: Props) {
	  return (
			<div className={'projectCardEnv'}>
				  <Image
						className={'projectImage'}
						src={`/images/project/${imageName}.png`}
						alt={`${imageName}`}
						width={500}
						height={400}
						quality={100}
				  />
				  <div className={'projectCardBodyEnv'}>
						<div className={'flex justify-between items-center'}>
							  <h2 className={'projectTitle'}>
									{projectName}
							  </h2>
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
						</div>
						<div className={'break-line'}></div>
						<h6 className={'projectBodyDetail'}>
							  {projectDetail}
						</h6>
						<div className={'break-line'}></div>
						<ProjectTechnology techName={techName}/>
						<div className={'projectViewMoreNav'}>
							  <span className={"projectIcon projectArrow"}></span>
						</div>
				  </div>


			</div>
	  )
}