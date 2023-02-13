import React, { useState } from "react";
import Style from './Form.module.css';
import plane from './../../img/send_icon.png'

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    

    // Validate form inputs
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = "Name is required";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.message) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);

    // If form is valid, submit it
    if (Object.keys(formErrors).length === 0) {
      // Submit the form to your backend or some other action
      console.log("Form submitted:", formData);
    }
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form 
      method='post' 
      name='contactForm' 
      className={Style.contactForm}
      onSubmit={handleSubmit}>
      <div className={Style.inputNameAndEmail}>
        <input type="hidden" name="form-name" value="contactForm" />
        <input 
          type='text' 
          name='name' 
          placeholder='Enter your name' 
          value={formData.name}
          onChange={handleChange} />
        {errors.name && <div className={Style.error}>{errors.name}</div>}
        <input 
          type='email' 
          name='email' 
          placeholder='Enter your email' 
          value={formData.email}
          onChange={handleChange} />
        {errors.email && <div className={Style.error}>{errors.email}</div>}
      </div>
      <textarea 
        name='message' 
        placeholder='Message' 
        value={formData.message}
        onChange={handleChange}></textarea>
      {errors.message && <div className={Style.error}>{errors.message}</div>}
      <button type='submit'>
          <div><img src={plane} alt="send icon"></img></div>
          <div>Send</div>
      </button>
    </form>
  );
}