import React from "react";
import Style from './Form.module.css';
import plane from './../../img/send_icon.png'
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit,  errors } = useForm();
  const onSubmit = data => console.log(data);
    return (
      <form 
        method='post' 
        name='contactForm' 
        className={Style.contactForm}
        onSubmit={handleSubmit(onSubmit)}
        >
        <div className={Style.inputNameAndEmail}>
        <input type="hidden" name="form-name" value="contactForm" />
        <input 
          type='text' 
          name='name'
          ref={register({ required: true })}
          placeholder='Enter your name' 
          />
          {errors.requiredField && <span>This field is required</span>}
        <input 
          type='email' 
          name='email'
          ref={register({ required: true })} 
          placeholder='Enter your email' />
          {errors.requiredField && <span>This field is required</span>}
        </div>
        <textarea 
          name='message' 
          placeholder='Messaage'
          ref={register({ required: true })}
          >
          {errors.requiredField && <span>This field is required</span>}
          </textarea>
  
        <button type='submit'>
            <div><img src={plane} alt="send icon"></img></div>
            <div>Send</div>
            
            </button>
  
      </form>
    )
  }