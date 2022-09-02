import React from "react";
import NavBar from "./NavBar";
import Contact from "./Contact";

function Projects(){
  return(
    // <center>
    <div className="projects">
      <center>
        <div className="projectList">
        <h2>Projects</h2>
        <div className="projectDetailsDiv">
        <div className="row">
          <div className="d2">
            <img src="plane-animated.png"></img>
          </div>
          <div className="projectInfo">
            <div className="projectTitle s1 textleft">
              <h3>Flight Fare Prediction</h3>
          </div>
          <div className="projectDetails s1 textleft">
            <ul>
                <li>
                  This game is built with Python3 and implemented in console level.              
                </li>
                <li>
                  The algorithm used to predict is Random Forest and it’s accuracy level is 80%.             
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="projectInfo">
            <div className="projectTitle s1 textRight">
              <h3>Chat Application</h3>
            </div>
            <div className="projectDetails s1 textleft">
              <ul>
                <li>
                  The chat application was developed using Python and sockets used for transferring messages.
                </li>
                <li>
                  It is written to create a room for chatting connected within the same network.
                </li>
              </ul>
            </div>
          </div>
          <div className="d2">
            <img src="online-chatting.png"></img>
          </div>
        </div>
        <div className="row">
          <div className="d2">
            <img src="tictactoe.jpg"></img>
          </div>
          <div className="projectInfo">
            <div className="projectTitle s1 textleft">
              <h3>Tic Tac Toe with AI</h3>
            </div>
            <div className="projectDetails s1 textleft">
            <ul>
                <li>
                  This game is built with Python3 and implemented in console level.              
                </li>
                <li>
                  The game is developed with Minimax Algorithm which is used for problem solving.              
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
      </center>
    </div> 
  );
    
  }
  
  export default Projects;