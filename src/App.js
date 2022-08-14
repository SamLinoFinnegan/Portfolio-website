import React from "react";
import NavBar from './components/NavBar/NavBar';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
