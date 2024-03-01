import Image from "next/image";
import React from "react";

export default function UserActivity()
{
	return(
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
	)
}