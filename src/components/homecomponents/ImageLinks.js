import React from 'react'
import { Images } from '../../Data'
const ImageLinks = () => {
    return ( <
        div className = 'imgurl-section' >
        <
        div className = 'container imgurl-container' > {
            Images.map((img) => ( <
                div className = 'images'
                key = { img.id } >
                <
                a href = { img.url } >
                <
                img src = { img.img }
                alt = { img.title }
                /> <
                /a> <
                div className = 'img-title' > { img.title } < /div> <
                /div> 
            ))
        } <
        /div> <
        div className = 'container d-flex align-items-center justify-content-center flex-column download-btn-sec' >
        <
        h2 > The World 's leading MOVIE and TV SHOW streaming here..</h2> <
        a href = 'https://moviestreams.club/en'
        className = 'mt-4 text-decoration-none download-button' > Watch and Download Free < /a> <
        /div> <
        /div>
    )
}

export default ImageLinks