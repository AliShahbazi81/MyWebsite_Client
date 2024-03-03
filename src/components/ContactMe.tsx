import React from 'react';
import * as Yup from 'yup';
import {Form, Formik} from "formik";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './../app/css/contactMe.scss';
import toast from "react-hot-toast";

// Validation schema
const ContactSchema = Yup.object().shape({
	name: Yup.string().min(3, 'Name is too short').required('Name is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	subject: Yup.string().required('Subject is required').min(5, 'Subject is too short'),
	message: Yup.string().required('Message is required').min(10, 'Message is too short'),
});

export default function ContactMe() {

	return (
		<Formik
			initialValues={{name: '', email: '', subject: '', message: ''}}
			validationSchema={ContactSchema}
			onSubmit={async (values, {setSubmitting, resetForm}) => {
				// Handle form submission
				try {
					console.log("Before going to fetch");
					const response = await fetch('/api/email/route', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(values),
					});

					if (!response.ok) toast.error('Failed to send message');

					resetForm();
					toast.success('Message sent successfully');
				} catch (error) {
					toast('Failed to send message', {icon: '❌'});
				} finally {
					setSubmitting(false);
				}
			}}
		>
			{({getFieldProps, touched, errors, resetForm, isSubmitting}) => (
				<Form className="contactEnv">
					<div id={"contactBorderTopAndLeft"} className={'contactBorderTopAndLeft'}>
						<div id={"contactBorderBottomAndRight"} className={'contactBorderBottomAndRight'}>
							<TextField
								label="Name"
								{...getFieldProps('name')}
								error={touched.name && Boolean(errors.name)}
								helperText={touched.name && errors.name}
								fullWidth
								className="contactElement myAutofillInput"
								variant="outlined"
								sx={{
									// Default styles
									'& .MuiOutlinedInput-root': {
										'& fieldset': {
											borderColor: 'white', // Default border color
										},
										'&:hover fieldset': {
											borderColor: '#0AD3FF', // Border color on hover
										}
									},
									'& .MuiInputLabel-root': {
										color: 'white', // Label color
										'&.Mui-focused': {
											color: 'white', // Label color when focused
										},
									},
									'& .MuiInputBase-input': {
										color: 'white', // Text color
									},
									'& .MuiOutlinedInput-notchedOutline': {
										borderColor: 'white', // Ensuring default notched outline color
									},
									'& .Mui-error': {
										'& .MuiOutlinedInput-notchedOutline': {
											borderColor: 'red', // Error state border color
										},
									},
								}}
							/>
							<TextField
								label="Email"
								{...getFieldProps('email')}
								error={touched.email && Boolean(errors.email)}
								helperText={touched.email && errors.email}
								fullWidth
								className="contactElement myAutofillInput"
								sx={{
									// Default styles
									'& .MuiOutlinedInput-root': {
										'& fieldset': {
											borderColor: 'white', // Default border color
										},
										'&:hover fieldset': {
											borderColor: '#0AD3FF', // Border color on hover
										}
									},
									'& .MuiInputLabel-root': {
										color: 'white', // Label color
										'&.Mui-focused': {
											color: 'white', // Label color when focused
										},
									},
									'& .MuiInputBase-input': {
										color: 'white', // Text color
									},
									'& .MuiOutlinedInput-notchedOutline': {
										borderColor: 'white', // Ensuring default notched outline color
									},
									'& .Mui-error': {
										'& .MuiOutlinedInput-notchedOutline': {
											borderColor: 'red', // Error state border color
										},
									},
								}}
							/>
							<TextField
								label="Subject"
								{...getFieldProps('subject')}
								error={touched.subject && Boolean(errors.subject)}
								helperText={touched.subject && errors.subject}
								fullWidth
								className="contactElement myAutofillInput"
								sx={{
									// Default styles
									'& .MuiOutlinedInput-root': {
										'& fieldset': {
											borderColor: 'white', // Default border color
										},
										'&:hover fieldset': {
											borderColor: '#0AD3FF', // Border color on hover
										}
									},
									'& .MuiInputLabel-root': {
										color: 'white', // Label color
										'&.Mui-focused': {
											color: 'white', // Label color when focused
										},
									},
									'& .MuiInputBase-input': {
										color: 'white', // Text color
									},
									'& .MuiOutlinedInput-notchedOutline': {
										borderColor: 'white', // Ensuring default notched outline color
									},
									'& .Mui-error': {
										'& .MuiOutlinedInput-notchedOutline': {
											borderColor: 'red', // Error state border color
										},
									},
								}}
							/>
							<TextField
								label="Your Message"
								{...getFieldProps('message')}
								error={touched.message && Boolean(errors.message)}
								helperText={touched.message && errors.message}
								fullWidth
								multiline
								rows={4}
								className="contactElement myAutofillInput"
								sx={{
									// Default styles
									'& .MuiOutlinedInput-root': {
										'& fieldset': {
											borderColor: 'white', // Default border color
										},
										'&:hover fieldset': {
											borderColor: '#0AD3FF', // Border color on hover
										}
									},
									'& .MuiInputLabel-root': {
										color: 'white', // Label color
										'&.Mui-focused': {
											color: 'white', // Label color when focused
										},
									},
									'& .MuiInputBase-input': {
										color: 'white', // Text color
									},
									'& .MuiOutlinedInput-notchedOutline': {
										borderColor: 'white', // Ensuring default notched outline color
									},
									'& .Mui-error': {
										'& .MuiOutlinedInput-notchedOutline': {
											borderColor: 'red', // Error state border color
										},
									},
								}}
							/>
							<div className={'contactButtonEnv'}>
								<Button
									type="button"
									variant="outlined"
									className="clearButton"
									onClick={() => resetForm()}
									disabled={isSubmitting}
								>
									Clear
								</Button>
								<Button
									type="submit"
									variant="contained"
									className="sendButton "
									disabled={isSubmitting}
								>
									{isSubmitting ? 'Sending...' : 'Send'}
								</Button>
							</div>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}
