'use client'
import "./../../css/projectDetail.scss"
import "./../../css/project.scss"
import Image from "next/image";
import Link from "next/link";

const data = [
	{
		id: "car-auction",
		name: "Car Auction",
		explanation: (
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
		),
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
		explanation: (
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
		),
		backend: ['DotNetCore'],
		database: ['Redis', 'SqlServer'],
		tools: ['Stripe', 'Twilio'],
		versionControl: ["Git"],
		sourceCode: "https://github.com/AliShahbazi81/Auctria_Application"
	},
	{
		id: "ride-share",
		name: "RideShare - (Startup)",
		explanation: (
			<>
				<h2 className={'projectDetailHeading'}>Comprehensive Overview of Revaal</h2>
				<p className={'projectDetailDescription'}>
					The inception of <span className='text-primary font-normal'>Revaal</span> was driven by the ambition
					to redefine the conventional rideshare landscape. This project was meticulously crafted using <span
					className='text-primary font-normal'>.NET Core</span> for the backend and <span
					className='text-primary font-normal'>React</span> for the frontend, embodying the pinnacle of modern
					web application development. It was conceived to address the gaping need for a reliable, efficient,
					and user-centric platform that simplifies the process of sharing rides, with an emphasis on
					security, scalability, and a seamless user experience.
				</p>
				<Image
					className={'projectDetailDiagram'}
					src={`/images/diagrams/ride-share-diagram.svg`}
					alt={"ride-share-diagram"}
					width={2000}
					height={2000}
					objectFit={"cover"}
					title={"Ride Share Diagram"}
					quality={100}
				/>

				<h2 className={'projectDetailHeading'}>Innovative Feature Set</h2>
				<p className={'projectDetailDescription'}>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					At the heart of Revaal lies its innovative feature set, designed from the ground up to cater to both
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					drivers and passengers. The system's <span className='text-primary font-normal'>dynamic ride matching algorithm</span> not
					only prioritizes geographical proximity but also factors in user preferences and ratings, ensuring a
					match that is both convenient and safe. The <span className='text-primary font-normal'>real-time ride tracking</span> feature
					empowers users with information at their fingertips, enhancing trust and reliability. Meanwhile,
					the <span className='text-primary font-normal'>integrated payment system</span>, bolstered by
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					Stripe's robust infrastructure, offers a wide array of payment options, ensuring transactions are
					smooth and secure.
				</p>

				<h2 className={'projectDetailHeading'}>Deep Dive into Technology</h2>
				<p className={'projectDetailDescription'}>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					The architectural backbone of Revaal is its <span className='text-primary font-normal'>microservices architecture</span>,
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					enabling modular development, ease of maintenance, and scalability. The backend's reliance on <span
					className='text-primary font-normal'>ASP.NET Core</span> is a testament to our commitment to
					performance and security, while the frontend use of <span className='text-primary font-normal'>React and TypeScript</span> ensures
					a dynamic and responsive user experience. Our database choice, <span
					className='text-primary font-normal'>SQL Server</span>, alongside <span
					className='text-primary font-normal'>MongoDB</span> for document-oriented needs, reflects our
					dedication to robust data management and flexibility.
				</p>

				<h2 className={'projectDetailHeading'}>Addressing Security and Privacy</h2>
				<p className={'projectDetailDescription'}>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					Security and privacy stand as the pillars of the Revaal platform. Implementing <span
					className='text-primary font-normal'>JWT</span> for authentication and adhering to <span
					className='text-primary font-normal'>OAuth 2.0</span> standards for third-party integrations, we've
					established a secure environment that users can trust. Our comprehensive security measures ensure
					that every transaction and user interaction is conducted with the highest regard for privacy and
					data protection.
				</p>

				<h2 className={'projectDetailHeading'}>Overcoming Development Hurdles</h2>
				<p className={'projectDetailDescription'}>
					The journey of developing Revaal was marked by numerous technical and design challenges. Achieving
					seamless communication across microservices required a sophisticated <span
					className='text-primary font-normal'>API gateway</span> solution, while ensuring data consistency
					across distributed services necessitated innovative approaches like <span
					className='text-primary font-normal'>event sourcing</span> and <span
					className='text-primary font-normal'>CQRS patterns</span>. Tackling the dynamic nature of the
					frontend presented its own set of challenges, met through advanced state management techniques and a
					component-driven architecture.
				</p>

				<h2 className={'projectDetailHeading'}>Reflections on Personal Contributions</h2>
				<p className={'projectDetailDescription'}>
					My involvement in Revaal spanned the entirety of its lifecycle, from conceptual design to
					deployment. Leading the architectural design, I navigated the complexities of integrating multiple
					services into a cohesive system. My work on the frontend introduced innovative features that
					enhanced user interactions, while backend development focused on creating scalable, secure services.
					This project was a profound learning journey, deepening my expertise in full-stack development and
					reinforcing the importance of user-centric design in creating impactful digital solutions.
				</p>
			</>
		),
		backend: ['DotNetCore', 'Python'],
		frontend: ['React', 'Redux', 'Tailwind', 'TypeScript', 'SCSS'],
		messageBus: ['RabbitMq'],
		container: ["Docker"],
		database: ['SqlServer', 'Redis', 'MongoDb'],
		tools: ['Stripe', 'twilio', 'Telegram', 'MailKit'],
		versionControl: ["Git"]
	},
	{
		id: "e-learning",
		name: "E-Learning Website",
		explanation: (
			<>
				<h2 className={'projectDetailHeading'}>Introduction to E-Learning</h2>
				<p className={'projectDetailDescription'}>
					The <span className='text-primary font-normal'>E-Learning</span> is an innovative online education
					platform, developed using the <span className='text-primary font-normal'>Django framework</span>. It
					serves as a virtual classroom where instructors can create and manage courses, upload educational
					content, and interact with students. Simultaneously, students can enroll in courses, access learning
					materials, and track their progress, making it a comprehensive solution for remote education.
				</p>

				<h2 className={'projectDetailHeading'}>Key Features and Functionalities</h2>
				<p className={'projectDetailDescription'}>
					At the heart of the E-Learning are its core features, designed to enhance the online learning
					experience. These include <span className='text-primary font-normal'>dynamic course creation and management</span> by
					instructors, <span className='text-primary font-normal'>student enrollment</span> in courses, <span
					className='text-primary font-normal'>integrated payment processing</span> for course fees, and
					a <span className='text-primary font-normal'>content delivery system</span> that supports various
					file types. Additionally, the application facilitates <span className='text-primary font-normal'>interactive student assessments</span> and
					progress tracking, thereby fostering a productive learning environment.
				</p>

				<h2 className={'projectDetailHeading'}>Technological Stack</h2>
				<p className={'projectDetailDescription'}>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					The application's backend is developed with <span className='text-primary font-normal'>Django</span>,
					leveraging its powerful ORM for database interactions and its secure authentication mechanisms for
					user management. The frontend integrates seamlessly with Django templates, enhanced with <span
					className='text-primary font-normal'>Bootstrap</span> for responsive design. For data storage, the
					app uses <span className='text-primary font-normal'>SQLite</span> for development and supports <span
					className='text-primary font-normal'>Djongo</span> for MongoDB integration, offering flexibility in
					handling structured and unstructured data. Payment processing is implemented via <span
					className='text-primary font-normal'>Stripe</span>, ensuring secure transactions within the
					platform.
				</p>

				<h2 className={'projectDetailHeading'}>Development and Deployment</h2>
				<p className={'projectDetailDescription'}>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					Development practices for E-Learning emphasized modularity, security, and scalability. Django's
					built-in security features were rigorously applied to safeguard user data and interactions. The
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					application's design facilitates easy deployment and scaling, catering to a growing user base.
					Testing was conducted extensively to ensure reliability and performance under various scenarios.
				</p>
				<Image
					className={'projectDetailDiagram'}
					src={`/images/diagrams/e-learning-diagram.svg`}
					alt={"e-learning-diagram"}
					width={2000}
					height={2000}
					objectFit={"cover"}
					title={"E-Learning Diagram"}
					quality={100}
				/>

				<h2 className={'projectDetailHeading'}>Personal Contributions and Learning Outcomes</h2>
				<p className={'projectDetailDescription'}>
					My role in developing E-Learning spanned from conceptualization to deployment, including designing
					the database schema, implementing backend logic, and crafting the user interface. This project honed
					my skills in full-stack development, particularly in <span
					className='text-primary font-normal'>Django</span> and web application security. It underscored the
					importance of thoughtful design and testing in creating effective educational tools.
				</p>
			</>
		),
		backend: ['Python', 'Django'],
		frontend: ['Html', 'Css', 'JavaScript'],
		database: ['MySql'],
		versionControl: ["Git"],
		sourceCode: "https://github.com/AliShahbazi81/WhiteboardApp"
	},
	{
		id: "user-activity",
		name: "User's Activity",
		explanation: (
			<>
				<h2 className={'projectDetailHeading'}>Introduction to Activity Application</h2>
				<p className={'projectDetailDescription'}>
					The <span className='text-primary font-normal'>Activity Application</span> emerges as a vibrant
					community platform, enabling users to create, share, and join a wide array of activities. Built upon
					the robust foundations of <span className='text-primary font-normal'>.NET Core</span> and <span
					className='text-primary font-normal'>React</span>, this application stands as a testament to modern
					web development practices, offering an engaging and interactive user experience.
				</p>
				<Image
					className={'projectDetailDiagram'}
					src={`/images/diagrams/user-activity-diagram.svg`}
					alt={"user-activity-diagram"}
					width={1300}
					height={1200}
					title={"User Activity Diagram"}
				/>

				<h2 className={'projectDetailHeading'}>Core Features</h2>
				<p className={'projectDetailDescription'}>
					Key features of the Activity Application include <span className='text-primary font-normal'>user authentication</span>,
					allowing secure login and registration; <span className='text-primary font-normal'>activity management</span>,
					where users can create, update, and delete activities; <span
					className='text-primary font-normal'>comments</span>, supporting user interaction on activities;
					and <span className='text-primary font-normal'>image upload</span>, enabling users to share images
					related to activities. The application also leverages <span
					className='text-primary font-normal'>SignalR</span> for real-time updates, enhancing the dynamism of
					user participation and interaction.
				</p>

				<h2 className={'projectDetailHeading'}>Technology Stack</h2>
				<p className={'projectDetailDescription'}>
					At the technological core, the frontend is developed with <span
					className='text-primary font-normal'>React</span> and <span
					className='text-primary font-normal'>TypeScript</span>, employing <span
					className='text-primary font-normal'>MobX</span> for state management to ensure a responsive and
					state-of-the-art user interface. The backend is powered by <span
					className='text-primary font-normal'>.NET 5.0</span>, with <span
					className='text-primary font-normal'>Entity Framework Core</span> managing database operations
					and <span className='text-primary font-normal'>JWT</span> for authentication, ensuring a secure and
					scalable application architecture. <span className='text-primary font-normal'>SQLite</span> is
					utilized for development databases, with provisions for easy migration to <span
					className='text-primary font-normal'>SQL Server</span> or <span
					className='text-primary font-normal'>PostgreSQL</span>. Additionally, <span
					className='text-primary font-normal'>Cloudinary</span> integration facilitates robust image hosting
					solutions.
				</p>

				<h2 className={'projectDetailHeading'}>Development Insights</h2>
				<p className={'projectDetailDescription'}>
					The development journey of the Activity Application emphasized clean code practices, modular
					architecture, and the implementation of real-time data exchange to foster a lively community
					engagement. Rigorous testing phases ensured a bug-free and user-friendly platform, ready to scale
					and adapt to the evolving needs of its user base.
				</p>

				<h2 className={'projectDetailHeading'}>Personal Contributions</h2>
				<p className={'projectDetailDescription'}>
					My role in this project spanned from initial concept design, through development, to final
					deployment. I was pivotal in integrating the <span
					className='text-primary font-normal'>SignalR</span> for real-time communication, crafting the <span
					className='text-primary font-normal'>React</span> frontend components, and establishing a
					secure <span className='text-primary font-normal'>.NET Core</span> backend. This project refined my
					skills in full-stack development, particularly in creating applications that require immediate data
					updates and user interactions.
				</p>
			</>
		),
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
		explanation: (
			<>
				<h2 className={'projectDetailHeading'}>Introduction to Cinema Ticket</h2>
				<p className={'projectDetailDescription'}>
					The <span className='text-primary font-normal'>Cinema Ticket</span> project is a full-stack web
					application designed to enhance the movie-going experience for cinema enthusiasts. It allows users
					to browse and purchase cinema tickets for upcoming movies seamlessly, while administrators can
					manage showtimes, movie listings, and ticket sales efficiently. Built using <span
					className='text-primary font-normal'>React</span> for the frontend and <span
					className='text-primary font-normal'>ASP.NET Core</span> for the backend, the application ensures a
					responsive, scalable, and secure platform for all users.
				</p>

				<h2 className={'projectDetailHeading'}>Core Features</h2>
				<p className={'projectDetailDescription'}>
					Cinema Ticket boasts a range of features including a <span className='text-primary font-normal'>user-friendly interface</span> for
					easy navigation, a <span
					className='text-primary font-normal'>comprehensive movie catalog</span> with detailed pages for each
					movie, <span className='text-primary font-normal'>basket functionality</span> for ticket selections,
					and <span className='text-primary font-normal'>secure user authentication</span> for user
					management. Additionally, the platform offers <span className='text-primary font-normal'>admin management tools</span> for
					movie and showtime management, enhancing the overall administrative workflow.
				</p>

				<h2 className={'projectDetailHeading'}>Technology Stack</h2>
				<p className={'projectDetailDescription'}>
					The frontend is developed with <span className='text-primary font-normal'>React</span> using <span
					className='text-primary font-normal'>TypeScript</span>, and styled with <span
					className='text-primary font-normal'>Material UI</span>. The backend is powered by <span
					className='text-primary font-normal'>ASP.NET Core</span>, utilizing <span
					className='text-primary font-normal'>Entity Framework Core</span> for data access and <span
					className='text-primary font-normal'>SQL Server</span> for the database. <span
					className='text-primary font-normal'>Stripe</span> is integrated for secure payment processing,
					with <span className='text-primary font-normal'>Docker</span> supporting containerization and
					deployment, and <span className='text-primary font-normal'>GitHub Actions</span> for CI/CD
					pipelines.
				</p>

				<h2 className={'projectDetailHeading'}>Development and Deployment</h2>
				<p className={'projectDetailDescription'}>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					Emphasizing clean code and best practices, the development process included thorough testing to
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					ensure a bug-free and user-friendly platform. The application's design allows for easy deployment
					and scalability, catering to a growing audience of movie enthusiasts.
				</p>
				<Image
					className={'projectDetailDiagram'}
					src={`/images/diagrams/cinema-ticket-diagram.svg`}
					alt={"cinema-ticket-diagram"}
					width={1300}
					height={1200}
					title={"Cinema Ticket Diagram"}
				/>

				<h2 className={'projectDetailHeading'}>Personal Contributions</h2>
				<p className={'projectDetailDescription'}>
					My contributions to the Cinema Ticket project spanned across the full development lifecycle, from
					designing the database schema and implementing backend services to developing the React frontend and
					integrating payment processing. This project refined my full-stack development skills and deepened
					my understanding of creating scalable, user-centric web applications.
				</p>
			</>
		),
		backend: ['DotNetCore'],
		frontend: ['React', 'Redux', 'MaterialUI', 'TypeScript'],
		container: ['Docker'],
		tools: ['Stripe'],
		database: ['SqlServer'],
		versionControl: ["Git"],
		sourceCode: "https://github.com/AliShahbazi81/Cinema-Ticket"
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
												<h3 className={'projectTitle mb-3 mt-6'}>
													Source Code :
												</h3>
												<div className={'flex items-center justify-start flex-wrap'}>
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
						<p>projectId: {params.id}</p>
				}
			</div>
		</div>
	)
}