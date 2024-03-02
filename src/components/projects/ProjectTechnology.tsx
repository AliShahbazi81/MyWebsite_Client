type Props = {
	techName: string[]
}

export default function ProjectTechnology({techName = []}: Props) {
	return (
		<div className={'projectTechnologyEnv'}>
			{techName.map((item, index) => (
				<p
					className={'projectTechnology'}
					key={index}
				>
					{item}
				</p>
			))}
			
		</div>
	)
}