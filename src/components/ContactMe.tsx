import * as Yup from 'yup';
import {Form, Formik} from "formik";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './../app/css/contactMe.scss'

const ContactSchema = Yup.object().shape({
	name: Yup.string().min(3),
	email: Yup.string().email('Invalid email').required('Email is required'),
	subject: Yup.string().required('Subject is required').min(5),
	message: Yup.string().required('Message is required'),
});

export default function ContactMe() {
	return (
		<Formik
			initialValues={{name: '', email: '', subject: '', message: ''}}
			validationSchema={ContactSchema}
			onSubmit={(values, {setSubmitting}) => {
				// Handle form submission
				console.log(values);
				setSubmitting(false);
			}}
		>
			{formik => (
				<Form className={'contactEnv'}>
					<TextField
						className={'contactElement'}
						label={"Name" + <sup color={"red"}>*</sup>}
						sx={{
							input: {color: 'white'},
							'& label': {color: 'white'},
							/*Set border color in every state to white*/
							'& .MuiOutlinedInput-root': {borderColor: 'white'},
							'& .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
							'& .MuiInputLabel-root': {color: 'white'},
							'& .MuiOutlinedInput-input': {color: 'white'},
							/*Set hover border to white*/
							'&:hover .MuiOutlinedInput-root': {borderColor: 'white'},
							'&:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
							'&:hover .MuiInputLabel-root': {color: 'white'},
							'&:hover .MuiOutlinedInput-input': {color: 'white'},
						}}
						{...formik.getFieldProps('name')}
						error={formik.touched.name && Boolean(formik.errors.name)}
						helperText={formik.touched.name && formik.errors.name}
						fullWidth
					/>
					<TextField
						className={'contactElement'}
						label="Subject"
						sx={{
							input: {color: 'white'},
							'& label': {color: 'white'},
							/*Set border color in every state to white*/
							'& .MuiOutlinedInput-root': {borderColor: 'white'},
							'& .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
							'& .MuiInputLabel-root': {color: 'white'},
							'& .MuiOutlinedInput-input': {color: 'white'},
							/*Set hover border to white*/
							'&:hover .MuiOutlinedInput-root': {borderColor: 'white'},
							'&:hover .MuiInputLabel-root': {color: 'white'},
							'&:hover .MuiOutlinedInput-input': {color: 'white'},
						}}
						{...formik.getFieldProps('subject')}
						error={formik.touched.subject && Boolean(formik.errors.subject)}
						helperText={formik.touched.subject && formik.errors.subject}
						fullWidth
					/>
					<TextField
						className={'contactElement'}
						label="Email"
						sx={{
							input: {color: 'white'},
							'& label': {color: 'white'},
							/*Set border color in every state to white*/
							'& .MuiOutlinedInput-root': {borderColor: 'white'},
							'& .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
							'& .MuiInputLabel-root': {color: 'white'},
							'& .MuiOutlinedInput-input': {color: 'white'},
							/*Set hover border to white*/
							'&:hover .MuiOutlinedInput-root': {borderColor: 'white'},
							'&:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
							'&:hover .MuiInputLabel-root': {color: 'white'},
							'&:hover .MuiOutlinedInput-input': {color: 'white'},
						}}
						{...formik.getFieldProps('email')}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
						fullWidth
					/>
					<TextField
						className={'contactElement'}
						label="Your Message"
						sx={{
							input: {color: 'white'},
							'& label': {color: 'white'},
							/*Set border color to white*/
							'& .MuiOutlinedInput-root': {borderColor: 'white'},
							'& .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
							'& .MuiInputLabel-root': {color: 'white'},
							'& .MuiOutlinedInput-input': {color: 'white'},
							/*Set hover border to white*/
							'&:hover .MuiOutlinedInput-root': {borderColor: 'white'},
							'&:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
							'&:hover .MuiInputLabel-root': {color: 'white'},
							'&:hover .MuiOutlinedInput-input': {color: 'white'},
							'&:hover': {borderColor: 'white'},
							/*Set border color to white when it is not focused and hovered*/
							'& .MuiOutlinedInput-root.Mui-focused': {borderColor: 'white'},
						}}
						{...formik.getFieldProps('message')}
						error={formik.touched.message && Boolean(formik.errors.message)}
						helperText={formik.touched.message && formik.errors.message}
						multiline
						rows={4}
						variant="outlined"
						fullWidth
					/>
					{/* Add more fields as needed */}
					<div className={'contactButtonEnv'}>
						<Button
							className={'clearButton'}
							variant="contained"
						>
							Clear
						</Button>
						<Button 
							className={'sendButton'}
							type="submit"
							variant="contained"
						>
							Send
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
}