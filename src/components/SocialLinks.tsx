import Image from "next/image";

type Props = {
	imageName: string;
}

export default function SocialLinks({imageName}: Props)
{
	return(
		<>
			<Image 
				className={'socialIcon'}
				src={`/images/social/${imageName}`} 
				alt={`social-${imageName}`}
				objectFit={"cover"}
			/>	
		</>
	)
}