import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Style from "./Footer.module.css";




const Footer = () => {
    return (
        <div className={Style.footer}>
            <div className={Style.footerText}>
                <h2>
                    Sam Finnegan
                </h2>
                <p>
                    A Full-stack developer.
                    <br/>
                    A nomad and citizen of planet Earth
                </p>

            </div>
            <div className={Style.footerIcons}>
                <a target="blanc" href="https://github.com/SamLinoFinnegan">
                    
                    <FaGithub className={Style.footerIcon} />
                  
                </a>
                <a target="blanc" href="https://linkedin.com/in/samuel-finnegan-b11944ab">
                    
                    <ImLinkedin className={Style.footerIcon} />
                    
                </a>
                <a target="blanc" href="https://partner.cloudskillsboost.google/public_profiles/49c8b25a-ae2f-4ffb-885e-fab4c21000af">
                    
                    <FaGoogle className={Style.footerIcon} />
                    
                </a>
                <a target="blanc" href="https://www.facebook.com/samuel.lino.3745/">
                    <FaFacebook className={Style.footerIcon} />
                </a>
                <div className={Style.email}>
                   <a target="blanc" href="mailto: samuel.a.lino.sl@gmail.com">samuel.a.lino.sl@gmail.com</a>
                   <br/>
                   <br/>
                   <p>UX/UI Designed by Larissa Arnold</p>
                </div>
            </div>
        </div>
    )
}
export default Footer

