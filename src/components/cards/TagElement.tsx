
type Props = {
	  softwareDevelopment?: boolean
	  backend?: boolean
	  frontend?: boolean
	  database?: boolean
	  
}

export default function TagElement({softwareDevelopment, backend, frontend, database}: Props)
{
	  function findElement() : string
	  {
			if (softwareDevelopment) return "Hello World!";
			if (backend) return "Console.WriteLine";
			if (frontend) return "<h3>";
			if (database) return "SHOW";
			return "No Tag Specified"; 
	  }
	  return(
			<div className={'flex items-start justify-start'}>
				  <h6 className={'element'}>
						{findElement()}
				  </h6>
			</div>
	  )
}