import React from "react";
import Style from './Services.module.css';
import webdesign from './../../img/Webdesign.png'
import camera from './../../img/camera.jpg'
import classes from './../../img/class.jpg'

function alertMe(){
    alert("This functionality is still not finnished, but feel free to send me an email and ill be right with you")
}

const Services = () =>{
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
                        <button onClick={alertMe}>Click me</button>
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
                        <button onClick={alertMe}>Click me</button>
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
                        <button onClick={alertMe}>Click me</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services