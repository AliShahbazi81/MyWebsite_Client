import "./../../css/projectDetail.scss"

const data = [
	{
		id: "1",
		name: "Car Auction",
		explanation: "",
		backend: ['.Net'],
		frontend: ['NextJs', 'Tailwind', 'Zustand'],
		database: ['PostgreSql', 'MongoDb'],
		messageBus: ['RabbitMq'],
		container: "Docker",
		tools: [],
		versionControl: "Git"
	},
	{
		id: "e-commerce",
		explanation: "E-Commerce",
		backend: ['.Net'],
		frontend: [],
		database: ['Redis', 'SqlServer'],
		tools: ['Stripe', 'Twilio'],
		versionControl: "Git"

	},
	{
		id: "ride-share",
		explanation: "RideShare",
		backend: ['.Net', 'Python'],
		frontend: ['NextJs', 'Tailwind', 'TypeScript', 'SCSS'],
		messageBus: ['RabbitMq'],
		container: "Docker",
		database: ['SqlServer', 'Redis'],
		tools: ['Stripe', 'twilio', 'Telegram', 'MailKit'],
		versionControl: "Git"
	},
	{
		id: "e-learning",
		explanation: "E-Learning Website",
		backend: ['Python', 'Django'],
		frontend: ['Html', 'Css', 'JavaScript'],
		database: ['MySql'],
		versionControl: "Git"
	},
	{
		id: "user-activity",
		explanation: "User's Activity",
		backend: ['.Net'],
		frontend: ['React', 'MobX', 'Semantic-UI'],
		database: ['SqLite'],
		versionControl: "Git"
	},
	{
		id: "cinema-ticket",
		explanation: "Cinema Ticket",
		backend: ['.Net'],
		frontend: ['React', 'Redux', 'TypeScript', 'MaterialUI'],
		database: ['SqlServer'],
		versionControl: "Git"
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
								<h2 className={'projectTitle'}>

								</h2>
							</div>
							{/* Technologies */}
							<div className={'projectDetailTechnology'}>

							</div>
							projectId: {params.id}
							Hello There!
						</>
					) :
						<p>Project not found.</p>
				}
			</div>
		</div>
	)
}