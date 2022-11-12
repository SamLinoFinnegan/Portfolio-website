import React from "react";
import Style from './Services.module.css';
import construction from './../../img/construction.webp'


const Services = () =>{
    return(
        <div className={Style.services}>
            <div className={Style.container}>
                <img src={construction} alt="page_under_construction"></img>
                <h1>Page under construction</h1>
            </div>
            
        </div>
    )
}

export default Services