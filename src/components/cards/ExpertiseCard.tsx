import React from "react";
import CardHeader from "@/components/cards/CardHeader";
import TagElement from "@/components/cards/TagElement";

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
							  <div>
									
							  </div>
						</div>
				  </div>
				  <div className={'card'}>
						<CardHeader expertise={"Backend"}/>
						{/* Card's Body*/}
						<div className={'mt-8'}>
							  {/* h2 element */}
							  <TagElement backend={true}/>
							  {/* Title description*/}
							  <div>

							  </div>
						</div>
				  </div>
				  <div className={'card'}>
						<CardHeader expertise={"Frontend"}/>
						{/* Card's Body*/}
						<div className={'mt-8'}>
							  {/* h2 element */}
							  <TagElement frontend={true}/>
							  {/* Title description*/}
							  <div>

							  </div>
						</div>

				  </div>
				  <div className={'card'}>
						<CardHeader expertise={"Database"}/>
						{/* Card's Body*/}
						<div className={'mt-8'}>
							  {/* h2 element */}
							  <TagElement database={true}/>
							  {/* Title description*/}
							  <div>

							  </div>
						</div>
				  </div>
			</div>
	  )
}