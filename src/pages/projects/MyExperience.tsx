import ExperienceCard from "@/pages/projects/ExperienceCard";
import {useState} from "react";
import {useTranslation} from "next-i18next";


export default function MyExperience() {
	  const {t} = useTranslation('common');
	  const [activeCard, setActiveCard] = useState(null);

	  const handleSetActiveCard = (companyName: any) => {
			// Toggle the active card. If the same card is clicked again, it will hide its body.
			setActiveCard(current => current === companyName ? null : companyName);
	  };
	  return (
			<>
				  <div className={'expEnv'}>
						{[
							  {
									companyName: "Cedar Valley",
									dateFrom: "experienceCedarValleyDateFrom",
									dateTo: "experienceCedarValleyDateTo",
									description: "experienceCedarValleyDescription",
									country: "experienceCedarValleyCountry",
									position: "experienceCedarValleyPosition",
									role: "experienceCedarValleyRole",
									image: true,
									imageUrl: "CedarValley"
							  },
							  {
									companyName: "Orispot",
									dateFrom: "experienceOrispotDateFrom",
									dateTo: "experienceOrispotDateTo",
									description: "experienceOrispotDescription",
									country: "experienceOrispotCountry",
									position: "experienceOrispotPosition",
									role: "experienceOrispotRole",
									image: true,
									imageUrl: "Orispot"
							  },
							  {
									companyName: "Parisa Shafaq",
									dateFrom: "experienceParisaShafaqDateFrom",
									dateTo: "experienceParisaShafaqDateTo",
									description: "experienceParisaShafaqDescription",
									country: "experienceParisaShafaqCountry",
									position: "experienceParisaShafaqPosition",
									role: "experienceParisaShafaqRole",
									image: true,
									imageUrl: "ParisaShafagh"
							  },
						].map((experience, index) => (
							  <ExperienceCard
									key={index}
									{...experience}
									isActive={activeCard === experience.companyName}
									onHeaderClick={() => handleSetActiveCard(experience.companyName)}
							  />
						))}
				  </div>
				  <h1 id={"education"} className={'title mt-6'}>
						{t('titleEducation')}
				  </h1>
				  <div className={'expEnv'}>
						{[
							  {
									companyName: "University of Windsor (Master)",
									dateFrom: "educationWindsorDateFrom",
									dateTo: "educationWindsorDateTo",
									description: "educationWindsorDescription",
									country: "educationWindsorCountry",
									position: "educationWindsorPosition",
									role: "educationWindsorRole",
									image: true,
									imageUrl: "UniversityOfWindsor"
							  },
							  {
									companyName: "Azad University (Bachelor)",
									dateFrom: "educationAzadUniversityDateFrom",
									dateTo: "educationAzadUniversityDateTo",
									description: "educationAzadUniversityDescription",
									country: "educationAzadUniversityCountry",
									position: "educationAzadUniversityPosition",
									role: "educationAzadUniversityRole",
									image: true,
									imageUrl: "AzadUniversity"
							  }
						].map((experience, index) => (
							  <ExperienceCard
									key={index}
									{...experience}
									isActive={activeCard === experience.companyName}
									onHeaderClick={() => handleSetActiveCard(experience.companyName)}
							  />
						))}
				  </div>
			</>
	  );
}