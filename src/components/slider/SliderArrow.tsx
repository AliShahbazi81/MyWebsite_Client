import {MouseEventHandler} from "react";

type Props = {
	  onClick?: () => void
	  next: boolean
}

export default function SliderArrow({onClick, next}: Props)
{
	  return(
			<button
				  onClick={onClick}
				  className="px-4 py-2 rounded-full text-primary shine-effect"
				  aria-label={next ? "Next" : "Previous"}
			>
				  {next ? ">" : "<"}
			</button>
	  )
}