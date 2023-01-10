import React , { useState } from "react";
import Style from './Services.module.css';
import webdesign from './../../img/Webdesign.png'
import camera from './../../img/camera.jpg'
import classes from './../../img/class.jpg'
import Form from './../Forms/Form'


const Services = () =>{

    let [toggle, togleService] = useState(false)
    let [service, changeService] = useState()

    let services = toggle ? Style.displayServicesVisible :Style.nothing



    let content = toggle ? <Form name={service} /> : null
  
    
    
    
    
    
    
    const handleScroll = (con) => {
        const element = document.getElementById("services")
        return con ? element.scrollIntoView({behavior:"smooth"}): null
        
    }
    const handleClick = (event) =>{
        let answer = event.currentTarget.id
        console.log(answer)
        changeService(answer)
        handleScroll(true)
        togleService(current => ! current) 
        
       
    }

    return(
        <div className={Style.services}>
            <div className={Style.container}>
                <div className={Style.box}>
                    <div className={Style.box_img}>
                        <img src={webdesign} alt="webdesign"></img>
                    </div>
                    <div className={Style.box_text}>
                        <h2>Free-lance Webdesign</h2>
                        <p>If you are looking for a website, or would like to renew or change and excisting website, i would love to hear about it and help you out</p>
                    </div>
                    <div className={Style.button}>
                        <button onClick={handleClick}>Click me</button>
                    </div>
                </div>
                <div className={Style.box}>
                    <div className={Style.box_img}>
                    <img src={classes} alt="coding classes"></img>
                    </div>
                    <div className={Style.box_text}>
                        <h2>Beginner level Programming tutoring</h2>
                        <p>If you are a beginner or have interest in getting started with the fundamentals of programming, i would love to help you get started</p>
                    </div>
                    <div className={Style.button}>
                        <button onClick={handleClick}>Click me</button>
                    </div>
                </div>
                <div className={Style.box}>
                    <div className={Style.box_img}>
                    <img src={camera} alt="photography camera"></img>
                    </div>
                    <div className={Style.box_text}>
                        <h2>Photography</h2>
                        <p>If you have a special event coming up, or need some great pictures for your portfolio, we've got you coverd</p>
                    </div>
                    <div className={Style.button}>
                        <button id="Photography" onClick={handleClick}>Click me</button>
                    </div>
                </div>
            </div>
            <div id="services" className={Style.displayServiceContainer}>
                <div className={services}>
                    {content}
                </div>
            </div>
            <div className={Style.workWithContainer}>

            </div>
            
        </div>
    )
}

export default Services