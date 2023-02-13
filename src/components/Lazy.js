import React  from "react";
import NavBar from './NavBar/NavBar';
import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Services from "./Services/Services"
import Skills from "./Skills/Skills";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from "./Footer/Footer";



function Lazy() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/services" element={<Services/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default Lazy;