'use client'
import "./../../css/projectDetail.scss"
import "./../../css/project.scss"
import Image from "next/image";

const data = [
	{
		id: "car-auction",
		name: "Car Auction",
		explanation: (
			<>
				<h2 className={'projectDetailHeading'}>Introduction to Carsties Auctions</h2>
				<p className={'projectDetailDescription'}>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					The <span className='text-primary'>Carsties Auctions</span> platform is an innovative online car auction system that transforms the dynamics of vehicle trading. With a focus on creating a seamless, efficient, and transparent buying and selling experience, the project is rooted in a <span className='text-primary'>microservices architecture</span>. This approach harnesses a variety of advanced technologies and methodologies to ensure the platform's scalability, performance, and user satisfaction.
				</p>

				<h2 className={'projectDetailHeading'}>Core Features and User Experience</h2>
				<p className={'projectDetailDescription'}>
					Designed from the ground up, Carsties Auctions aims to streamline the car auction process. Users have the capability to list vehicles, engage in real-time bidding, and effortlessly manage their auctions. Essential features include <span className='text-primary'>secure user authentication</span> and authorization, <span className='text-primary'>comprehensive auction management</span>, <span className='text-primary'>real-time bidding</span> mechanics, and <span className='text-primary'>advanced auction listings and filters</span>. The platform also emphasizes keeping users informed with <span className='text-primary'>instant notifications</span> on auction updates, fostering an engaged and informed community.
				</p>

				<h2 className={'projectDetailHeading'}>Architectural Overview</h2>
				<p className={'projectDetailDescription'}>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					The <span className='text-primary'>architecture</span> of Carsties Auctions is a testament to modern <span className='text-primary'>software engineering</span>, comprising multiple <span className='text-primary'>microservices</span> each dedicated to a specific function - <span className='text-primary'>Auction Service</span>, <span className='text-primary'>Bidding Service</span>, <span className='text-primary'>Identity Service</span>, <span className='text-primary'>Notification Service</span>, <span className='text-primary'>Search Service</span>, and <span className='text-primary'>Gateway Service</span>. This modular design significantly enhances the application's <span className='text-primary'>maintainability</span>, <span className='text-primary'>scalability</span>, and facilitates <span className='text-primary'>agile development</span> and <span className='text-primary'>deployment</span> processes.
				</p>
				<Image 
					className={'projectDetailDiagram'}
					src={`/images/diagrams/car-auction-diagram.svg`} 
					alt={"car-auction-diagram"} 
					width={1300} 
					height={1200}
				/>

				<h2 className={'projectDetailHeading'}>Technological Stack</h2>
				<p className={'projectDetailDescription'}>
					On the technological front, the project leverages <span className='text-primary'>React</span> and <span className='text-primary'>Next.js</span> to craft a dynamic and responsive frontend experience. The backend architecture is powered by <span className='text-primary'>.NET 7</span>, with <span className='text-primary'>Entity Framework Core</span> for ORM, <span className='text-primary'>MassTransit</span> coupled with <span className='text-primary'>RabbitMQ</span> for efficient messaging, and <span className='text-primary'>gRPC</span> for seamless inter-service communication. Data storage solutions include <span className='text-primary'>PostgreSQL</span> and <span className='text-primary'>MongoDB</span>, addressing both structured and bid management data needs. The entire infrastructure is containerized using <span className='text-primary'>Docker</span>, with <span className='text-primary'>Docker Compose</span> handling orchestration to simplify deployment and scaling operations.
				</p>

				<h2 className={'projectDetailHeading'}>Project Impact and Personal Contributions</h2>
				<p className={'projectDetailDescription'}>
					This project not only showcases the application of cutting-edge technologies in real-world scenarios but also highlights my comprehensive skill set in <span className='text-primary'>architecting</span>, <span className='text-primary'>developing</span>, and <span className='text-primary'>deploying</span> complex web applications. My contributions spanned across all phases of the project - from initial design and <span className='text-primary'>architecture</span> to <span className='text-primary'>development</span>, and <span className='text-primary'>deployment</span>, ensuring a robust, scalable, and user-centric platform. Through Carsties Auctions, I have demonstrated an adeptness in navigating the complexities of <span className='text-primary'>software engineering</span>, pushing the boundaries of traditional web applications, and delivering a product that stands as a benchmark for quality and innovation in the online car auction space.
				</p>
			</>
		),
		backend: ['DotNetCore'],
		frontend: ['NextJs', 'Tailwind', 'MobX', "TypeScript"],
		database: ['PostgresSql', 'MongoDb'],
		messageBus: ['RabbitMq'],
		container: ["Docker"],
		tools: ['SignalR', 'MediatR'],
		versionControl: ["Git"]
	},
	{
		id: "e-commerce",
		name: "E-Commerce",
		explanation: "E-Commerce",
		backend: ['DotNetCore'],
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

export default function ProjectPage({params}: { params: { id: string } }) {
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
									{project.explanation}
								</div>
								{/* Technologies */}
								<div className={'projectDetailTechnology'}>
									{
										project.backend ? (
											<div className={'technologyEnv'}>
												<h3 className={'projectTitle mb-3'}>
													Backend :
												</h3>
												<div className={'flex items-center justify-start flex-wrap'}>
													{project.backend.map((item, index) => (
														<Image
															key={index}
															className={'technologyIcon'}
															src={`/images/keywords/${item}.png`}
															alt={item}
															width={40}
															height={40}
															quality={100}
														/>
													))}
												</div>
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
															className={'technologyIcon'}
															src={`/images/keywords/${item}.png`}
															alt={item}
															width={40}
															height={40}
															quality={100}
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
															className={'technologyIcon'}
															src={`/images/keywords/${item}.png`}
															alt={item}
															width={40}
															height={40}
															quality={100}
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
															className={'technologyIcon'}
															src={`/images/keywords/${item}.png`}
															alt={item}
															width={40}
															height={40}
															quality={100}
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
															className={'technologyIcon'}
															src={`/images/keywords/${item}.png`}
															alt={item}
															width={40}
															height={40}
															quality={100}
														/>
													))}
												</div>
											</div>
										) : null
									}
									{
										project.tools ? (
											<div className={'technologyEnv'}>
												<h3 className={'projectTitle mb-3 mt-6'}>
													Tools :
												</h3>
												<div className={'flex items-center justify-start flex-wrap'}>
													{project.tools.map((item, index) => (
														<Image
															key={index}
															className={'technologyIcon'}
															src={`/images/keywords/${item}.png`}
															alt={item}
															width={40}
															height={40}
															quality={100}
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
													Version Control :
												</h3>
												<div className={'flex items-center justify-start flex-wrap'}>
													{project.versionControl.map((item, index) => (
														<Image
															key={index}
															className={'technologyIcon'}
															src={`/images/keywords/${item}.png`}
															alt={item}
															width={40}
															height={40}
															quality={100}
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