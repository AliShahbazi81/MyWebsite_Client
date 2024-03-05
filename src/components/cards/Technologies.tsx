import Image from "next/image";

type Props = {
	  keyword: string
}

export default function Technologies({ keyword }: Props) {
	  return (
			<div className="flex flex-wrap justify-center items-center">
				  <div className="technologyIcons">
						<Image
							  src={`/images/keywords/${keyword}.png`}
							  alt={`${keyword}`}
							  layout={"responsive"}
							  width={40}
							  height={40}
							  objectFit="cover"
							  title={`${keyword}`}
						/>
				  </div>
			</div>
	  );
}
