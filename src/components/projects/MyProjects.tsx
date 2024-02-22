import GlassCard from "@/components/GlassCard";
import "./../../app/css/project.scss"
import ProjectCard from "@/components/projects/ProjectCard";

export default function MyProjects() {
	  return (
			<div className="projectEnv">
				  <GlassCard>
						<ProjectCard
							  imageName={"CarAuction"}
							  projectName={"Car Auction"}
							  projectDetail={"Carsties Auctions offers an online platform for car auctions with microservices architecture, enabling listings, bidding, and auction management in a user-friendly interface."}
							  techName={['.NET Core', 'NextJS', 'Tailwind', 'Zustand']}
							  github={"https://github.com/AliShahbazi81/Carsties_Auctions"}
						/>
				  </GlassCard>
				  <GlassCard>
						<ProjectCard
							  imageName={"Auctria"}
							  projectName={"E-Commerce"}
							  projectDetail={"The e-commerce application is a scalable, backend-focused online shopping platform for product auctioning, featuring clean architecture for efficient maintenance."}
							  techName={['.NET', 'Sqlite', 'Redis']}
							  github={"https://github.com/AliShahbazi81/Auctria_Application"}
						/>
				  </GlassCard>
				  <GlassCard>
						<ProjectCard
							  imageName={"RideShare"}
							  projectName={"RideShare"}
							  projectDetail={"The RideShare app is a backend-driven platform, utilizing SOLID principles and n-tier architecture, to automatically connect applicants with drivers, including payment functionality."}
							  techName={['.NET Core', 'SqlServer', 'Redis']}
						/>
				  </GlassCard>
				  <GlassCard>
						<ProjectCard
							  imageName={"OnlineLearning"}
							  projectName={"E-Learning"}
							  projectDetail={"The Online Learning app offers a platform where users can purchase packages to access and complete online tutorials and courses, earning certifications upon completion."}
							  techName={['Django', "HTML", 'CSS', 'JS', 'SqlServer']}
							  github={"https://github.com/AliShahbazi81/WhiteboardApp"}
						/>
				  </GlassCard>
				  <GlassCard>
						<ProjectCard
							  imageName={"ActivityApplication"}
							  projectName={"User's Activity"}
							  projectDetail={"The Activity Application is a .NET Core and React-based platform for creating, sharing, and joining activities, featuring user interaction and participation management."}
							  techName={['.NET Core', "React", 'MobX', 'PostgresSQL']}
							  github={"https://github.com/AliShahbazi81/Activity_Application"}
						/>
				  </GlassCard>
				  <GlassCard>
						<ProjectCard
							  imageName={"CinemaTicket"}
							  projectName={"Cinema Ticket"}
							  projectDetail={"Cinema Ticket is a full-stack web application using React and ASP.NET Core, enabling users to buy tickets and administrators to manage listings and sales."}
							  techName={['.NET Core', "React", 'Redux', 'MUI', 'SqlServer']}
							  github={"https://github.com/AliShahbazi81/Cinema-Ticket"}
						/>
				  </GlassCard>
			</div>
	  )
}