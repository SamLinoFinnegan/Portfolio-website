import React from "react";
import Style from './Form.module.css';
import plane from './../../img/send_icon.png'

export default function Form() {
    return (
      <form 
        method='POST' 
        name='contactform' 
        className={Style.contactForm}>
        <div className={Style.inputNameAndEmail}>
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
          placeholder='Messaage'></textarea>
  
        <button type='submit'>
            <div><img src={plane} alt="send icon"></img></div>
            <div>Send</div>
            
            </button>
  
      </form>
    )
  }