import ExperienceCard from "@/components/experience/ExperienceCard";



export default function MyExperience()
{
	  return(
			<div className={'expEnv'}>
				  <ExperienceCard companyName={"Cedar Valley"} dateFrom={"Sep 2020"} dateTo={"Sep 2024"} description={"Description Test"} country={"Canada, Windsor"} image={false} />
				  <ExperienceCard companyName={"Orispot"} dateFrom={"Sep 2020"} dateTo={"Sep 2024"} description={"Description Test"} country={"Australia, Sydney"} image={false} />
				  <ExperienceCard companyName={"Parisa Shafaq"} dateFrom={"Sep 2020"} dateTo={"Sep 2024"} description={"Description Test"} country={"Iran, Tehran"} image={false} />
			</div>
	  )
}