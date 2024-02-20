import Image from "next/image";

type Props = {
	  keyword: string
}

export default function Technologies({ keyword }: Props) {
	  return (
			<div className="technologyIcons flex flex-wrap justify-center items-center">
				  <div className="relative overflow-auto sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-8 lg:h-8 xl:w-10 xl:h-10">
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
