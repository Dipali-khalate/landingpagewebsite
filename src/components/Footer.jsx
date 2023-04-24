import React from 'react'
import "./css/footer.css"
import { FaMobile } from 'react-icons/fa'
import { TfiEmail, TfiYoutube } from 'react-icons/tfi'
import { ImFacebook, ImLinkedin2 } from 'react-icons/im'
import { IoLogoGoogleplus, IoLogoVk } from 'react-icons/io'

function Footer() {
    return (
        <div className='footer'>
            <div className='getintouch'>
                <h3>Get In Touch</h3>
                <span>
                    <TfiEmail />
                    <div>
                        piyush.dwivedy@gmail.com
                    </div>
                </span>
                <span>
                    <FaMobile />
                    <div>
                        +1234567890
                        <br />
                        +1234567890
                    </div>
                </span>
                <span>
                    <ul className='social-links'>
                        <li><ImFacebook /></li>
                        <li><IoLogoGoogleplus /></li>
                        <li><IoLogoVk /></li>
                        <li><TfiYoutube /></li>
                        <li><ImLinkedin2 /></li>
                    </ul>
                </span>
            </div>

            <div className='quicklinks'>
                <h3>Quick Links</h3>
                <ul>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                    <li>Faq</li>
                    <li>Insurance</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className='ourservices'>
                <h3>Our Services</h3>
                <ul>
                    <li>Work Injuries</li>
                    <li>Sport Injuries</li>
                    <li>Cold Laser Therapy</li>
                    <li>Massage Therapy</li>
                    <li>Physiotherapy</li>
                    <li>Chiropratic Therapy</li>
                </ul>
            </div>

            <div className='enquiry'>
                <h3>Enquiry Form</h3>
                <form action="">
                    <input type="text" placeholder='Name' />
                    <input type="tel" placeholder='Phone' />

                    <textarea name="" id="" placeholder='Message' cols="30" rows="10"></textarea>

                </form>
            </div>


        </div>
    )
}

export default Footer
