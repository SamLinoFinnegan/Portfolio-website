import React from "react";
import  './NavBar.css';

import { Link } from 'react-router-dom'
import { FaGithub,FaBars,FaFacebook , FaGoogle, FaTimes } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
 

function NavBar() {
    const [click, setClick] = React.useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
    return (
      <div>
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  exact
                  to="/"
                  activeclassname="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to="/services"
                  activeclassname="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to="/skills"
                  activeclassname="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to="/projects"
                  activeclassname="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to="/about"
                  activeclassname="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <div>{click ? <FaTimes/> : <FaBars />}</div>
            </div>
          </div>
          <div className="social_media_icons">
                   <ul>
                       <li> <a target="blanc" href="https://github.com/SamLinoFinnegan"><FaGithub className="Icon" /></a></li>
                       <li> <a target="blanc" href="https://linkedin.com/in/samuel-finnegan-b11944ab"> <ImLinkedin className="Icon" /></a></li>
                       <li> <a target="blanc" href="https://partner.cloudskillsboost.google/public_profiles/49c8b25a-ae2f-4ffb-885e-fab4c21000af"><FaGoogle className="Icon" /></a></li>
                       <li> <a target="blanc" href="https://www.facebook.com/samuel.lino.3745/"><FaFacebook className="Icon" /></a></li>
                   </ul>
           </div>
        </nav>
      </ div>
    );
  }


export default NavBar;