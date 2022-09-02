import React from "react";
import './App.css';
import{Link} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

function NavBar(){
    return (
    <div>
        <div className="horizontalNavigBar">
            <nav className="navigBar">
            {/* <h3>Logo</h3> */}
                <ul>
                    <li>
                        <a id="about" href="/about">About</a>
                    </li>
                    <li>
                        <a id="experience" href="/experience">Experience</a>
                    </li>
                    <li>
                        <a id="projects" href="/projects">Projects</a>
                    </li>
                    <li>
                        <a id="skills" href="/skills">Skills</a>
                    </li>
                    <li>
                        <a id="contact" href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
        <Menu>
            <Link onClick={() => this.closeMenu()} to="/about">About</Link>
            <Link onClick={() => this.closeMenu()} to="/experience">Experience</Link>
            <Link onClick={() => this.closeMenu()} to="/projects">Projects</Link>
            <Link onClick={() => this.closeMenu()} to="/skills">Skills</Link>
            <Link onClick={() => this.closeMenu()} to="/contact">Contact</Link>
            {/* //<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
        </Menu>
    </div>
)}

export default NavBar;