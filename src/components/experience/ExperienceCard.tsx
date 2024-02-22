import Image from "next/image";
import "./../../app/css/experience.scss";


type Props = {
	companyName: string;
	dateFrom: string;
	dateTo: string;
	description: string;
	country: string;
	image?: boolean;
}

export default function ExperienceCard({companyName, dateFrom, dateTo, description, country, image}: Props)
{
	  return(
			<>
				  <div className={'headerEnv'}>
						<div className={'headerDetail'}>
							  <h2 className={'expHeader'}>
									{companyName}
							  </h2>
							  <h3 className={'headerCountry'}>
									{country}
							  </h3>
						</div>
						<h2>
							  {dateFrom} - {dateTo}
						</h2>
				  </div>
				  <div className={'bodyEnv'}>
						<p>
							  {description} 
						</p>
						{image ?? <Image
                            className={'bodyImage'}
                            src={`/images/experience/${companyName}`}
                            alt={companyName + " icon"}
                            width={50}
                            height={50}
                        />}
				  </div>
			</>
	  )
}