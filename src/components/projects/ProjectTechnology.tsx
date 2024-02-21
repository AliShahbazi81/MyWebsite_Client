
type Props = {
	  techName: string[]
	  
}

export default function ProjectTechnology({techName = []}: Props)
{
	  return(
			<div className={'flex justify-start items-start flex-wrap'}>
				  {techName.map((item, index) => (
						<p 
							  className={'bg-blue-950 text-white rounded-xl pr-2 pl-2 pt-1 pb-1 mt-1 text-sm mr-2'}
							  key={index}
						>
							  {item}
						</p>
				  ))}
			</div>
	  )
}