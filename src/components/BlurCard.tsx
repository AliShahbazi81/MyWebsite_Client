'use client'

import Image from "next/image";

type Props = {
	  imageName: string
}

export default function BlurCard({imageName}: Props)
{
	  return(
			<div className={'blurEnv blurCard'}>
				  <Image 
						src={`/images/project/${imageName}`} 
						alt={imageName}
						width={50}
						height={50}
						layout={"fill"}
						objectFit={"cover"}
				  />
			</div>
	  )
}