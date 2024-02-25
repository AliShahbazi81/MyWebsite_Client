import Image from "next/image";
import Link from "next/link";

type Props = {
	imageName: string;
	socialLink: string;
}

export default function SocialLinks({imageName, socialLink}: Props)
{
	return(
		<Link href={socialLink}>
			<Image 
				className={'socialIcon '}
				width={50}
				height={50}
				src={`/images/social/${imageName}.png`} 
				alt={`social-${imageName}`}
			/>	
		</Link>
	)
}