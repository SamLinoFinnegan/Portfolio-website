import React from "react";
import Style from './Form.module.css';
import plane from './../../img/send_icon.png'

export default function Form(props) {

    return (
     
      <form 
        method='post' 
        name='contactForm' 
        className={Style.contactForm}>
        <div className={Style.inputNameAndEmail}>
        
        <input type="hidden" name="form-name" value="contactForm" />
        
        <input 
          type='text' 
          name='name' 
          placeholder='Enter your name' />
  
        <input 
          type='email' 
          name='email' 
          placeholder='Enter your email' />
        </div>
        <textarea 
          name='message' 
          placeholder='Message'></textarea>
  
        <button type='submit'>
            <div><img src={plane} alt="send icon"></img></div>
            <div>Send</div>
            
            </button>
  
      </form>
      
    )
  }