
type Props = {
	description: string;
	role: string;
}

export default function ExperienceDescription({description, role}: Props)
{
	return(
		<div className={'descriptionEnv'}>
			<h2 className={'projectTitle mb-4'}>
				{role}
			</h2>
			<p className={'experienceDescription'}>
				{description}
			</p>
		</div>
	)
}