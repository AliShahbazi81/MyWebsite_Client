import React from "react";
import CardHeader from "@/components/cards/CardHeader";

export default function ExpertiseCard() {
	  return (
			<div className={'flex justify-center items-start sm: '}>
				  {/* Title and icon*/}
				  <div className={'card'}>
						<CardHeader expertise={"Software"} nextLine={true} secondExpertise={"Development"}/>
						{/* Card's Body*/}
						<div>
							  {/* h2 element */}
							  <div>
									
							  </div>
							  {/* Title description*/}
							  <div>
									
							  </div>
						</div>
				  </div>
				  <div className={'card'}>
						<CardHeader expertise={"Backend"}/>
				  </div>
				  <div className={'card'}>
						<CardHeader expertise={"Frontend"}/>

				  </div>
				  <div className={'card'}>
						<CardHeader expertise={"Database"}/>
				  </div>
			</div>
	  )
}