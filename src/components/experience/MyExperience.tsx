import ExperienceCard from "@/components/experience/ExperienceCard";
import {useState} from "react";


export default function MyExperience() {
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
						dateFrom: "Sep 2023",
						dateTo: "Jan 2024",
						description: "At Cedar Valley, I spearheaded the digital transformation of manual, paper-based processes into sophisticated digital systems as a Backend Developer, leveraging .NET Core and C# for developing robust backend systems. My contributions range from enhancing ingredient and logistics tracking to implementing RabbitMQ for message queuing and occasionally supporting the frontend with React.js, all underpinned by Microsoft SQL Server. This work has been crucial in reducing manual labor, errors, and enhancing operational efficiency and accountability.",
						country: "Canada, Windsor",
						position: "In-site",
						role: "Backend Developer",
						image: true,
						imageUrl: "CedarValley"
					},
					{
						companyName: "Orispot",
						dateFrom: "Apr 2023",
						dateTo: "Present",
						description: "In my role as a Full Stack Developer, I navigate the complexities of both backend and frontend development, leveraging .NET Core for backend solutions and ReactJS for creating engaging user interfaces. My expertise encompasses Object-Oriented Programming, Object-Relational Mapping, and rigorous testing practices to ensure high-quality software delivery. From architecting scalable backend functionalities with .NET Core to designing intuitive, responsive interfaces with ReactJS, my work is dedicated to enhancing user experience and application performance through modular code and comprehensive testing strategies.",
						country: "Australia, Sydney",
						position: "Remote",
						role: "Fullstack Developer",
						image: true,
						imageUrl: "Orispot"
					},
					{
						companyName: "Parisa Shafaq",
						dateFrom: "Apr 2017",
						dateTo: "Mar 2022",
						description: "At Parisa Shafaq, I significantly enhanced my expertise in SQL Server integration, database design, and Windows Forms applications, alongside deepening my understanding of software development fundamentals, teamwork, code optimization, and Git version control, all contributing to my comprehensive skill set in software development and system maintenance.",
						country: "Iran, Tehran",
						position: "In-site",
						role: "Windows (WinForms, WPF) and Web Developer",
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
			<h1 id={"education"}  className={'title mt-6'}>
				Education
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