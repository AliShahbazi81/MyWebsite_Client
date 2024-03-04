import GlassCard from "@/components/GlassCard";
import "../../app/css/project.scss"
import ProjectCard from "@/components/projects/ProjectCard";
import {useTranslation} from "next-i18next";


export default function MyProjects() {
	const {t} = useTranslation('common');
	return (
		<div className="projectEnv">
			<GlassCard>
				<ProjectCard
					imageName={"CarAuction"}
					projectName={t('projectTitleCarAuction')}
					projectDetail={t('projectDescriptionCarAuction')}
					techName={['.NET', 'NextJS', 'Tailwind', 'Zustand']}
					github={"https://github.com/AliShahbazi81/Carsties_Auctions"}
					projectDetailUrl={"car-auction"}
				/>
			</GlassCard>
			<GlassCard>
				<ProjectCard
					imageName={"Auctria"}
					projectName={t('projectTitleECommerce')}
					projectDetail={t('projectDescriptionECommerce')}
					techName={['.NET', 'Sqlite', 'Redis']}
					github={"https://github.com/AliShahbazi81/Auctria_Application"}
					projectDetailUrl={"e-commerce"}/>
			</GlassCard>
			<GlassCard>
				<ProjectCard
					imageName={"RideShare"}
					projectName={t('projectTitleRideShare')}
					projectDetail={t('projectDescriptionRideShare')}
					techName={['.NET', 'SqlServer', 'Redis']}
					projectDetailUrl={"ride-share"}/>
			</GlassCard>
			<GlassCard>
				<ProjectCard
					imageName={"OnlineLearning"}
					projectName={t('projectTitleELearning')}
					projectDetail={t('projectDescriptionELearning')}
					techName={['Django', "HTML", 'CSS', 'JS', 'SqlServer']}
					github={"https://github.com/AliShahbazi81/WhiteboardApp"}
					projectDetailUrl={"e-learning"}/>
			</GlassCard>
			<GlassCard>
				<ProjectCard
					imageName={"ActivityApplication"}
					projectName={t('projectTitleUserActivity')}
					projectDetail={t('projectDescriptionUserActivity')}
					techName={['.NET', "React", 'MobX', 'PostgresSQL']}
					github={"https://github.com/AliShahbazi81/Activity_Application"}
					projectDetailUrl={"user-activity"}/>
			</GlassCard>
			<GlassCard>
				<ProjectCard
					imageName={"CinemaTicket"}
					projectName={t('projectTitleCinemaTicket')}
					projectDetail={t('projectDescriptionCinemaTicket')}
					techName={['.NET', "React", 'Redux', 'MUI', 'SqlServer']}
					github={"https://github.com/AliShahbazi81/Cinema-Ticket"}
					projectDetailUrl={"cinema-ticket"}/>
			</GlassCard>
		</div>
	)
}