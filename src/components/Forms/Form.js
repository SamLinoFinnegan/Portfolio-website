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

	function checkTime(){
		const startTime = parseInt(document.getElementById('timeStamp').innerText, 10);
		const now = Date.now();
		const timeDiff = (now - startTime) / 1000; 
		
		return timeDiff
	}
	function cleanInput(input) {
		return input
			.replace(/[\u200B-\u200D\uFEFF]/g, '')    // Remove zero-width characters
			.replace(/<[^>]*>/g, '')                  // Remove HTML tags
			.replace(/&nbsp;|&#160;/gi, ' ')          // Remove HTML space entities
			.replace(/\s+/g, ' ')                     // Collapse multiple spaces
			.trim();                                  // Trim leading/trailing whitespace
		}

	function checkElvis(){
		let elvis = document.getElementById("linkedin").value
		if(!elvis || elvis.length === 0 ){
			return false
		}
		return true
	}


	const handleSubmit = (e) => {
		const specialCharacters = ['"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "£"];
		const specialCharacterRegex = /["#$%&'()*+,./:;<=>[\\\]^_`{|}]/;
		const trimmedMessage = cleanInput(formData.message);
		const trimmedName = cleanInput(formData.name);
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
		} else if (checkTime() < 3){
			hasError = true;
		} else if (checkElvis()){
			hasError = true;
		}
		checkElvis()
		
		if (hasError) {
			e.preventDefault();
		}
		setErrors(formErrors);

		
		if (Object.keys(formErrors).length === 0) {
			
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
			<p style={{display: 'none'}} id="timeStamp">{Date.now()}</p>
			<div className={Style.inputNameAndEmail}>
				<div className={Style.inputBox}>
					<input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
					{errors.name && <div className={Style.error}>{errors.name}</div>}
				</div>
				<div className={Style.inputBox}>
					<input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
					{errors.email && <div className={Style.error}>{errors.email}</div>}
				</div>
				<div className={Style.inputBox1}>
					<input id="linkedin" type="text" name="linkedin" placeholder="Enter your linkedin"/>
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
