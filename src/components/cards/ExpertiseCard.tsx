import Image from "next/image";
import React from "react";

export default function ExpertiseCard() {
	  return (
			<div className={'flex justify-center items-start sm: '}>
				  {/* Title and icon*/}
						<div className={'card'}>
							  <div className={'cardHeader'}>
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
									Software <br/>Development
							  </h1>
						</div>
				  </div>
				  <div className={'card'}>
						<div className={'cardHeader'}>
							  {/*Icon*/}
							  <Image
									src={'/images/Backend.png'}
									alt={"Backend"}
									className={'icon'}
									layout={"fixed"}
									width={100}
									height={100}
							  />
							  {/* Title */}
							  <h1 className={'cardTitle'}>
									Backend
							  </h1>
						</div>
				  </div>
				  <div className={'card'}>
						<div className={'cardHeader'}>
							  {/*Icon*/}
							  <Image
									src={'/images/Frontend.png'}
									alt={"Frontend"}
									className={'icon'}
									layout={"fixed"}
									width={100}
									height={100}
							  />
							  {/* Title */}
							  <h1 className={'cardTitle'}>
									Frontend
							  </h1>
						</div>

				  </div>
				  <div className={'card'}>
						<div className={'cardHeader'}>
							  {/*Icon*/}
							  <Image
									src={'/images/Database.png'}
									alt={"Database"}
									className={'icon'}
									layout={"fixed"}
									width={100}
									height={100}
							  />
							  {/* Title */}
							  <h1 className={'cardTitle'}>
									Database
							  </h1>
						</div>
				  </div>
			</div>
	  )
}