import Image from "next/image";
import React from "react";

export default function CinemaTicket()
{
	return(
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
	)
}