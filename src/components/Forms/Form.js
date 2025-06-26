import React, { useState } from "react";
import Style from "./Form.module.css";
import plane from "./../../img/send_icon.png";

export default function Form() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});

	function checkValidLen(str) {
		const min = 2;
		const max = 400;
		return str.length > min && str.length < max;
	}

	const handleSubmit = (e) => {
		const specialCharacters = ['"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "£"];
		const specialCharacterRegex = /["#$%&'()*+,.\/:;<=>\[\\\]^_`{\|}]/;
		const trimmedMessage = formData.message.trim();
		const trimmedName = formData.name.trim();
		let hasError = false;

		let formErrors = {};

		if (!trimmedName) {
			hasError = true;
			formErrors.name = "Name is required";
		} else if (!checkValidLen(trimmedName)) {
			hasError = true;
			formErrors.name = "Invalid length";
		} else if (specialCharacters.some((str) => formData.name.includes(str)) || specialCharacterRegex.test(trimmedName)) {
			hasError = true;
			formErrors.name = "Invalid character detected";
		}
		if (!formData.email) {
			hasError = true;
			formErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			hasError = true;
			formErrors.email = "Email is invalid";
		}
		if (!trimmedMessage || typeof formData.message !== "string") {
			hasError = true;
			formErrors.message = "Message is required";
		} else if (specialCharacters.some((str) => formData.message.includes(str)) || specialCharacterRegex.test(trimmedMessage)) {
			hasError = true;
			formErrors.message = "Invalid character detected";
		} else if (!checkValidLen(trimmedMessage)) {
			hasError = true;
			formErrors.message = "Invalid length";
		}
		if (hasError) {
			e.preventDefault();
		}
		setErrors(formErrors);

		// If form is valid, submit it
		if (Object.keys(formErrors).length === 0) {
			// Submit the form to your backend or some other action
			console.log("Form submitted:", formData);
		}
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form method="post" name="contactForm" className={Style.contactForm} onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
			<input type="hidden" name="form-name" value="contactForm" />
			<input type="hidden" name="bot-field" />
			<div className={Style.inputNameAndEmail}>
				<div className={Style.inputBox}>
					<input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
					{errors.name && <div className={Style.error}>{errors.name}</div>}
				</div>
				<div className={Style.inputBox}>
					<input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
					{errors.email && <div className={Style.error}>{errors.email}</div>}
				</div>
			</div>
			<div className={Style.inputBox}>
				<textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
				{errors.message && <div className={Style.error}>{errors.message}</div>}
			</div>
			<button type="submit">
				<div>
					<img src={plane} alt="send icon"></img>
				</div>
				<div>Send</div>
			</button>
		</form>
	);
}
