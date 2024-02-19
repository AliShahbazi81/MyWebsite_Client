'use client'
import Image from "next/image";
import React from "react";

type Props = {
	  expertise: string
	  nextLine?: boolean
	  secondExpertise?: string
}

export default function CardHeader({expertise, nextLine, secondExpertise}: Props)
{
	  return(
			<div className={'cardHeader'}>
				  {/*Icon*/}
				  <Image
						src={`/images/${nextLine ? expertise + secondExpertise : expertise}.png`}
						alt={`${nextLine ? expertise + secondExpertise : expertise}`}
						className={'icon'}
						width={300}
						height={300}
				  />
				  {/* Title */}
				  <h1 className={'cardTitle'}>
						{nextLine 
							  ? expertise + "\n" + secondExpertise 
							  : expertise
						}
				  </h1>
			</div>
	  )
}