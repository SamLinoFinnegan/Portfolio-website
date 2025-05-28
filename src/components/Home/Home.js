import React, { useState, useEffect, useMemo } from "react";
import Style from './Home.module.css';
import python_logo from './../../img/python-3d.png';
import react_logo from './../../img/react_logo.png';
import my_logo from './../../img/my_new_logo.png';
import magGlass from './../../img/mag.png';
import cv from './../../doc/Samuel.L.Finnegan.pdf';
import {FiDownload} from "react-icons/fi";
import { Link } from 'react-router-dom';
import Form from './../Forms/Form';
import Typewriter from 'typewriter-effect';

const Home = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
            }, []);

    const intro = useMemo(() => (
           
          <Typewriter onInit={(typewriter)=>typewriter
            .changeDelay(40)
            .typeString("<h2>Hello World, I'm Sam Finnegan</h2>")
            .typeString("<h1><span>A Full-stack developer </span>, with passion for developing and learning <span>Python</span> and <span>React.JS</span></h1>")
            .pauseFor(700)
            .typeString("<h2>Welcome to my Portfolio</h2>")
            .start()}/>
           
        
      ), []);

    return (
        <div className={Style.home}>
            <div className={Style.homeContainer}>
            
            <div className={Style.searchDownloadText}>
                <div className={Style.intro}>
                {!isLoading ? intro : null}
                </div>
                <div className={Style.searchDownload}>
                    <div>
                        <a 
                        className={Style.downloadBtn}
                        href={cv} download="Samuel_L_Finnegan.docx"
                        target="blank"

                        >
                        <FiDownload/>
                        <p>Download CV</p>
                        
                        </a>
                    </div>
                    <div>
                        <Link exact to='/services' className={Style.toSkills}>
                            <img src={magGlass} alt="Magnifying glass"></img>
                            <p>Services</p>
                            
                        </Link>
                    </div>
                
                </div>
            </div>

            <div className={Style.carouselContainer}>
                <div className={Style.carousel}>
                    <img className={Style.pythonImg} src={python_logo} alt="Python logo"></img>
                    <img className={Style.reactImg} src={react_logo} alt="React logo"></img>
                    <img className={Style.myImage} src={my_logo} alt="React logo"></img>
                    
                </div>
                
            </div>
            </div>
            <div className={Style.formSectionContainer}>
                <div className={Style.formHeader}>
                    <h1>Feel Free to <span>Contact Us</span> Via the <span>Contact Form</span></h1>
                </div>
                <div className={Style.formText}>
                    <h3>For webdesign, software development and more.</h3>
                    
                    <h3>Don't like forms? Send us an <a target="blanc" href="mailto: samuel.a.lino.sl@gmail.com" >email</a></h3>
                </div>
                <div className={Style.form}>
                    < Form/>
                </div>
            </div>
        </div>
    )

}

export default Home;
