import "./../../app/css/projectDetail.scss"
import Image from "next/image";
import Link from "next/link";
import {data} from "@/data/projects/projectData";
import Layout from "@/components/Layout";
import {ProjectData} from "@/types/projectTypes";
import {GetStaticPaths, GetStaticProps} from "next";
import React from "react";
import CarAuction from "@/components/projects/explanations/CarAuction";
import ECommerce from "@/components/projects/explanations/ECommerce";
import ELearning from "@/components/projects/explanations/ELearning";
import RideShare from "@/components/projects/explanations/RideShare";
import UserActivity from "@/components/projects/explanations/UserActivity";
import CinemaTicket from "@/components/projects/explanations/CinemaTicket";
import NotFound from "@/app/not-found";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

interface ProjectPageProps {
	project: Omit<ProjectData, 'explanation'>;
	explanationKey: string;
}

type ExplanationComponentsMap = {
	[key: string]: React.FC | undefined;
};


// Define the actual mapping
const ExplanationComponents: ExplanationComponentsMap = {
	"car-auction": CarAuction,
	"e-commerce": ECommerce,
	"e-learning": ELearning,
	"ride-share": RideShare,
	"user-activity": UserActivity,
	"cinema-ticket": CinemaTicket,
};

export const getStaticPaths: GetStaticPaths = async (context) => {
	const locales = context.locales || ['en'];

	const paths = locales.flatMap((locale) =>
		data.map((project) => ({
			params: { id: project.id.toString() },
			locale,
		}))
	);

	return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id;
	const project = data.find((p) => p.id === id);
	const locale = context.locale || 'en';

	if (!project) {
		return {
			notFound: true,
		};
	}

	const translationProps = await serverSideTranslations(locale, ['common']);

	return {
		props: {
			...translationProps,
			project,
		},
	};
};
const ProjectPage: React.FC<ProjectPageProps> = ({project}: { project: ProjectData }) => {
	const ExplanationComponent = ExplanationComponents[project.explanationKey];

	return (
		<Layout title={project?.name} description={"Project Detail"}>
			<div className={'divBackground'}>
				<div className={'projectDetailEnv'}>
					{
						project ? (
								<>
									{/* Project description */}
									<div className={'projectDetail'}>
										<Link href={"/"} title={"Back to homepage"}>
											<p className={'back-button'}>{"<"}</p>
										</Link>
										<h2 className={'title self-center'}>
											{project.name}
										</h2>
										{ExplanationComponent ? <ExplanationComponent/> : null}
									</div>
									{/* Technologies */}
									<div className={'projectDetailTechnology'}>
										{
											project.backend ? (
												<div className={'technologyEnv'}>
													<h3 className={'projectTitle'}>
														Backend :
													</h3>
													<div className={'technologyIconEnv'}>
														{project.backend.map((item, index) => (
															<Image
																key={index}
																className={'technologyIcon'}
																src={`/images/keywords/${item}.png`}
																alt={item}
																width={40}
																height={40}
																quality={100}
																title={`${item}`}
															/>
														))}
													</div>
												</div>
											) : null
										}
										{
											project.frontend ? (
												<div className={'technologyEnv'}>
													<h3 className={'projectTitle'}>
														Frontend :
													</h3>
													<div className={'technologyIconEnv'}>
														{project.frontend.map((item, index) => (
															<Image
																key={index}
																className={'technologyIcon'}
																src={`/images/keywords/${item}.png`}
																alt={item}
																width={40}
																height={40}
																quality={100}
																title={`${item}`}
															/>
														))}
													</div>
												</div>
											) : null
										}
										{
											project.database ? (
												<div className={'technologyEnv'}>
													<h3 className={'projectTitle'}>
														Database :
													</h3>
													<div className={'technologyIconEnv'}>
														{project.database.map((item, index) => (
															<Image
																key={index}
																className={'technologyIcon'}
																src={`/images/keywords/${item}.png`}
																alt={item}
																width={40}
																height={40}
																quality={100}
																title={`${item}`}
															/>
														))}
													</div>
												</div>
											) : null
										}
										{
											project.messageBus ? (
												<div className={'technologyEnv'}>
													<h3 className={'projectTitle'}>
														Message Bus :
													</h3>
													<div className={'technologyIconEnv'}>
														{project.messageBus.map((item, index) => (
															<Image
																key={index}
																className={'technologyIcon'}
																src={`/images/keywords/${item}.png`}
																alt={item}
																width={40}
																height={40}
																quality={100}
																title={`${item}`}
															/>
														))}
													</div>
												</div>
											) : null
										}
										{
											project.container ? (
												<div className={'technologyEnv'}>
													<h3 className={'projectTitle'}>
														Container :
													</h3>
													<div className={'technologyIconEnv'}>
														{project.container.map((item, index) => (
															<Image
																key={index}
																className={'technologyIcon'}
																src={`/images/keywords/${item}.png`}
																alt={item}
																width={40}
																height={40}
																quality={100}
																title={`${item}`}
															/>
														))}
													</div>
												</div>
											) : null
										}
										{
											project.tools ? (
												<div className={'technologyEnv'}>
													<h3 className={'projectTitle'}>
														Tools :
													</h3>
													<div className={'technologyIconEnv'}>
														{project.tools.map((item, index) => (
															<Image
																key={index}
																className={'technologyIcon'}
																src={`/images/keywords/${item}.png`}
																alt={item}
																width={40}
																height={40}
																quality={100}
																title={`${item}`}
															/>
														))}
													</div>
												</div>
											) : null
										}
										{
											project.versionControl ? (
												<div className={'technologyEnv'}>
													<h3 className={'projectTitle'}>
														Version Control :
													</h3>
													<div className={'technologyIconEnv'}>
														{project.versionControl.map((item, index) => (
															<Image
																key={index}
																className={'technologyIcon'}
																src={`/images/keywords/${item}.png`}
																alt={item}
																width={40}
																height={40}
																quality={100}
																title={`${item}`}
															/>
														))}
													</div>
												</div>
											) : null
										}
										{
											project.sourceCode ? (
												<div className={'technologyEnv'}>
													<h3 className={'projectTitle'}>
														Source Code :
													</h3>
													<div className={'technologyIconEnv'}>
														<Link href={project.sourceCode}>
															<Image
																className={'technologyIcon'}
																src={`/images/social/GitHubLogo.png`}
																alt={"GitHubLink"}
																width={40}
																height={40}
																quality={100}
																title={`Source Code for ${project.name}`}
															/>
														</Link>
													</div>
												</div>
											) : null
										}
									</div>
								</>
							) :
							<NotFound />
					}
				</div>
			</div>
		</Layout>
	)
}


export default ProjectPage;