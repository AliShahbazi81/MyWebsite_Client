import Image from "next/image";
import React from "react";

export default function ECommerce() {
	return(
		<>
			<h2 className={'projectDetailHeading'}>Introduction to E-Commerce Application</h2>
			<p className={'projectDetailDescription'}>
				The <span className='text-primary font-normal'>E-Commerce Application</span> is a groundbreaking
				e-commerce platform specialized in auctioning products, designed with a focus on efficiency,
				scalability, and providing an engaging user experience. This backend-centric application serves as a
				testament to the effective use of modern <span className='text-primary font-normal'>software engineering</span> principles,
				offering both administrators and users a comprehensive suite of features to facilitate the auction
				process.
			</p>

			<h2 className={'projectDetailHeading'}>Key Features and User Experience</h2>
			<p className={'projectDetailDescription'}>
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				Central to the platform's offering are its <span className='text-primary font-normal'>product and category management</span> features,
				enabling administrators to maintain an up-to-date inventory. Users benefit from a
				sophisticated <span className='text-primary font-normal'>shopping cart</span> system and <span
				className='text-primary font-normal'>secure payment processing</span>, integrated with leading
				services like Stripe. The application enhances engagement through <span
				className='text-primary font-normal'>real-time notifications</span>, utilizing Twilio for email and
				SMS communication, keeping users informed about auction updates and outcomes.
			</p>

			<h2 className={'projectDetailHeading'}>Architectural Overview</h2>
			<p className={'projectDetailDescription'}>
				At its core, the E-Commerce Application adopts a <span className='text-primary font-normal'>clean architecture</span>,
				segregating the system into distinct layers that ensure separation of concerns and facilitate
				scalability. This backend architecture is meticulously crafted using <span
				className='text-primary font-normal'>.NET Core</span>, providing a robust foundation for building
				RESTful APIs that serve as the backbone of the application.
			</p>
			<Image
				className={'projectDetailDiagram'}
				src={`/images/diagrams/e-commerce-diagram.svg`}
				alt={"e-commerce-diagram"}
				width={1300}
				height={1200}
				title={"E-Commerce Diagram"}
			/>

			<h2 className={'projectDetailHeading'}>Technological Stack</h2>
			<p className={'projectDetailDescription'}>
				The technological prowess of the E-Commerce Application is evident in its use of <span
				className='text-primary font-normal'>SQL Server</span> and <span
				className='text-primary font-normal'>Redis</span> for data storage and caching, respectively. This
				choice ensures high performance and reliability. Security and user management are adeptly handled
				through <span className='text-primary font-normal'>ASP.NET Identity</span>, while payment
				transactions are securely processed with the <span
				className='text-primary font-normal'>Stripe API</span>. Furthermore, the application leverages <span
				className='text-primary font-normal'>Twilio</span> for comprehensive notification services, ensuring
				a seamless and interactive user experience.
			</p>

			<h2 className={'projectDetailHeading'}>Project Impact and Personal Contributions</h2>
			<p className={'projectDetailDescription'}>
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				My involvement in the E-Commerce Application spanned across all developmental stages, from
				conceptualization and design to implementation and deployment. My efforts were instrumental in
				architecting the backend infrastructure, integrating payment and notification services, and ensuring
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				the application's scalability and security. This project stands as a showcase of my ability to
				leverage <span className='text-primary font-normal'>modern development practices</span> and <span
				className='text-primary font-normal'>technology stacks</span> to deliver a comprehensive and robust
				e-commerce solution.
			</p>
		</>
	)
}