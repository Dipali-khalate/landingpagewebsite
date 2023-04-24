import React from 'react'
import "./css/ourteam.css"
import { GrGooglePlus } from 'react-icons/gr'
import { IoLogoVk } from 'react-icons/io'
import team1 from "./images/team1.png"
import team2 from "./images/team2.png"
import team3 from "./images/team3.png"
import team4 from "./images/team4.png"
import { ImFacebook } from 'react-icons/im'

function Ourteam() {
    const members = [team1, team2, team3, team4]
    return (
        <>
        <div className='ourteam'>
            <div className="header">
                <h3>Our Team</h3>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan-
                    tium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium.
                </p>
            </div>
            <div className="members">
                {
                    members.map(
                        member =>
                            <div className='member'>
                                <img src={member} alt="" />
                                <h3>Dr Ricky Doe</h3>
                                <p>Assistant Surgeon</p>
                                <div className="social">
                                    <ImFacebook />
                                    <GrGooglePlus />
                                    <IoLogoVk />
                                </div>
                            </div>
                    )}
            </div>
        </div>
            <div className='offer'>
                <p>
                    New Patient Special Offer Complimentary Consultation
                </p>
                <button >READ MORE</button>
            </div>
            </>
    )
}

export default Ourteam
