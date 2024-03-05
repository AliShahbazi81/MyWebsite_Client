'use client'
import Image from "next/image";
import React from "react";

type Props = {
	id:string,
	expertise: string
}

export default function CardHeader({expertise, id}: Props) {
	return (
		<div className={'cardHeader'}>
			{/*Icon*/}
			<Image
				src={`/images/${id}.png`}
				alt={`${expertise}`}
				className={'icon'}
				width={300}
				height={300}
			/>
			{/* Title */}
			<h1 className={'cardTitle'}>
				{expertise}
			</h1>
		</div>
	)
}