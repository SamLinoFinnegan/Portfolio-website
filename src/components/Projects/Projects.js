import {React, useEffect, useRef, useState} from "react";
import Project from "./../Project/Project";
import Style from './Projects.module.css';
import movie from './../../img/MovieList.jpg';
import muscle from './../../img/MuscleCars.jpg';
import play from './../../img/PlayList.jpg';
import dash from './../../img/StudentDashBoard.jpg';
import todo from './../../img/TodoList.jpg';
import api from './../../img/Api.jpg';
import SuperPy from './../../img/SuperPy.png';
import Orm from './../../img/Orm.png'
import side_project from "./../../img/side_project"
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
        text: "IMDB made with Vanila JavaScript"

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
        text: "One page aplication Dashboard, with student database"
    }
    
    const todo_obj = {
        img: todo,
        alt: "Todo List", 
        href: 'https://happy-villani-0e3ea1.netlify.app',
        text: "JavaScript TODO list doing HTTP requests to local server"
    }
    const api_obj = {
        img: api,
        alt:"GOF Api",
        href: 'https://gifted-swanson-6454ad.netlify.app',
        text: "Fetching async data from an API"
    }
    
    const projects_obj = [imbd_obj,muscle_obj,play_obj,dashboard_obj,todo_obj,api_obj]
    let the_projects = projects_obj.map(item => {
        return <Project img={item.img} alt={item.alt} href={item.href} text={item.text} />
    })


    return (
        <div className={Style.projects} id="projects">
            <div className={Style.mainText}>
                <h1>These are some of the projects ive done</h1>
                <div>
                    <h2>Front-End projects</h2>
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
                    <h3>At the moment I am still completing my Back-end course, so i still havent had that many Back-end projects</h3>
                </div>
                <div className={Style.backend_images_container}>
                    <div className={Style.backend_images}>
                            <a href='https://github.com/SamLinoFinnegan/Back-end.git'>
                                <img className={Style.backend_items} src={SuperPy} alt="SuperPy - Python App"></img>
                                <p className={Style.text}>SuperPy - Supermarket administration CLI app, with optional GUI</p>
                            </a>
                    </div>
                    <div className={Style.backend_images}>
                        <a href={Orm}>
                            <img className={Style.backend_items} src={Orm} alt="Orm database"></img>
                            <p className={Style.text}>A ORM modeling program in Python to Read/Write/Query SQL database, with a Flask front-end interface  </p>
                        </a>
                    </div>
                    <div className={Style.backend_images}>
                        <a href={side_project}>
                            <img className={Style.backend_items} src={side_project} alt="CRUD"></img>
                            <p className={Style.text}>New project, CRUD application with a React front-end, and a Python back-end, wrapped in a Docker container with a Redis cash </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;