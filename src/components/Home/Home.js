import React from "react";
import Style from './Home.module.css';
import python from './../../img/python-3d.png'
import react_logo from './../../img/react_logo.png'
import magGlass from './../../img/mag.png'
import cv from './../../doc/Sam. L Finnegan Curriculum.pdf';
import {FiDownload} from "react-icons/fi"
import { Link } from 'react-router-dom'
import Form from './../Forms/Form'
import Typewriter from 'typewriter-effect';

const Home = () => {


    return (
        <div className={Style.home}>
            <div className={Style.homeContainer}>
            <div className={Style.searchDownloadText}>
                <div className={Style.intro}>
                    <Typewriter onInit={(typewriter)=>typewriter
                    .changeDelay(40)
                    .typeString("<h2>Hello World, I'm Sam Finnegan</h2>")
                    .typeString("<h1><span>A Full-stack developer </span>, with passion for developing and learning <span>Python</span> and <span>React.JS</span></h1>")
                    .pauseFor(700)
                    .typeString("<h2>Welcome to my Portfolio</h2>")
                    .start()}/>
                        
                </div>
                <div className={Style.searchDownload}>
                <div >
                    <a 
                    className={Style.downloadBtn}
                    href={cv} download="Samuel. L Curriculum .pdf"
                    target="blank"

                    >
                    <FiDownload/>
                    <p>Download CV</p>
                    
                    </a>
                </div>
                <div  >
                    <Link to='/skills' className={Style.toSkills}>
                        <img src={magGlass} alt="Magnifying glass"></img>
                        <p>Explore more</p>
                        
                    </Link>
                </div>
                
                </div>
            </div>

            <div className={Style.pythonContainer}>
                <img className={Style.pythonImg} src={python} alt="Python logo"></img>
                <img className={Style.reactImg} src={react_logo} alt="React logo"></img>
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