'use client'
export default function MouseScroll()
{
	  return(
			<div className="relative flex items-center justify-center h-20 w-20">
				  <svg className="h-full w-full" viewBox="0 0 52 52">
						<circle
							  className="animate-drawOval"
							  cx="26" cy="26" r="25"
							  fill="transparent"
							  stroke="gray"
							  strokeWidth="2"
						/>
						<circle
							  className="animate-drawPurpleOval"
							  cx="26" cy="26" r="25"
							  fill="transparent"
							  stroke="purple"
							  strokeWidth="2"
							  strokeDasharray="157"
							  strokeDashoffset="157"
						/>
				  </svg>
				  <div className="absolute top-0 left-1/2 bg-purple-500 w-1 h-3 animate-zigzag"></div>
				  <div className="absolute bottom-0 mb-1 left-1/2 transform -translate-x-1/2">
						<div className="w-1 h-6 bg-purple-500 animate-drawDown"></div>
						<div className="w-3 h-3 bg-purple-500 transform rotate-45 -translate-x-1/2 -translate-y-1/2 animate-drawArrow"></div>
				  </div>
			</div>
	  )
}