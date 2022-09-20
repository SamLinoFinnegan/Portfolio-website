import React from "react";
import Style from './Form.module.css';
import plane from './../../img/send_icon.png'

export default function Form() {
    return (
      <form 
        method='POST' 
        name='contactform' 
        data-netlify="true"
        className={Style.contactForm}>
        <div className={Style.inputNameAndEmail}>
        <input 
          type='text' 
          name='contactform' 
          placeholder='Enter your name' />
  
        <input 
          type='email' 
          name='contactform' 
          placeholder='Enter your email' />
        </div>
        <textarea 
          name='contactform' 
          placeholder='Messaage'></textarea>
  
        <button type='submit'>
            <div><img src={plane} alt="send icon"></img></div>
            <div>Send</div>
            
            </button>
  
      </form>
    )
  }