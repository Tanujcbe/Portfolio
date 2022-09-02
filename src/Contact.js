import React from "react";
import NavBar from "./NavBar";
import tippy from '@tippy.js/react';
import 'react-tippy/dist/tippy.css';
import { Tooltip,} from 'react-tippy';
import Tippy from "@tippy.js/react";
import PhoneIcon from '@mui/icons-material/Phone';
 


function Contact(){
  // tippy('#logo', {
  //   content: "I'm a Tippy tooltip!",
  // });
  
  return(
    
    <div className="contact">
      <div className="contact-heading">
        <span>Wanna drop a message?</span>
      </div>
      <form className="messageBox" action="https://formspree.io/f/mzbwdbkp" method="POST">
        {/* <label for="email">Enter your email:</label> */}
        <input type="email" name="email" placeholder="Your Email ID" id="email" name="email"/>
        {/* <label for="message">Enter your Message:</label> */}
        <textarea type="text" name="message" placeholder="Enter your message" />
        <button type="submit" class="contact-btn">Send Email</button>
      </form>
      <div className="contactContainer">
        <div className="facebook contactImage">
          <a href="https://www.facebook.com/tanuj.murali.1" target="_blank" >
            <Tippy content={'Facebook'} placement='top-start' arrow={true}>
              <img className="logo" src="facebook.jpg"></img>
            </Tippy>
          </a>
        </div>
        <div className="twitter contactImage">
          <a href="https://twitter.com/Tanujcbe" target="_blank" >
            <Tippy content={'Twitter'} placement='top-start' arrow={true}>
              <img className="logo" src="twitter.png"></img>
            </Tippy>
          </a>
        </div>
        <div className="leetcode contactImage">
          <a href="https://leetcode.com/tanujcbe/" target="_blank" >
            <Tippy content={'Leetcode'} placement='top-start' arrow={true}>
              <img className="logo" src="leetcode.png"></img>
            </Tippy>
          </a>
        </div>
        <div className="linkedin contactImage">
          <a href="https://www.linkedin.com/in/tanuj-m" target="_blank" >
            <Tippy content={'Linkedin'} placement='top-start' arrow={true}>
              <img className="logo" src="linkedin.png"></img>
            </Tippy>
          </a>
        </div>
        <div className="github contactImage">
          <a href="https://github.com/Tanujcbe" target="_blank" >
            <Tippy content={'Github'} placement='top-start' arrow={true}>
              <img className="logo" src="github.png"></img>
            </Tippy>
          </a>
        </div>
        <div className="instagram contactImage">
          <a href="https://www.linkedin.com/in/tanuj-m" target="_blank" >
            <Tippy content={'Instagram'} placement='top-start' arrow={true}>
              <img className="logo" src="instagram.png"></img>
            </Tippy>
          </a>
        </div>
      </div>
      {/* <div className="contactMe">
          <div className="contactNumber">
            <PhoneIcon className="phoneImg"/>
            <span>9715125550</span>
          </div>
          <div className="mailAddress">
            tanujofficial8@gmail.com
          </div>
        </div> */}
    </div>
  );
}

export default Contact;