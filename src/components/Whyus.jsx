import React from 'react'
import female from "./images/female.png"
import "./css/whyus.css"
import {TbMedicalCross} from "react-icons/tb"
import {GrReactjs} from "react-icons/gr"
import {GiMedicines, GiMicroscope} from "react-icons/gi"

function Whyus() {
    return (
        <div className='whyus'>
            <img className='whyus-bg' src={female} alt="" />
            <div className="cards">
                <div>
                    <h2>Why Choose Us?</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperi-
                        am, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
                <div>
                    <h3> <TbMedicalCross className='icon' /> <span>Professional</span></h3>
                    <p>Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusan-
                        tium doloremque laudantium.
                    </p>
                </div>
                <div>
                    <h3> <GiMedicines className='icon' /> <span>Professional</span></h3>
                    <p>Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusan-
                        tium doloremque laudantium.
                    </p>
                </div>
                <div>
                    <h3> <GiMicroscope className='icon' /> <span>Professional</span></h3>
                    <p>Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusan-
                        tium doloremque laudantium.
                    </p>
                </div>
                <div>
                    <h3> <GrReactjs className='icon' /> <span>Professional</span></h3>
                    <p>Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusan-
                        tium doloremque laudantium.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Whyus
