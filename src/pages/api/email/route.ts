import nodemailer from 'nodemailer';
import {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	console.log("Inside email api");
	const { name, email, subject, message } = req.body;
	console.log("Inside email api");

	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	try {
		await transporter.sendMail({
			from: email, 
			to: "alishahbazi799@gmail.com",
			subject: `New contact from ${name} - ${subject}`,
			text: `Message from: ${name} <${email}>\n\n${message}`,
		});
		
		res.status(200).send("Message sent successfully.");
	} catch (error) {
		console.log(error);
		res.status(500).send("Failed to send message.");
		console.log("Failed to send message." + error)
	}
};
