'use client'

import Image from "next/image";

type Props = {
	  imageName: string
}

export default function BlurCard({imageName}: Props)
{
	  return(
			<div className={'blurEnv blurProjectCard'}>
				  <Image 
						src={`/images/${imageName}.jpg`} 
						alt={imageName}
						height={50}
						width={50}
						objectFit={"cover"}
				  />
			</div>
	  )
}