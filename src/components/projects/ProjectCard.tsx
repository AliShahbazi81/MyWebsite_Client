import Image from "next/image";

type Props = {
	  imageName: string
}

export default function ProjectCard({imageName}: Props)
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
				  <p>Hey there</p>
						
			</div>
	  )
}