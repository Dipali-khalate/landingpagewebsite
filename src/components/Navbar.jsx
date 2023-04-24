import React from 'react'
import logo from "./images/logo.png"
import time from "./images/time.png"
import number from "./images/number.png"
import mail from "./images/mail.png"
import "./css/navbar.css"
import {ImFacebook, ImLinkedin2} from "react-icons/im"
import {IoLogoGoogleplus, IoLogoVk} from "react-icons/io"
import {TfiYoutube} from "react-icons/tfi"

function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav-top'>
                <img src={logo} alt="" className='logo' />
                <ul className='info-in-nav'>
                    <li>
                        <img src={time} alt="" />
                        <span>
                            <div>WORK TIME: 09:00 - 17:00</div>
                            <div>Saturday and Sunday Closed</div>
                        </span>
                    </li>
                    <li>
                        <img src={mail} alt="" />
                        <span>
                            <div>MAIL US</div>
                            <div>piyush.dwivedy@gmail.com</div>
                        </span>
                    </li>
                    <li>
                        <img src={number} alt="" />
                        <span>
                            <div>CALL US</div>
                            <div>+123 4567 8900</div>
                        </span>
                    </li>
                </ul>
            </div>

            <div className="divider"></div>
            <div className='nav-bottom'>
                <ul className='navlinks'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Gallery</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                <ul className='social-links'>
                    <li><ImFacebook /></li>
                    <li><IoLogoGoogleplus /></li>
                    <li><IoLogoVk /></li>
                    <li><TfiYoutube /></li>
                    <li><ImLinkedin2 /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
