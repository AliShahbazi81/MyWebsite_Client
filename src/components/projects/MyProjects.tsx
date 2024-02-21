import GlassCard from "@/components/GlassCard";
import "./../../app/css/project.scss"
import ProjectCard from "@/components/projects/ProjectCard";

export default function MyProjects()
{
	  return(
			<div className="projectEnv">
				  <GlassCard>
						<ProjectCard imageName={"Auctria"}/>
				  </GlassCard>
				  <GlassCard>
						<ProjectCard imageName={"CarAuction"}/>
				  </GlassCard>
				  <GlassCard>
						<ProjectCard imageName={"RideShare"}/>
				  </GlassCard>
				  <GlassCard>
						<ProjectCard imageName={"OnlineLearning"}/>
				  </GlassCard>
			</div>
	  )
}