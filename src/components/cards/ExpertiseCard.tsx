import Image from "next/image";
import React from "react";

export default function ExpertiseCard()
{
	  return(
			<div className={'flex justify-center items-start'}>
				  {/* Title and icon*/}
				  <div className={'card'}>
						{/*Icon*/}
						<Image 
							  src={'/images/SoftwareDevelopment.png'}
							  alt={"SoftwareDevelopment"} 
							  className={'icon'}
							  width={300}
							  height={300}
						/>
						{/* Title */}
						<h1 className={'cardTitle'}>
							  Software Development
						</h1>
				  </div>
				  <div className={'card'}>
						{/*Icon*/}
						<Image
							  src={'/images/SoftwareDevelopment.png'}
							  alt={"SoftwareDevelopment"}
							  className={'icon'}
							  layout={"fixed"}
							  width={100}
							  height={100}
						/>
						{/* Title */}
						<h1 className={'cardTitle'}>
							  Software Development
						</h1>
				  </div>
				  <div className={'card'}>
						{/*Icon*/}
						<Image
							  src={'/images/SoftwareDevelopment.png'}
							  alt={"SoftwareDevelopment"}
							  className={'icon'}
							  layout={"fixed"}
							  width={100}
							  height={100}
						/>
						{/* Title */}
						<h1 className={'cardTitle'}>
							  Software Development
						</h1>
				  </div>
			</div>
	  )
}