import {React,useState} from "react";
import NavBar from "./NavBar";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
const call = () =>{
    console.log("Hello")
  }
const call2 = () =>{
    console.log("Hello2")
  }
function Experience(){
    const [box1,isActive1] = useState(false);
    const [box2,isActive2] = useState(false);

    let isActivebox1 = box1 ? 'active':'';
    let isActivebox2 = box2 ? 'active':'';

    function handlebox1(){
      isActive1(box1 => !box1);
      console.log(box1);
      if(box1){
        document.getElementById("righttView").setAttribute('style','display:none;');
      }
      else{
        document.getElementById("righttView").setAttribute('style','display:block;');
      }
    }

    function handlebox2(){
      isActive2(box2 => !box2);
      console.log(box2);
      if(box2){
        document.getElementById("leftView").setAttribute('style','display:none;');
      }
      else{
        document.getElementById("leftView").setAttribute('style','display:block;');

      }
    }
    return(
      <div>
        <div className="experienceTitle">
          Experience
        </div>
        <div className="exp">
          <ul>
            <li>
              <div className="b1">
                <h3>Project Trainee</h3>
                <h2>Zoho</h2>
                <p>Working as a Full Stack developer in Zoho Meetings application using Java,PostgresSQL,Nodejs and Handlebars. It is a B2B as well as B2C product which has 500,000+ users. Using Nodejs and Handlebars I have created multiple web pages and and worked with REST API’s using Java,XML JSON, Jquery and JavaScript which helps to access specific user’s data and recordings from the Meeting/Webinar which are created by the user.</p>
              </div>
            </li>
            <li>
              <div className="b1">
                <h3>Technical Content Writer</h3>
                <h2>Freelancer</h2>
                <p>Research, Write and edit technical blogs related to Data Structure and Algorithms, Programming Languages and Machine Learning in Medium platform and have published my article’s with Analytic Vidya and Geeks For Geeks</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )



    // return(
    //   <div className="experience">
    //     <div className="timeline">
    //       <div className="leftView">
    //         <p className="detailedExperience" id="leftView">
    //           {/* HTML entities are strings used to represent many reserved and invisible characters in HTML. These could be ‘<‘ or ‘>’ symbols, currencies (e.g. ‘€’ or ‘£’), and common signs such as quotation marks or, you guessed it, spaces. If you were to use either of the entities directly in the code, the browser would interpret them as HTML and render them accordingly. For example, ‘<‘ or ‘>’ would be likely to be treated as the beginning or end of an HTML tag. */}
    //           Working as a Full Stack developer in Zoho Meetings application using Java,PostgresSQL,Nodejs and Handlebars. It is a B2B as well as B2C product which has 500,000+ users. Using Nodejs and Handlebars I have created web pages and REST API’s using Java,XML JSON and HTTP’s which helps to access specific user’s data and recordings from the Meeting/Webinar which are created by the them .
    //         </p>
    //       </div>
    //       <div className="b2">
    //         <div className="row">
    //           <div className="leftContainer">
    //             <div className={`timelineBox${isActivebox2}`} id="box2" onClick={handlebox2} onLoad={handlebox2} >
    //               <h2>Project Trainee</h2>
    //               <p>Zoho</p>
    //             </div>
    //           </div>
    //           <div className="rightContainer">
    //             {/* <div className="timelineBox box1" id="box1" >
    //              <h2>tw</h2>
    //              <p>ksngdhg</p>
    //             </div> */}
    //          </div>
    //         </div>
    //         <div className="row">
    //           <div className="leftContainer">
    //             {/* <div className={`timelineBox${isActivebox2}`} id="box2" onClick={handlebox2} >
    //               <h2>SDE</h2>
    //               <p>ksngdhg</p>
    //             </div> */}
    //           </div>
    //           <div className="rightContainer">
    //             <div className={`timelineBox${isActivebox1}`} id="box1" onClick={handlebox1} onLoad={handlebox1} >
    //              <h2>Technical Content Writer</h2>
    //              <p>Freelancer</p>
    //             </div>
    //          </div>
    //         </div>
            
    //       </div>
    //       <div className="rightView">
    //         <p className="detailedExperience" id="righttView">
    //         Research, Write and edit technical blogs related to Data Structure and Algorithms, Programming Languages and Machine Learning in Medium platform and have published my article’s with Analytic Vidya and Geeks For Geeks
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
  
  export default Experience;