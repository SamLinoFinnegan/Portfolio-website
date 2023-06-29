import {React, useEffect, useRef, useState} from "react";
import Project from "./../Project/Project";
import Style from './Projects.module.css';
import movie from './../../img/MovieList.png';
import muscle from './../../img/MuscleCars.jpg';
import play from './../../img/PlayList.jpg';
import dash from './../../img/StudentDashBoard.jpg';
import larissaPortfolio from './../../img/larissa-portfolio.png';
import brainybin from './../../img/brainybin.jpg';
import api from './../../img/Api.jpg';
import SuperPy from './../../img/SuperPy.png';
import Rent_bot from './../../img/rent_bot.png';
import Orm from './../../img/Orm.png';
import side_project from "./../../img/Side_project.jpg";
import git_actions from "./../../img/git-actions.png"
import {motion} from 'framer-motion';


const Projects = () => {
   
    const [width, setWidth] = useState(0)
    const container =useRef()
    useEffect(()=>{
        setWidth(container.current.scrollWidth - container.current.offsetWidth)
    },[])
    
    const imbd_obj = {
        img: movie,
        alt: "IMBD",
        href: 'https://angry-wing-f800c4.netlify.app',
        text: "Movie streaming website with Vanila JavaScript"

    }
    const muscle_obj = {
        img: muscle,
        alt:"Muscle cars",
        href: 'https://friendly-banach-520c42.netlify.app',
        text: "This was my first Website using just HTML and css"
    }
    const play_obj = {
        img: play,
        alt:"Play List",
        href: 'https://hopeful-swirles-5b4d2f.netlify.app',
        text: "React playlist UI using Redux"
    }
    
    
    const dashboard_obj = {
        img: dash,
        alt: "Student DashBoard",
        href: 'https://competent-kowalevski-f9e3cb.netlify.app',
        text: "Student Dashboard, with student data as input using React.js"
    }
    
    const larri_port_obj = {
        img: larissaPortfolio,
        alt: "Larissa Arnold", 
        href: 'http://larissaarnold.com',
        text: "Professional UI/UX designer Portfolio website"
    }
    const api_obj = {
        img: api,
        alt:"GOF Api",
        href: 'https://gifted-swanson-6454ad.netlify.app',
        text: "Fetching async data from an API with JavaScript"
    }
    
    const projects_obj = [imbd_obj,muscle_obj,play_obj,dashboard_obj,larri_port_obj,api_obj]
    let the_projects = projects_obj.map(item => {
        return <Project img={item.img} alt={item.alt} href={item.href} text={item.text} />
    })


    return (
        <div className={Style.projects} id="projects">
            <div className={Style.mainText}>
                <h1>These are some of the projects ive done</h1>
                <div>
                    <h2>Front-End projects  <span>  (All these projects have been made using HTML, CSS and Javascript)</span></h2>
                </div>
            </div>
            <motion.div ref={container} className={Style.container}>
                <motion.div drag="x" dragConstraints={{right:0, left:-width}} className={Style.inner_container}>

                {the_projects}
                
                </motion.div>
            </motion.div>
            <div className={Style.backend_container}>
                <div className={Style.back_end_sorry_text}>
                    <div>
                        <h2>Back-End projects</h2>
                    </div>
                    <h3>These are some of my favorite Back-end projects</h3>
                </div>
                <div className={Style.backend_images_container}>
                    <div className={Style.backend_images}>
                            <a href={SuperPy}>
                                <img className={Style.backend_items} src={SuperPy} alt="SuperPy - Python App"></img>
                            </a>
                            <p className={Style.text}><a href='https://github.com/SamLinoFinnegan/Back-end.git'>SuperPy - Supermarket administration CLI app, with optional GUI</a></p>
                    </div>
                    <div className={Style.backend_images}>
                        <a href={Orm}>
                            <img className={Style.backend_items} src={Orm} alt="Orm database"></img>
                        </a>
                        <p className={Style.text}><a href={'https://github.com/SamLinoFinnegan/Betsy-webshop.git'}>A ORM modeling program in Python to Read/Write/Query SQL database, with a Flask front-end interface</a></p>
                    </div>
                    <div className={Style.backend_images}>
                        <a href={side_project}>
                            <img className={Style.backend_items} src={side_project} alt="CRUD"></img>
                        </a>
                        <p className={Style.text}>New project, CRUD application with a React front-end, and a Python back-end, wrapped in a Docker container with a Redis cache </p>
                    </div>
                    <div className={Style.backend_images}>
                        <a href={git_actions}>
                            <img className={Style.backend_items} src={git_actions} alt="git-actions"></img>
                        </a>
                        <p className={Style.text}><a href={'https://github.com/SamLinoFinnegan/My-Proxy.git'}>CI / CD pipeline with git-actions to automaticaly deploy to server on push</a></p>

                    </div>
                    <div className={Style.backend_images}>
                        <a href={Rent_bot}>
                            <img className={Style.backend_items} src={Rent_bot} alt="Rent Bot"></img>
                        </a>
                        <p className={Style.text}><a href='https://github.com/SamLinoFinnegan/Rent_bot.git'>This project is a script that uses Selenium to search a rental site and automatically send requests for ads that meet the required parameters.</a></p>
                    </div>
                    
                </div>
                <div className={Style.back_end_sorry_text}>
                    <div>
                        <h2>Real World applications</h2>
                    </div>
                    <h3>These are some of the projects that i've built for clients and are currently in use</h3>
                </div>
            </div>
            <div className={Style.realworld_images_container}>
                <div className={Style.backend_images}>
                        <a href={brainybin}>
                            <img className={Style.backend_items} src={brainybin} alt="Brainy Bin"></img>
                        </a>
                        <h2 className={Style.text}><a href='http://brainybin.com'>Brainybin </a></h2>
                        <p>This project uses Flask and Sqlite as an office tool to assist employees in correctly identifying the appropriate bins for disposing of their trash.</p>
                        <p>We are currently working on a mobile version that will use ML in order to identify the item through computer vision.</p>
                    </div>

            </div>
        </div>
    );
}

export default Projects;