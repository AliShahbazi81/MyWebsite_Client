import Image from "next/image";

type Props = {
	  keyword: string
}

export default function Technologies({ keyword }: Props) {
	  return (
			<div className="flex flex-wrap justify-center items-center">
				  <div className="technologyIcons">
						<Image
							className={'technologyIcon'}
							  src={`/images/keywords/${keyword}.png`}
							  alt={`${keyword}`}
							  width={40}
							  height={40}
							  title={`${keyword}`}
						/>
				  </div>
			</div>
	  );
}
