import React from "react";
import CardHeader from "@/components/cards/CardHeader";
import TagElement from "@/components/cards/TagElement";
import DescriptionLine from "@/components/cards/DescriptionLine";
import Image from "next/image";

export default function ExpertiseCard() {
	  return (
			<div className={'flex flex-col items-center justify-center'}>
				  <div className={"flex justify-center items-start "}>
						{/* Title and icon*/}
						<div className={'card softwareDevelopmentCard'}>
							  <CardHeader expertise={"Software"} nextLine={true} secondExpertise={"Development"}/>
							  {/* Card's Body*/}
							  <div className={'mt-4'}>
									{/* h2 element */}
									<TagElement softwareDevelopment={true}/>
									{/* Title description*/}
									<div className={'cardBody'}>
										  <DescriptionLine>
												<p className={'descriptionText'}>Seasoned in .NET with <span className={'text-primary'}><u><b>6+ years</b></u></span> crafting scalable solutions, adept in <span className={'text-primary'}><u><b>OOP, SOLID</b></u></span> principles, and best coding practices.</p>
										  </DescriptionLine>
									</div>
									{/* h2 element - end*/}
									<TagElement softwareDevelopment={true}/>
							  </div>
						</div>
						<div className={'card backendCard'}>
							  <CardHeader expertise={"Backend"}/>
							  {/* Card's Body*/}
							  <div className={'mt-8'}>
									{/* h2 element - Start*/}
									<TagElement backend={true}/>
									{/* Title description*/}
									<div className={'cardBody'}>
										  <DescriptionLine>
												<p className={'descriptionText'}>Expert in <span className={'text-primary'}><u><b>.NET</b></u></span> with a strong focus on robust, scalable backends, complemented by proficiency in <span className={'text-primary'}><u><b>Django</b></u></span> and <span className={'text-primary'}><u><b>Spring Boot.</b></u></span></p>
										  </DescriptionLine>
									</div>
									{/* h2 element - End*/}
									<TagElement backend={true}/>
							  </div>
						</div>
						<div className={'card frontendCard'}>
							  <CardHeader expertise={"Frontend"}/>
							  {/* Card's Body*/}
							  <div className={'mt-8'}>
									{/* h2 element */}
									<TagElement frontend={true}/>
									{/* Title description*/}
									<div className={'cardBody'}>
										  <DescriptionLine>
												<p className={'descriptionText'}> Skilled in <span className={'text-primary'}><u><b>React</b></u></span>, <span className={'text-primary'}><u><b>Next.js</b></u></span>, and <span className={'text-primary'}><u><b>TypeScript</b></u></span> creating responsive, user-focused interfaces that seamlessly integrate with dynamic backends.</p>
										  </DescriptionLine>
									</div>
									{/* h2 element - End*/}
									<TagElement frontend={true}/>
							  </div>

						</div>
						<div className={'card databaseCard'}>
							  <CardHeader expertise={"Database"}/>
							  {/* Card's Body*/}
							  <div className={'mt-8'}>
									{/* h2 element */}
									<TagElement database={true}/>
									{/* Title description*/}
									<div className={'cardBody'}>
										  <DescriptionLine>
												<p className={'descriptionText'}>
													  Proficient with <span className={'text-primary'}><u><b>SQL Server</b></u></span>, <span className={'text-primary'}><u><b>PostgreSQL</b></u></span>, <span className={'text-primary'}><u><b>MongoDB</b></u></span>, optimizing data storage and retrieval for high-performance, scalable applications.
													  
												</p>
										  </DescriptionLine>
									</div>
									{/* h2 element - End*/}
									<TagElement database={true}/>
							  </div>
						</div>
				  </div>
				  {/* Blur Logo*/}
				  <div className={'flex items-center justify-center'}>
						<Image
							  className={'blurLogo'}
							  src={"/images/Logo.png"}
							  alt={"Logo"}
							  width={800}
							  height={900}/>
				  </div>
			</div>
	  )
}