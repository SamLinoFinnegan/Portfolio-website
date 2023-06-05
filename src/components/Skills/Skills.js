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
  const [active, setActive] = useState({ backend: false, frontend: false, other: false });
  const [skills, setSkills] = useState();

const handleSkills = (event) => {
    const id = event.currentTarget.id;
    switch (id){
      case "BackEnd":
        setSkills(
          <SkillSection title="Backend" image={mec} skills={backendSkills} />
        )
        
        break;
      case "FrontEnd":
        setSkills(
          <SkillSection title="Backend" image={mec} skills={backendSkills} />
        )
        break;
      case "Other":
      setSkills(
        <SkillSection title="Backend" image={mec} skills={backendSkills} />
      )
      break;
      default:
        setSkills(
          <SkillSection title="Backend" image={mec} skills={backendSkills} />
        )
    }

  }



  const handleClick = (event) => {
    const id = event.currentTarget.id;
    setActive((prevState) => ({ ...prevState, [id.toLowerCase()]: !prevState[id.toLowerCase()] }));
  };

  const SkillSection = ({ title, image, skills }) => (
    <div className={Style.list}>
      <div id={title} className={Style.background} onClick={handleClick}>
        <div className={Style.listImg}>
          <img src={image} alt={title} />
        </div>
        <ul>
          <li className={Style.compSkillTitle}>{title}</li>
          {skills.map((skill, index) => (
            <div key={index} className={active[title.toLowerCase()] ? Style.invisible : Style.footerIcon_container}>
              <li>{skill.name}</li>
              {skill.icon}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );

  const backendSkills = [
    { name: "Python", icon: <SiPython className={Style.footerIcon} /> },
    { name: "Flask", icon: <SiFlask className={Style.footerIcon} /> },
    { name: "SQL", icon: <GrMysql className={Style.footerIcon} /> },
    { name: "NodeJs", icon: <FaNodeJs className={Style.footerIcon} /> },
    { name: "Docker", icon: <FaDocker className={Style.footerIcon} /> },
    { name: "CI / CD", icon: <FaInfinity className={Style.footerIcon} /> },
  ];

  const frontendSkills = [
    { name: "HTML", icon: <AiFillHtml5 className={Style.footerIcon} /> },
    { name: "CSS / SASS", icon: <FaSass className={Style.footerIcon} /> },
    { name: "JavaScript", icon: <SiJavascript className={Style.footerIcon} /> },
    { name: "React", icon: <FaReact className={Style.footerIcon} /> },
    { name: "Redux", icon: <SiRedux className={Style.footerIcon} /> },
    ];
    
    const otherSkills = [
    { name: "Git", icon: <FaGithub className={Style.footerIcon} /> },
    { name: "Jest", icon: <SiJest className={Style.footerIcon} /> },
    { name: "JSON", icon: <VscJson className={Style.footerIcon} /> },
    { name: "Linux", icon: <FaLinux className={Style.footerIcon} /> },
    { name: "Fetch and APIs", icon: <FaPizzaSlice className={Style.footerIcon} />}
    ];
    
    return (
    <div className={Style.skills}>
        <div className={Style.skillText}>
            <h2>I'm a lifelong learner and enjoy learning new stuff! <br/>Below are some programming languages, toolkits, frameworks, and libraries that I've worked with and like. Some I control better than others.</h2>      
        </div>
        <div className={Style.button_container}>
                <div>
                    <button id="BackEnd" onClick={handleSkills}>BackEnd</button>
                </div>
                <div>
                    <button id="FrontEnd" onClick={handleSkills}>FrontEnd</button>
                </div>
                <div>
                    <button id="Other" onClick={handleSkills}>Other</button>
                </div>
            </div>
            <div className={Style.list_container}>
                {skills}
            </div>
        <div className={Style.skillComp}>
            <SkillSection title="Backend" image={mec} skills={backendSkills} />
            <SkillSection title="Frontend" image={frontImg} skills={frontendSkills} />
            <SkillSection title="Other" image={dots} skills={otherSkills} />
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
    };
    export default Skills;