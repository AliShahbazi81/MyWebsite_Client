import "./../../css/projectDetail.scss"
import "./../../css/project.scss"
import Image from "next/image";

const data = [
	{
		id: "car-auction",
		name: "Car Auction",
		explanation: "",
		backend: ['DotNetCore'],
		frontend: ['NextJs', 'Tailwind', 'Zustand'],
		database: ['PostgresSql', 'MongoDb'],
		messageBus: ['RabbitMq'],
		container: ["Docker"],
		tools: [],
		versionControl: ["Git"]
	},
	{
		id: "e-commerce",
		name: "E-Commerce",
		explanation: "E-Commerce",
		backend: ['DotNetCore'],
		frontend: [],
		database: ['Redis', 'SqlServer'],
		tools: ['Stripe', 'Twilio'],
		versionControl: ["Git"]

	},
	{
		id: "ride-share",
		name: "RideShare",
		explanation: "RideShare",
		backend: ['DotNetCore', 'Python'],
		frontend: ['NextJs', 'Tailwind', 'TypeScript', 'SCSS'],
		messageBus: ['RabbitMq'],
		container: ["Docker"],
		database: ['SqlServer', 'Redis'],
		tools: ['Stripe', 'twilio', 'Telegram', 'MailKit'],
		versionControl: ["Git"]
	},
	{
		id: "e-learning",
		name: "E-Learning Website",
		explanation: "E-Learning Website",
		backend: ['Python', 'Django'],
		frontend: ['Html', 'Css', 'JavaScript'],
		database: ['MySql'],
		versionControl: ["Git"]
	},
	{
		id: "user-activity",
		name: "User's Activity",
		explanation: "User's Activity",
		backend: ['DotNetCore'],
		frontend: ['React', 'MobX', 'Semantic-UI'],
		database: ['SqLite'],
		versionControl: ["Git"]
	},
	{
		id: "cinema-ticket",
		name: "Cinema Ticket",
		explanation: "Cinema Ticket",
		backend: ['DotNetCore'],
		frontend: ['React', 'Redux', 'TypeScript', 'MaterialUI'],
		database: ['SqlServer'],
		versionControl: ["Git"]
	}
]

export default async function ProjectPage({params}: { params: { id: string } }) {
	const project = data.find(project => project.id === params.id)

	return (
		<div className={'divBackground'}>
			<div className={'projectDetailEnv'}>
				{
					project ? (
							<>
								{/* Project description */}
								<div className={'projectDetail'}>
									<h2 className={'title'}>
										{project.name}
									</h2>
									<p>
										&Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam atque beatae
										deleniti deserunt dicta ducimus excepturi expedita facilis necessitatibus numquam
										officiis quas quis sequi soluta tenetur vero, voluptas voluptates!
									</p>
								</div>
								{/* Technologies */}
								<div className={'projectDetailTechnology'}>
									{
										project.backend ? (
											<div className={'technologyEnv'}>
												<h3 className={'projectTitle mb-3'}>
													Backend :
												</h3>
												{project.backend.map((item, index) => (
													<Image
														key={index}
														src={`/images/keywords/${item}.png`}
														alt={item}
														width={40}
														height={40}
													/>
												))}
											</div>
										) : null
									}
									{
										project.frontend ? (
											<div className={'technologyEnv'}>
												<h3 className={'projectTitle mb-3 mt-6'}>
													Frontend :
												</h3>
												<div className={'flex items-center justify-start flex-wrap'}>
													{project.frontend.map((item, index) => (
														<Image
															key={index}
															src={`/images/keywords/${item}.png`}
															alt={item}
															width={40}
															height={40}
														/>
													))}
												</div>
											</div>
										) : null
									}
									{
										project.database ? (
											<div className={'technologyEnv'}>
												<h3 className={'projectTitle mb-3 mt-6'}>
													Database :
												</h3>
												<div className={'flex items-center justify-start flex-wrap'}>
													{project.database.map((item, index) => (
														<Image
															key={index}
															src={`/images/keywords/${item}.png`}
															alt={item}
															width={40}
															height={40}
														/>
													))}
												</div>
											</div>
										) : null
									}
									{
										project.messageBus ? (
											<div className={'technologyEnv'}>
												<h3 className={'projectTitle mb-3 mt-6'}>
													Message Bus :
												</h3>
												<div className={'flex items-center justify-start flex-wrap'}>
													{project.messageBus.map((item, index) => (
														<Image
															key={index}
															src={`/images/keywords/${item}.png`}
															alt={item}
															width={40}
															height={40}
														/>
													))}
												</div>
											</div>
										) : null
									}
									{
										project.container ? (
											<div className={'technologyEnv'}>
												<h3 className={'projectTitle mb-3 mt-6'}>
													Container :
												</h3>
												<div className={'flex items-center justify-start flex-wrap'}>
													{project.container.map((item, index) => (
														<Image
															key={index}
															src={`/images/keywords/${item}.png`}
															alt={item}
															width={40}
															height={40}
														/>
													))}
												</div>
											</div>
										) : null
									}
									{
										project.versionControl ? (
											<div className={'technologyEnv'}>
												<h3 className={'projectTitle mb-3 mt-6'}>
													Container :
												</h3>
												<div className={'flex items-center justify-start flex-wrap'}>
													{project.versionControl.map((item, index) => (
														<Image
															key={index}
															className={''}
															src={`/images/keywords/${item}.png`}
															alt={item}
															width={40}
															height={40}
														/>
													))}
												</div>
											</div>
										) : null
									}
								</div>
							</>
						) :
						<p>projectId: {params.id}</p>
				}
			</div>
		</div>
	)
}