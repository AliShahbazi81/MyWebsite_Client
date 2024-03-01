import Image from "next/image";
import React from "react";

export default function CarAuction() {
	return (
		<>
			<h2 className={'projectDetailHeading'}>Introduction to Carsties Auctions</h2>
			<p className={'projectDetailDescription'}>
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				The <span className='text-primary font-normal'>Carsties Auctions</span> platform is an innovative
				online car auction system that transforms the dynamics of vehicle trading. With a focus on creating
				a seamless, efficient, and transparent buying and selling experience, the project is rooted in
				a <span className='text-primary font-normal'>microservices architecture</span>. This approach
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				harnesses a variety of advanced technologies and methodologies to ensure the platform's scalability,
				performance, and user satisfaction.
			</p>

			<h2 className={'projectDetailHeading'}>Core Features and User Experience</h2>
			<p className={'projectDetailDescription'}>
				Designed from the ground up, Carsties Auctions aims to streamline the car auction process. Users
				have the capability to list vehicles, engage in real-time bidding, and effortlessly manage their
				auctions. Essential features include <span className='text-primary font-normal'>secure user authentication</span> and
				authorization, <span
				className='text-primary font-normal'>comprehensive auction management</span>, <span
				className='text-primary font-normal'>real-time bidding</span> mechanics, and <span
				className='text-primary font-normal'>advanced auction listings and filters</span>. The platform also
				emphasizes keeping users informed with <span className='text-primary font-normal'>instant notifications</span> on
				auction updates, fostering an engaged and informed community.
			</p>

			<h2 className={'projectDetailHeading'}>Architectural Overview</h2>
			<p className={'projectDetailDescription'}>
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				The <span className='text-primary font-normal'>architecture</span> of Carsties Auctions is a
				testament to modern <span className='text-primary font-normal'>software engineering</span>,
				comprising multiple <span className='text-primary font-normal'>microservices</span> each dedicated
				to a specific function - <span className='text-primary font-normal'>Auction Service</span>, <span
				className='text-primary font-normal'>Bidding Service</span>, <span
				className='text-primary font-normal'>Identity Service</span>, <span
				className='text-primary font-normal'>Notification Service</span>, <span
				className='text-primary font-normal'>Search Service</span>, and <span
				className='text-primary font-normal'>Gateway Service</span>. This modular design significantly
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				enhances the application's <span className='text-primary font-normal'>maintainability</span>, <span
				className='text-primary font-normal'>scalability</span>, and facilitates <span
				className='text-primary font-normal'>agile development</span> and <span
				className='text-primary font-normal'>deployment</span> processes.
			</p>
			<Image
				className={'projectDetailDiagram'}
				src={`/images/diagrams/car-auction-diagram.svg`}
				alt={"car-auction-diagram"}
				width={1300}
				height={1200}
				title={"Car Auction Diagram"}
			/>

			<h2 className={'projectDetailHeading'}>Technological Stack</h2>
			<p className={'projectDetailDescription'}>
				On the technological front, the project leverages <span
				className='text-primary font-normal'>React</span> and <span
				className='text-primary font-normal'>Next.js</span> to craft a dynamic and responsive frontend
				experience. The backend architecture is powered by <span
				className='text-primary font-normal'>.NET 7</span>, with <span className='text-primary font-normal'>Entity Framework Core</span> for
				ORM, <span className='text-primary font-normal'>MassTransit</span> coupled with <span
				className='text-primary font-normal'>RabbitMQ</span> for efficient messaging, and <span
				className='text-primary font-normal'>gRPC</span> for seamless inter-service communication. Data
				storage solutions include <span className='text-primary font-normal'>PostgreSQL</span> and <span
				className='text-primary font-normal'>MongoDB</span>, addressing both structured and bid management
				data needs. The entire infrastructure is containerized using <span
				className='text-primary font-normal'>Docker</span>, with <span className='text-primary font-normal'>Docker Compose</span> handling
				orchestration to simplify deployment and scaling operations.
			</p>

			<h2 className={'projectDetailHeading'}>Project Impact and Personal Contributions</h2>
			<p className={'projectDetailDescription'}>
				This project not only showcases the application of cutting-edge technologies in real-world scenarios
				but also highlights my comprehensive skill set in <span
				className='text-primary font-normal'>architecting</span>, <span
				className='text-primary font-normal'>developing</span>, and <span
				className='text-primary font-normal'>deploying</span> complex web applications. My contributions
				spanned across all phases of the project - from initial design and <span
				className='text-primary font-normal'>architecture</span> to <span
				className='text-primary font-normal'>development</span>, and <span
				className='text-primary font-normal'>deployment</span>, ensuring a robust, scalable, and
				user-centric platform. Through Carsties Auctions, I have demonstrated an adeptness in navigating the
				complexities of <span className='text-primary font-normal'>software engineering</span>, pushing the
				boundaries of traditional web applications, and delivering a product that stands as a benchmark for
				quality and innovation in the online car auction space.
			</p>
		</>
	)
}