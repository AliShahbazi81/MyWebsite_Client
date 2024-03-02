import Image from "next/image";
import React from "react";
import {ProjectData} from "@/types/projectTypes";

export const data: ProjectData[] = [
	{
		id: "car-auction",
		name: "Car Auction",
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
		name: "E-Commerce",
		explanationKey: 'e-commerce',
		backend: ['DotNetCore'],
		database: ['Redis', 'SqlServer'],
		tools: ['Stripe', 'Twilio'],
		versionControl: ["Git"],
		sourceCode: "https://github.com/AliShahbazi81/Auctria_Application"
	},
	{
		id: "ride-share",
		name: "RideShare - (Startup)",
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
		name: "E-Learning Website",
		explanationKey:'e-learning',
		backend: ['Python', 'Django'],
		frontend: ['Html', 'Css', 'JavaScript'],
		database: ['MySql'],
		versionControl: ["Git"],
		sourceCode: "https://github.com/AliShahbazi81/WhiteboardApp"
	},
	{
		id: "user-activity",
		name: "User's Activity",
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
		name: "Cinema Ticket",
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