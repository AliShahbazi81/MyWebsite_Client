
export default async function ProjectPage({params}: {params: {id: string}})
{
	return(
		<div className={'bg-card h-full w-full'}>
			projectId: {params.id}
			Hello There!
		</div>
	)
}