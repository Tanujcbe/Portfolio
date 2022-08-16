import React from "react";
import './App.css';
import NavBar from "./NavBar";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App(){
  return(
    <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;