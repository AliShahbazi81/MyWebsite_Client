import Image from "next/image";

type Props = {
	  keyword: string
}

export default function Technologies({ keyword }: Props) {
	  return (
			<div className="technologyIcons flex flex-wrap justify-center items-center">
				  <div className="w-10 h-10 relative overflow-hidden">
						<Image
							  src={`/images/keywords/${keyword}.png`}
							  alt={`${keyword}`}
							  layout={"responsive"}
							  width={40}
							  height={40}
							  objectFit="cover"
						/>
				  </div>
			</div>
	  );
}
