import React, { useState } from "react";
import Style from './Skills.module.css'
import { FaGithub, FaInfinity, FaDocker, FaNodeJs, FaLinux, FaReact, FaSass, FaPizzaSlice } from "react-icons/fa";
import { SiJest, SiFlask, SiPython, SiRedux, SiJavascript} from "react-icons/si"
import { VscJson } from "react-icons/vsc"
import { AiFillHtml5 } from "react-icons/ai"
import { GrMysql } from "react-icons/gr"
import mec from "./../../img/mechanism.png"
import frontImg from "./../../img/front-end.png"
import dots from "./../../img/3dots.png"



const Skills = () => {
    


    let [backIsActive, setBack] = useState(false)
    let [frontIsActive, setFront] = useState(false)
    let [otherIsActive, setOther] = useState(false)
    
    
 
   

    let back = backIsActive ? Style.visible :Style.footerIcon_container
    let front = frontIsActive ? Style.visible :Style.footerIcon_container
    let other = otherIsActive ? Style.visible :Style.footerIcon_container

    let backgroundback = backIsActive ? Style.background :Style.list
    let backgroundfront = frontIsActive ? Style.background :Style.list
    let backgroundother = otherIsActive ? Style.background :Style.list

    

    const handleClick = (event) =>{
       
        let answer = event.currentTarget.id
        
        if (answer === "Backend"){
            
            setBack(current => ! current)
            setFront(false)
            setOther(false)
        }else if (answer === "Frontend"){
            setFront(current => !current)
            setOther(false)
            setBack(false)
        }else if (answer === "Other"){
            setOther(current => !current)
            setFront(false)
            setBack(false)
        }
       
      
        
    }
    
    const backend = <div className={Style.list2}>
    <div id="Backend" className={Style.background2} >
            <div className={Style.listImg}>
                <img src={mec} alt="Gears"></img>
            </div>
            <ul>
                <li className={Style.compSkillTitle}>Back-End</li>
                <div className={Style.invisible}>
                    <li>Python  </li>
                    <SiPython className={Style.footerIcon} />
                </div>
                <div className={Style.invisible}>
                    <li>Flask </li>
                    <SiFlask className={Style.footerIcon} />
                </div>
             <div className={Style.invisible}>
                    <li>SQL </li>
                    <GrMysql className={Style.footerIcon} />
                </div>
                <div className={Style.invisible}>
                    <li>NodeJs </li>
                    <FaNodeJs className={Style.footerIcon} />
                </div>
                <div className={Style.invisible}>
                    <li>Docker </li>
                    <FaDocker className={Style.footerIcon} />
                </div>
                <div className={back}>
                    <li>CI / CD </li>
                    <FaInfinity className={Style.footerIcon} />
                </div>
            </ul>
        </div>
    </div>

    const frontend =<div className={Style.list2}>
    <div id="Frontend" className={Style.background2} >
        <div className={Style.listImg}>
            <img src={frontImg} alt="front-end"></img>
        </div>
        <ul>
            <li className={Style.compSkillTitle}>Front-End</li>
            <div className={Style.invisible}>
                <li>HTML </li>
                <AiFillHtml5 className={Style.footerIcon} />
            </div>
            <div className={Style.invisible}>
                <li>JavaScript Native </li>
                <SiJavascript className={Style.footerIcon} />
            </div>
            <div className={Style.invisible}>
                <li>CSS/sass </li>
                <FaSass className={Style.footerIcon} />
            </div>
            <div className={Style.invisible}>
                <li>ReactJS </li>
                <FaReact className={Style.footerIcon} />
            </div>
            <div className={Style.invisible}>
                <li>Redux </li>
                <SiRedux className={Style.footerIcon} />
            </div>
        </ul>
    </div>
</div>

    const otherSkill = <div className={Style.list2}>
                        <div id="Other" className={Style.background2} >
                            <div className={Style.listImg}>
                                <img src={dots} alt="Other"></img>
                            </div>
                        
                        <ul>
                            <li className={Style.compSkillTitle}>Other Skills</li>
                            <div className={Style.invisible}>
                                <li>Git  </li>
                                <FaGithub className={Style.footerIcon} />
                            </div>
                            <div className={Style.invisible}>
                                <li>Unit testing / Jest  </li>
                                <SiJest className={Style.footerIcon} />
                            </div>
                            <div className={Style.invisible}>
                                <li>Fetch and APIs </li>
                                <FaPizzaSlice className={Style.footerIcon} />
                            </div>
                            <div className={Style.invisible}>
                                <li>Network basics  </li>
                                <VscJson className={Style.footerIcon} />
                            </div>
                            <div className={Style.invisible}>
                                <li>Linux/Bash basics  </li>
                                <FaLinux className={Style.footerIcon} />
                            </div>
                        </ul>
                        </div>

                    </div>


    
    
    let [skill, upDateSkill] = useState(backend)      


    const putSkill = (event) => {
        let answer = event.target.innerText;
        if (answer === "BackEnd") {
            upDateSkill(backend)
        } else if (answer === "FrontEnd") {
            upDateSkill(frontend)
        } else if (answer === "Other") {
            upDateSkill(otherSkill)
        }
    }


    return (
        <div className={Style.skills}>
            <div className={Style.skillText}>
                <h2>I'm a lifelong learner and enjoy learning new stuff! <br/>Below are some programming languages, toolkits, frameworks, and libraries that I've worked with and like. Some I control better than others.</h2>
                        
            </div>
            
            <div className={Style.button_container}>
                <div>
                    <button onClick={putSkill}>BackEnd</button>
                </div>
                <div>
                    <button onClick={putSkill}>FrontEnd</button>
                </div>
                <div>
                    <button onClick={putSkill}>Other</button>
                </div>
            </div>
            <div className={Style.list_container}>
                {skill}
            </div>
            <div className={Style.skillComp}>
                <div>
                <div id="Backend" className={backgroundback} onClick={handleClick}>
                        <div className={Style.listImg}>
                            <img src={mec} alt="Gears"></img>
                        </div>
                        <ul>
                            <li className={Style.compSkillTitle}>Back-End</li>
                            <div className={back}>
                                <li>Python  </li>
                                <SiPython className={Style.footerIcon} />
                            </div>
                            <div className={back}>
                                <li>Flask </li>
                                <SiFlask className={Style.footerIcon} />
                            </div>
                         <div className={back}>
                                <li>SQL </li>
                                <GrMysql className={Style.footerIcon} />
                            </div>
                            <div className={back}>
                                <li>NodeJs </li>
                                <FaNodeJs className={Style.footerIcon} />
                            </div>
                            <div className={back}>
                                <li>Docker </li>
                                <FaDocker className={Style.footerIcon} />
                            </div>
                            <div className={back}>
                                <li>CI / CD </li>
                                <FaInfinity className={Style.footerIcon} />
                            </div>
                        </ul>
                    </div>
                </div>
                <div>
                    <div id="Frontend" className={backgroundfront} onClick={handleClick}>
                        <div className={Style.listImg}>
                            <img src={frontImg} alt="front-end"></img>
                        </div>
                        <ul>
                            <li className={Style.compSkillTitle}>Front-End</li>
                            <div className={front}>
                                <li>HTML </li>
                                <AiFillHtml5 className={Style.footerIcon} />
                            </div>
                            <div className={front}>
                                <li>JavaScript Native </li>
                                <SiJavascript className={Style.footerIcon} />
                            </div>
                            <div className={front}>
                                <li>CSS/sass </li>
                                <FaSass className={Style.footerIcon} />
                            </div>
                            <div className={front}>
                                <li>ReactJS </li>
                                <FaReact className={Style.footerIcon} />
                            </div>
                            <div className={front}>
                                <li>Redux </li>
                                <SiRedux className={Style.footerIcon} />
                            </div>
                        </ul>
                    </div>
                </div>
                <div>
                <div id="Other" className={backgroundother} onClick={handleClick}>
                    <div className={Style.listImg}>
                        <img src={dots} alt="Other"></img>
                    </div>
                        
                        <ul>
                            <li className={Style.compSkillTitle}>Other Skills</li>
                            <div className={other}>
                                <li>Git  </li>
                                <FaGithub className={Style.footerIcon} />
                            </div>
                            <div className={other}>
                                <li>Unit testing / Jest  </li>
                                <SiJest className={Style.footerIcon} />
                            </div>
                            <div className={other}>
                                <li>Fetch and APIs </li>
                                <FaPizzaSlice className={Style.footerIcon} />
                            </div>
                            <div className={other}>
                                <li>Network basics  </li>
                                <VscJson className={Style.footerIcon} />
                            </div>
                            <div className={other}>
                                <li>Linux/Bash basics  </li>
                                <FaLinux className={Style.footerIcon} />
                            </div>
                        </ul>
                    </div>

                </div>

            </div>
            <div className={Style.skillLangHead}>
                <h2>Human Languages</h2>
            </div>
            <div className={Style.skillLanguages}>
                <div className={Style.languageContainer}>
                    <div className={Style.languageItem}>
                        <p>English</p>
                        <p>
                            C2
                            <br/>
                            Native
                        </p>
                    </div>
                    <div className={Style.languageItem}>
                        <p>Portuguese</p>
                        <p>
                        C2
                        <br/>
                        Native
                        </p>
                    </div>
                    <div className={Style.languageItem}>
                        <p>Spanish</p>
                        <p>
                        C1
                        <br/>
                        Fluent
                        </p>  
                    </div>
                    <div className={Style.languageItem}>
                        <p>Dutch</p>
                        <p>
                        B2
                        <br/>
                        Intermediate
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;