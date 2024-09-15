import React from "react";
import Style from './About.module.css';
import me from './../../img/me.jpeg';






const About = () => {
    
    return (
        <div className={Style.about}>
            <div className={Style.aboutSamContainer}>
                <div className={Style.samImg}>
                    <a href={me} alt="Just me">
                        <img src={me} alt="me"></img>
                    </a>
                </div>
                <div className={Style.samText}>
                    <h1>
                        Hi, i'm Sam Finnegan
                    </h1>
                    <p>
                        Programmer, gamer and world traveler
                        <br/>
                        <br/>


                        From an early age, I've always loved computer games as well as trying to hack websites and friends' accounts.
                        <br/>
                        I can say technology is not only a subject of interest for me, but one of my greatest passions. My passion is not merely superficial, rather it is in the nitty gritty details. An important moment of my early life was when I built my first computer at age 15.
                        <br/>
                        <br/>
                        As I grew older, I noticed that I like being able to get problems and break them down to their smallest component, and then use logical thinking to create algorithms to then solve the same problems, that's when I decided to enroll in the Dutch coding school  <a href="https://www.wincacademy.nl/">WincAcademy</a>, where I enrolled in their Full-stack developer course.
                        <br/>
                        <br/>
                        Following <a href="https://www.wincacademy.nl/">WincAcademy</a>, I am currently working towards my Google Cloud Associate Engineer Certificate, having completed the Basics of Machine Learning course, and the Cisco-IT Essentials course.
                        <br/>
                        <br/>

                        I am a believer of self-improvement, and strive to be better today than I was yesterday. I always try to be proactive, I believe that time is one of life's most precious gifts so I always try to make the most of it.
                    </p>

                </div>
            </div>
            
        </div>
    );
}

export default About;