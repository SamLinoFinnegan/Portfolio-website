import React , { useState, lazy, Suspense } from "react";
import Style from './Services.module.css';
import webdesign from './../../img/Webdesign.png'
import camera from './../../img/camera.jpg'
import classes from './../../img/class.jpg'
import male_avatar from './../../img/my_avatar.png'
import val_avatar from './../../img/val_avatar.jpg'
import larissa_avatar from './../../img/larissa.png'
import { Link } from 'react-router-dom'

const Form = lazy(() => import('./../Forms/Form'));

const Services = () =>{
  let [toggle, togleService] = useState(false)
  let [service, changeService] = useState()
  let services = toggle ? Style.displayServicesVisible : Style.nothing
  let content = toggle ? (
    <Suspense fallback={<div>Loading...</div>}>
      <Form name={service} />
    </Suspense>
  ) : null

  const handleScroll = (con) => {
    const element = document.getElementById("services")
    return con ? element.scrollIntoView({behavior:"smooth"}) : null
  }
  const handleClick = (event) =>{
    let answer = event.currentTarget.id
    changeService(answer)
    handleScroll(true)
    togleService(current => !current) 
  }

    return(
        <div className={Style.services}>
            <div className={Style.serviceHeader}>
                <h1>Services I can help you with</h1>
            </div>
            <div className={Style.container}>
                <div id="Free-lance webdesign" onClick={handleClick} className={Style.box}>
                    <div className={Style.box_img}>
                        <img src={webdesign} alt="webdesign"></img>
                    </div>
                    <div className={Style.box_text}>
                        <h2>Free-lance Webdesign</h2>
                        <p>If you are looking for a website, or would like to renew, change or improve the user experience of your website, i would love to hear about it and help you out</p>
                    </div>
                </div>
                <div id="Coding tutorial" onClick={handleClick} className={Style.box}>
                    <div className={Style.box_img}>
                    <img src={classes} alt="coding classes"></img>
                    </div>
                    <div className={Style.box_text}>
                        <h2>Beginner level Programming tutoring</h2>
                        <p>If you are a beginner or have interest in getting started with the fundamentals of programming, i would love to help you get started</p>
                    </div>
                </div>
                <div id="Photography" onClick={handleClick} className={Style.box}>
                    <div className={Style.box_img}>
                    <img src={camera} alt="photography camera"></img>
                    </div>
                    <div className={Style.box_text}>
                        <h2>Photography</h2>
                        <p>If you have a special event coming up, or need some great pictures for your portfolio, we've got you coverd</p>
                    </div>
                </div>
            </div>
            <div id="services" className={Style.displayServiceContainer}>
                <div className={services}>
                    {content}
                </div>
            </div>
            <div className={Style.serviceHeader}>
                <h1>The Team</h1>
            </div>
            <div className={Style.workWithContainer}>
                <div className={Style.box_prof}>
                        <div className={Style.box_prof_img_container}>
                            <div className={Style.box_prof_img}>
                                <img src={larissa_avatar} alt="Larissa Arnold"></img>
                            </div>
                        </div>
                        <div className={Style.box_prof_name}>
                            <h2>Larissa Arnold</h2>
                        </div>
                        <div className={Style.box_text}>
                            
                            <h3>UX/UI Designer</h3>
                            <p>Design has always been present in my life in a very intuitive way. Then I discovered how UX design matters and its importance in retaining attention</p> 
                            <p><a href="https://www.behance.net/larissaarnold">Check out my projects</a></p>
                        </div>
                            
                    </div>

                    <div className={Style.box_prof}>
                        <div className={Style.box_prof_img_container}>
                            <div className={Style.box_prof_img}>
                                <img src={val_avatar} alt="Valorie"></img>
                            </div>
                        </div>
                        <div className={Style.box_prof_name}>
                            <h2>Valerie Ni Raigne</h2>
                        </div>
                        <div className={Style.box_text}>
                            <h3>Photographer</h3>
                            <p>I Buzz with Mother Nature, life is all about capturing the moments</p>
                            <p><a href="https://instagram.com/photoworks77?igshid=YmMyMTA2M2Y=">Check out my Instagram</a></p>
                        </div>
                        
                    </div>
                    <div className={Style.box_prof}>
                        <div className={Style.box_prof_img_container}>
                            <div className={Style.box_prof_img}>
                                <img src={male_avatar} alt="Samuel Finnegan"></img>
                            </div>
                        </div>
                        <div className={Style.box_prof_name}>
                            <h2>Sam Finnegan</h2>
                        </div>
                        <div className={Style.box_text}>
                        <h3>Programmer</h3>
                        <p>+3 As a Full-stack developer, I love finding problems so i can come up with a solution.</p>
                        <Link to='/about'><p>About Me</p></Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services