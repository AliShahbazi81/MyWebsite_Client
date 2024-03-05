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
									dateFrom: "Sep 2022",
									dateTo: "Dec 2023",
									description: "During my Master of Applied Computing (MAC), I honed advanced skills in software development, focusing on both theoretical concepts and practical applications. This program equipped me with a deep understanding of computer science principles, including algorithm design, system architecture, and data analysis. I engaged in rigorous projects that emphasized problem-solving in real-world scenarios, leveraging cutting-edge technologies. My studies culminated in a comprehensive project that demonstrated my ability to innovate and apply my knowledge to complex challenges.",
									country: "Canada, Windsor",
									position: "In-Person",
									role: "Master of Applied Computing (MAC) - Computer Science",
									image: true,
									imageUrl: "UniversityOfWindsor"
							  },
							  {
									companyName: "Azad University (Bachelor)",
									dateFrom: "Sep 2015",
									dateTo: "Jun 2019",
									description: "In my Bachelor's degree in Software Engineering, I developed a solid foundation in the principles of engineering software systems, from design to implementation. This comprehensive program covered a wide range of topics, including software development life cycles, quality assurance, and database management. Through hands-on projects and collaborative teamwork, I acquired practical experience in developing robust, scalable, and efficient software solutions. My education emphasized not only technical proficiency but also the importance of ethical considerations and effective communication in the field of software engineering.",
									country: "Iran, Tehran",
									position: "In-Person",
									role: "Software Engineering",
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