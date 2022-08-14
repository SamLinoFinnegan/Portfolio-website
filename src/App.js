import React from "react";
import NavBar from './components/NavBar/NavBar';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/"  component={<Home/>} />
          <Route path="/home" component={<Home/>} />
          <Route path="/about" component={<About/>} />
          <Route path="/skills" component={<Skills/>} />
          <Route path="/projects" component={<Projects/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
