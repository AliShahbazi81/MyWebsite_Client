import Image from "next/image";
import React from "react";

export default function ELearning()
{
	return(
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
	)
}