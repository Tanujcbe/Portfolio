import React from "react";
import NavBar from "./NavBar";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import Experience from "./Experience";

{/* C++ JAVA PYTHON NODEJS REACT*/}
{/* HANDLEBARS HTML CSS JAVASCRIPT*/}

function Skills(){
    return(
      <div className="skills">
        <center><h3 className="headingSkills">Skills</h3></center>
        <center>
          <div className="skillBox">
            <div>
              <center><img className="skillImg" src="java.png"/></center>
              <h3>Java</h3>
            </div>
          </div>
          <div className="skillBox">
            <div>
            <center><img className="skillImg" src="python.png"/></center>
              <h3>Python</h3>
            </div>
          </div>
          <div className="skillBox">
            <div>
              <center><img className="skillImg" src="js.png"/></center>
              <h3>JavaScript</h3>
            </div>
          </div>
          <div className="skillBox">
            <div>
              <center><img className="skillImg" src="cpp.png"/></center>
              <h3>C++</h3>
            </div>
          </div>
          <div className="skillBox">
            <div>
              <center><img className="skillImg" src="react.png"/></center>
              <h3>ReactJs</h3>
            </div>
          </div>
          <div className="skillBox">
            <div>
              <center><img className="skillImg" src="node.png"/></center>
              <h3>NodeJs</h3>
            </div>
          </div>
          <div className="skillBox">
            <div>
              <center><img className="skillImg" src="mysql.png"/></center>
              <h3>MySQL</h3>
            </div>
          </div>
          <div className="skillBox">
            <div>
              <center><img className="skillImg" src="mongo.png"/></center>
              <h3>MongoDB</h3>
            </div>
          </div>
          <div className="skillBox">
            <div>
              <center><img className="skillImg" src="html.png"/></center>
              <h3>HTML</h3>
            </div>
          </div>
          <div className="skillBox">
            <div>
              <center><img className="skillImg" src="css.png"/></center>
              <h3>CSS</h3>
            </div>
          </div>
        </center>
      </div>
    );
  }
  
  export default Skills;