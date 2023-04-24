import React from 'react'
import "./css/slider.css"
import slider1 from "./images/slider1.png"
import service1 from "./images/services1.png"
import service2 from "./images/services2.png"
import service3 from "./images/services3.png"
import service4 from "./images/services4.png"

function Slider() {
    return (
        <div className='slider'>
            <img src={slider1} className="background" alt="" />
            <div className="cards">
                <div>
                    <img src={service1} alt="" />
                    <h3>Best Treatment</h3>
                    <p>Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusan-
                        tium doloremque laudantium.
                    </p>
                </div>
                <div>
                    <img src={service2} alt="" />
                    <h3>Emergency Help</h3>
                    <p>Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusan-
                        tium doloremque laudantium.
                    </p>
                </div>
                <div>
                    <img src={service3} alt="" />
                    <h3>Medical Help</h3>
                    <p>Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusan-
                        tium doloremque laudantium.
                    </p>
                </div>
                <div>
                    <img src={service4} alt="" />
                    <h3>Qualified Doctors</h3>
                    <p>Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusan-
                        tium doloremque laudantium.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Slider
