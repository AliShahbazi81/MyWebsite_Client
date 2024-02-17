'use client'

import Image from "next/image";
import * as http2 from "http2";

export default function HomePageImage() {
	    return (
	  <>
			<Image
				  src="/images/BackgroundImage.jpg"
				  alt="BackgroundImage"
				  layout={"fill"}
				  objectFit={"cover"}
				  objectPosition={"center"}
				  quality={100}
				  loading={"eager"}
			/>
	  <h2>Hello there</h2>
	  </>
			  
  );
}