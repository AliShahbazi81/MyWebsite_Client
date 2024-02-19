import React from "react";
import CardHeader from "@/components/cards/CardHeader";
import TagElement from "@/components/cards/TagElement";
import DescriptionLine from "@/components/cards/DescriptionLine";
import Image from "next/image";
import Technologies from "@/components/cards/Technologies";

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
												<p className={'descriptionText'}>Seasoned in .NET with <span className={'text-primary'}><b>6+ years</b></span> crafting scalable solutions, adept in <span className={'text-primary'}><b>OOP, SOLID</b></span> principles, and best coding practices.</p>
										  </DescriptionLine>
									</div>
									{/* h2 element - end*/}
									<TagElement softwareDevelopment={true}/>
							  </div>
							  <div className={'flex flex-col items-start justify-start'}>
									<h1 className={'technologyTitle'}>Technologies: </h1>
									<div className={'flex items-center justify-center'}>
										  
									</div>
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
												<p className={'descriptionText'}>Expert in <span className={'text-primary'}><b>.NET</b></span> with a strong focus on robust, scalable backends, complemented by proficiency in <span className={'text-primary'}><b>Django</b></span> and <span className={'text-primary'}><b>Spring Boot.</b></span></p>
										  </DescriptionLine>
									</div>
									{/* h2 element - End*/}
									<TagElement backend={true}/>
							  </div>
							  <div className={'flex flex-col items-start justify-start'}>
									<h1 className={'technologyTitle'}>Technologies: </h1>
									<div className={'flex items-center justify-center'}>
										  <Technologies keyword={"DotNetCore"}/>
										  <Technologies keyword={"Django"}/>
										  <Technologies keyword={"SpringBoot"}/>
										  <Technologies keyword={"Python"}/>
									</div>
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
												<p className={'descriptionText'}> Skilled in <span className={'text-primary'}><b>React</b></span>, <span className={'text-primary'}><b>Next.js</b></span>, and <span className={'text-primary'}><b>TypeScript</b></span> creating responsive, user-focused interfaces that seamlessly integrate with dynamic backends.</p>
										  </DescriptionLine>
									</div>
									{/* h2 element - End*/}
									<TagElement frontend={true}/>
							  </div>
							  <div className={'flex flex-col items-start justify-start'}>
									<h1 className={'technologyTitle'}>Technologies: </h1>
									<div className={'flex items-center justify-center'}>
										  <Technologies keyword={"React"}/>
										  <Technologies keyword={"Redux"}/>
										  <Technologies keyword={"NextJs"}/>
										  <Technologies keyword={"MaterialUI"}/>
										  <Technologies keyword={"Tailwind"}/>
										  <Technologies keyword={"JavaScript"}/>
										  <Technologies keyword={"TypeScript"}/>
									</div>
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
													  Proficient with <span className={'text-primary'}><b>SQL Server</b></span>, <span className={'text-primary'}><b>PostgreSQL</b></span>, <span className={'text-primary'}><b>MongoDB</b></span>, optimizing data storage and retrieval for high-performance, scalable applications.
													  
												</p>
										  </DescriptionLine>
									</div>
									{/* h2 element - End*/}
									<TagElement database={true}/>
							  </div>
							  <div className={'flex flex-col items-start justify-start'}>
									<h1 className={'technologyTitle'}>Technologies: </h1>
									<div className={'flex items-center justify-center'}>
										  <Technologies keyword={"MongoDb"}/>
										  <Technologies keyword={"PostgresSql"}/>
										  <Technologies keyword={"Redis"}/>
										  <Technologies keyword={"SqlServer"}/>
										  <Technologies keyword={"MySql"}/>
									</div>
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