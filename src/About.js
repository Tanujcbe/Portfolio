import React from "react";
import NavBar from "./NavBar";
import Contact from "./Contact";
import Projects from "./Projects";

function About(){
  // return(
  //   <div className="full flex">
  //     <div className="a2 flex">
  //       <img className="ph" src="Illustration.png"></img>
  //     </div>
  //     <div className="a3 flex">
  //       <span className="hey">Hey ,</span>
  //       <span className="myName">I'm Tanuj</span>
  //       <span className="professionName">Full Stack Developer <span className="companyName">@Zoho</span></span>
  //     </div>

  //   </div>
  // )
  
  return(
    <div className="ab">
      <div className="le">
        {/* <span>hello</span> */}
        <img className="myphoto" src="my_photo.jpeg"></img>
      </div>
      <div className="ri">
        <div className="head xy">
            <span className="hey">Hey ,</span>
            <span className="myName">I'm Tanuj</span>
            <span className="professionName">Full Stack Developer <span className="companyName">@Zoho</span></span>
	          <a class="download2" target="_blank" href="https://drive.google.com/file/d/1YXgkYbyfvI35y3_UpTOf3ITYNpxPcpEU/view?usp=sharing">My Resume</a>
        </div>
      </div>
    </div>
  );
  }
  
  export default About;