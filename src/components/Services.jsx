import React from 'react'
import "./css/services.css"
import {FaHandHoldingMedical, FaHelicopter} from "react-icons/fa"
import {BsHeartPulse, BsLungs} from "react-icons/bs"
import sBg from "./images/services-bg.png"
function Services() {
  return (
    <div className='services'>
        <img className='services-bg' src={sBg} alt="" />
        <div className='cards'>
            <div>
                <FaHandHoldingMedical size={80} />
                <h2>1000+</h2>
                <div className="divider"></div>
                <div>Happy Customers</div>
            </div>
            <div>
                <BsHeartPulse size={80} />
                <h2>2017</h2>
                <div className="divider"></div>
                <div>Top Hospitality</div>
            </div>
            <div>
                <FaHelicopter size={80} />
                <h2>1105</h2>
                <div className="divider"></div>
                <div>Innovative Approach</div>
            </div>
            <div>
                <BsLungs size={80} />
                <h2>500+</h2>
                <div className="divider"></div>
                <div>Lung Replacement</div>
            </div>
        </div>
      
    </div>
  )
}

export default Services
