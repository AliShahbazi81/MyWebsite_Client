import Image from "next/image";

type Props = {
	  imageName: string
	  projectName: string
	  projectDetail: string
}

export default function ProjectCard({imageName, projectName, projectDetail}: Props)
{
	  return(
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
						<h2 className={'projectTitle'}>
							  {projectName}
						</h2>
						<div className={'break-line'}></div>
						<h6 className={'projectBodyDetail'}>
							  {projectDetail}
						</h6>
				  </div>
				  
						
			</div>
	  )
}