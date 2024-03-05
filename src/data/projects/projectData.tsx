import {ProjectData} from "@/types/projectTypes";

export const data: ProjectData[] = [
	{
		id: "car-auction",
		name: "projectTitleCarAuction",
		explanationKey: "car-auction",
		backend: ['DotNetCore'],
		frontend: ['NextJs', 'Tailwind', 'MobX', "TypeScript"],
		database: ['PostgresSql', 'MongoDb'],
		messageBus: ['RabbitMq'],
		container: ["Docker"],
		tools: ['SignalR', 'MediatR'],
		versionControl: ["Git"],
		sourceCode: "https://github.com/AliShahbazi81/Carsties_Auctions"
	},
	{
		id: "e-commerce",
		name: "projectECommerceTitle",
		explanationKey: 'e-commerce',
		backend: ['DotNetCore'],
		database: ['Redis', 'SqlServer'],
		tools: ['Stripe', 'Twilio'],
		versionControl: ["Git"],
		sourceCode: "https://github.com/AliShahbazi81/Auctria_Application"
	},
	{
		id: "ride-share",
		name: "projectTitleRideShare",
		explanationKey: 'ride-share',
		backend: ['DotNetCore', 'Python'],
		frontend: ['React', 'Redux', 'Tailwind', 'TypeScript', 'SCSS'],
		messageBus: ['RabbitMq'],
		container: ["Docker"],
		database: ['SqlServer', 'Redis', 'MongoDb'],
		tools: ['Stripe', 'Twilio', 'Telegram', 'MailKit'],
		versionControl: ["Git"]
	},
	{
		id: "e-learning",
		name: "projectTitleELearning",
		explanationKey:'e-learning',
		backend: ['Python', 'Django'],
		frontend: ['Html', 'Css', 'JavaScript'],
		database: ['MySql'],
		versionControl: ["Git"],
		sourceCode: "https://github.com/AliShahbazi81/WhiteboardApp"
	},
	{
		id: "user-activity",
		name: "projectTitleUserActivity",
		explanationKey: 'user-activity',
		backend: ['DotNetCore'],
		frontend: ['React', 'MobX', 'Semantic-UI', 'TypeScript'],
		database: ['SqLite'],
		tools: ['SignalR', 'Cloudinary'],
		versionControl: ["Git"],
		sourceCode: "https://github.com/AliShahbazi81/Activity_Application"
	},
	{
		id: "cinema-ticket",
		name: "projectTitleCinemaTicket",
		explanationKey: 'cinema-ticket',
		backend: ['DotNetCore'],
		frontend: ['React', 'Redux', 'MaterialUI', 'TypeScript'],
		container: ['Docker'],
		tools: ['Stripe'],
		database: ['SqlServer'],
		versionControl: ["Git"],
		sourceCode: "https://github.com/AliShahbazi81/Cinema-Ticket"
	}
]