import React from "react";
import CardHeader from "@/components/cards/CardHeader";
import TagElement from "@/components/cards/TagElement";
import DescriptionLine from "@/components/cards/DescriptionLine";

export default function ExpertiseCard() {
	  return (
			<div className={'flex justify-center items-start sm: '}>
				  {/* Title and icon*/}
				  <div className={'card'}>
						<CardHeader expertise={"Software"} nextLine={true} secondExpertise={"Development"}/>
						{/* Card's Body*/}
						<div className={'mt-4'}>
							  {/* h2 element */}
							  <TagElement softwareDevelopment={true}/>
							  {/* Title description*/}
							  <div className={'cardBody'}>
									<DescriptionLine>
										  <p className={'descriptionText'}>Seasoned in .NET with <u><b>6+ years</b></u> crafting scalable solutions, adept in <u><b>OOP, SOLID</b></u> principles, and best coding practices.</p>
									</DescriptionLine>
							  </div>
							  {/* h2 element - end*/}
							  <TagElement softwareDevelopment={true}/>
						</div>
				  </div>
				  <div className={'card'}>
						<CardHeader expertise={"Backend"}/>
						{/* Card's Body*/}
						<div className={'mt-8'}>
							  {/* h2 element - Start*/}
							  <TagElement backend={true}/>
							  {/* Title description*/}
							  <div className={'cardBody'}>
									<DescriptionLine>
										  <p className={'descriptionText'}>Expert in <u><b>.NET</b></u> with a strong focus on robust, scalable backends, complemented by proficiency in <u><b>Django</b></u> and <u><b>Spring Boot.</b></u></p>
									</DescriptionLine>
							  </div>
							  {/* h2 element - End*/}
							  <TagElement backend={true}/>
						</div>
				  </div>
				  <div className={'card'}>
						<CardHeader expertise={"Frontend"}/>
						{/* Card's Body*/}
						<div className={'mt-8'}>
							  {/* h2 element */}
							  <TagElement frontend={true}/>
							  {/* Title description*/}
							  <div className={'cardBody'}>
									<DescriptionLine>
										  <p className={'descriptionText'}> Skilled in <u><b>React</b></u>, <u><b>Next.js</b></u>, and <u><b>TypeScript</b></u> creating responsive, user-focused interfaces that seamlessly integrate with dynamic backends.</p>
									</DescriptionLine>
							  </div>
							  {/* h2 element - End*/}
							  <TagElement frontend={true}/>
						</div>

				  </div>
				  <div className={'card'}>
						<CardHeader expertise={"Database"}/>
						{/* Card's Body*/}
						<div className={'mt-8'}>
							  {/* h2 element */}
							  <TagElement database={true}/>
							  {/* Title description*/}
							  <div className={'cardBody'}>
									<DescriptionLine>
										  <p className={'descriptionText'}>Proficient with <u><b>Server</b></u>, <u><b>PostgreSQL</b></u>, <u><b>MongoDB</b></u>, optimizing data storage and retrieval for high-performance, scalable applications.</p>
									</DescriptionLine>
							  </div>
							  {/* h2 element - End*/}
							  <TagElement database={true}/>
						</div>
				  </div>
			</div>
	  )
}