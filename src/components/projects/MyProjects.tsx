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
							  projectDetail={"Carsties Auctions is an online car auction platform with microservices architecture, offering listing, bidding, and auction management features."}
						/>
				  </GlassCard>
				  <GlassCard>
						<ProjectCard
							  imageName={"Auctria"}
							  projectName={"E-Commerce"}
							  projectDetail={"The e-commerce application is a scalable, backend-focused online shopping platform for product auctioning, featuring clean architecture for efficient maintenance."}
						/>
				  </GlassCard>
				  <GlassCard>
						<ProjectCard
							  imageName={"RideShare"}
							  projectName={"RideShare"}
							  projectDetail={"The RideShare app is a backend-driven platform, utilizing SOLID principles and n-tier architecture, to automatically connect applicants with drivers, including payment functionality."}
						/>
				  </GlassCard>
				  <GlassCard>
						<ProjectCard
							  imageName={"OnlineLearning"}
							  projectName={"E-Learning"}
							  projectDetail={"The Online Learning app offers a platform where users can purchase packages to access and complete online tutorials and courses, earning certifications upon completion."}
						/>
				  </GlassCard>
			</div>
	  )
}