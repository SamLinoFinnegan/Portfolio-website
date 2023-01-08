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
                        Programmer, gammer and world traveler
                        <br/>
                        <br/>


                        From an early age ,I've always loved computer games as well as trying to hack websites and friends' accounts <span role="img" aria-label="smile">😋</span>.
                        <br/>
                        I always liked opening up the computer to see how things worked under the hood and by the time i got to my teens i had already built my own computer.
                        <br/>
                        I can say technology has always been a subject of interest and passion for me.
                        <br/>

                        As I grew older, I started to travel the world and try to analyze the why we are who we are and what variables make us into the people we are. I noticed that I like being able to get problems and break them down to their smallest component, and then use logical thinking to create algorithms to then solve the same problems, that's when I decided to enroll in the Dutch coding school <a href="https://www.wincacademy.nl/">WincAcademy</a> , where I enrolled in their Full-stack developer course.
                        <br/>

                        Apart from the different languages and technologies I've learned at <a href="https://www.wincacademy.nl/">WincAcademy</a>  I'm also studying to get my Google Cloud Associate engineer certificate, as well as the basics of Machine Learning and I have also completed the Cisco It Essentials course.
                        <br/>
                        <br/>

                        I truly believe that self-improvement of oneself and the world around us is why we are here. To be better today than yesterday, to do better. I always try to be proactive, I believe that time is one of life's most precious gifts so I really don't like just doing nothing.
                    </p>

                </div>
            </div>
            
        </div>
    );
}

export default About;