import React from "react";
import Style from './About.module.css';
import me from './../../img/me.jpg';
import larissa from './../../img/larissa.JPG';





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
            <div className={Style.midText}>
                <h2>I work in colaboration for web and app UI/UX design, with: </h2>
            </div>
            <div className={Style.aboutLarissaContainer}>
                
                
                <div className={Style.larissaText}>
                    <h1>Larissa Arnold</h1>
                    <p><span>UX designer</span>, sports nutritionist, self-taught knowledge addict.
                    <br/>
                    <br/>
                        Design has always been present in my life in a very intuitive way.
                        <br/>

                        Since I was a child, I always liked to organize my things in a more practical manner, always picking the right color and clothes based on the mood or purpose, always having a conscious meaning, over time I realized that the excess of decorations, items, and information bothered me.
                        <br/>
                    
                        While in nutrition school, I started using diet and exercise calculator apps, I noticed that a lot of the functionality was difficult to use and understand, and several of my colleagues were also facing the same difficulties using these tools, so I thought: "If these specific functionalities had other names or if I had a clearer way of interacting with them, maybe it would be easier to use, and we wouldn't waste soo much time". At that moment, I wanted to propose a solution, but I didn't know how.
                        <br/>
                        
                        Then I discovered UX design and its importance in retaining attention and facilitating the user experience, turning websites and apps into a comfortable place to be. I enrolled in the Coursera UX design course and try every day to stay updated and pay attention to what users say and get insights to think about improvements
                    </p>

                </div>
                <div className={Style.larissaImg}>
                    <a href={larissa} alt="Larissa">
                        <img src={larissa} alt="Larissa"></img>
                    </a>
                </div>
                
            </div>
        </div>
    );
}

export default About;