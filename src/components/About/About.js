import React from "react";
import Style from "./About.module.css";
import me from "./../../img/me.jpeg";
import gear from "./../../img/gear.png";

const About = () => {
  return (
    <div className={Style.about}>
      <div className={Style.aboutSamContainer}>
        <div className={Style.samImg}>
          <a href={me} alt="Just me">
            <img src={me} alt="me"></img>
          </a>
        </div>
        <div className={Style.samTextCont}>
          <div className={Style.samTextHeader}>
            <h1>Hi, i'm Sam Finnegan</h1>
            <h3>
              Backend-First Engineer. Python Power-User. Security Enthusiast.
            </h3>
          </div>
          <div className={Style.samText}>
            <p>
              From the moment I built my first PC at age 15, I was hooked — not
              just on how things worked, but on how to make them work better.
            </p>
            <p>
              What started with games and poking around web consoles grew into a
              full-blown obsession with software engineering, security, and
              solving hard problems with code.
            </p>
            <p>
              Now, with 3+ years of experience, I specialize in backend systems
              and security-focused architecture.
            </p>
            <p>
              I love dissecting complex systems, mapping out their
              vulnerabilities, and rebuilding them to be smarter, faster, and
              safer.
            </p>
          </div>
          <div className={Style.samTextUL}>
            <div>
              <img src={gear} alt="gear icon"></img>
              <h3>I design and build:</h3>
            </div>

            <ul>
              <li>
                <p>Secure, modular backends using Python (Flask, Django)</p>
              </li>
              <li>
                <p>Authenticated APIs and encrypted data pipelines</p>
              </li>
              <li>
                <p>Session lifecycle managers and role-based access layers</p>
              </li>
              <li>
                <p>Automated deployments using Docker, CI/CD, and GCP</p>
              </li>
            </ul>
          </div>
          <div className={Style.samText}>
            <p>
              Every project I take on is built with performance,
              maintainability, and auditability in mind — because clean code and
              clear logic always win.
              <br />
              I’ve worked across full-stack systems, but my heart is in the
              backend — threading, request validation, encryption, and
              cloud-native workflows. I’m always pushing to learn more about
              cloud security, protocol hardening, and anything that keeps
              systems safe and fast.
              <br />
              If you’re looking for someone who’ll break a problem into its
              smallest parts, reason it out logically, and rebuild it with care
              — that’s what I do best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
