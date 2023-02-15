import React from "react";
import Style from './Project.module.css';
import {motion} from 'framer-motion'




const Project = (props) =>{
    return (
        <motion.div className={Style.images}>
            <a className={Style.imgParent} href={props.href}>
                <img className={Style.movieList} src={props.img} alt={props.alt}></img>
            </a>
            <a href={props.href}>
                <p className={Style.text}>{props.text}</p>
            </a>
            
        </motion.div>
    )
}

export default Project