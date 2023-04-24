import React from 'react'
import "./css/workprocess.css"
import { AiFillPlayCircle } from "react-icons/ai"
import howitwork1 from "./images/howitwork1.png"
import howitwork2 from "./images/howitwork2.png"

function Workprocess() {
    return (
        <div className='workprocess'>
            <div className="work">
                <div>
                    <h3>How we works</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan-
                        tium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium.
                    </p>
                </div>
                <div className="cards">
                    <div>
                        <img src={howitwork1} alt="" />
                        <h4>Lorem ipsum dolor sit amet,</h4>
                        <span>April 19,2017 | Dr.Jon Doe</span>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan-
                            tium.
                        </p>
                    </div>
                    <div>
                        <img src={howitwork2} alt="" />
                        <h4>Lorem ipsum dolor sit amet,</h4>
                        <span>April 19,2017 | Dr.Jon Doe</span>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan-
                            tium.
                        </p>
                    </div>
                </div>
                <button >READ MORE</button>
            </div>
            <div className="creative">
                <div className='top'>
                    <h3>Our creative</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan-
                        tium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium.
                    </p>
                </div>
                <div className='bottom'>
                    <span>
                        <AiFillPlayCircle className='icon' />
                        <span>Heart Treatment</span>
                    </span>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan-
                        tium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium.
                    </p>
                    <span>
                        <AiFillPlayCircle className='icon' />
                        <span>Heart Treatment</span>
                    </span>
                    <span>
                        <AiFillPlayCircle className='icon' />
                        <span>Heart Treatment</span>
                    </span>
                    <span>
                        <AiFillPlayCircle className='icon' />
                        <span>Heart Treatment</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Workprocess
