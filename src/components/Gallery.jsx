import React, { useState } from 'react'
import "./css/gallery.css"
import galleryBg from "./images/gallery-bg.png"
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import img3 from "./images/img3.png"
import img4 from "./images/img4.png"
import img5 from "./images/img5.png"
import img6 from "./images/howitwork1.png"
function Gallery() {
    const collection = [img1, img2, img3, img4, img5, img6]
    return (
        <div className='gallery'>
            <img src={galleryBg} alt="" />
            <div className='text-heading'>
                <h3>Gallery</h3>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan-
                    tium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium.
                </p>
            </div>
            <div className="collection">
                {
                    collection.map(img => <img src={img} />)
                }
            </div>
        </div>
    )
}

export default Gallery
