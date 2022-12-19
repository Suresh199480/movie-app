import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
    const [click, setClick] = useState(false)
    return ( <
        div className = 'navbar' >
        <
        Link to = '/'
        className = 'logo' >
        <
        img src = 'images/screen-0.jpg'
        alt = '' / >
        <
        /Link> <
        div className = { click ? 'nav-menu active' : 'nav-menu' }
        onClick = {
            () => setClick(false) } >
        <
        li className = 'nav-item' >
        <
        Link to = '/movies'
        className = 'nav-link' > Movies < /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = '/series'
        className = 'nav-link' > TV Shows < /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = '/series'
        className = 'nav-link' > Apps < /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = '/series'
        className = 'nav-link' > Games < /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = '/series'
        className = 'nav-link' > Books < /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = '/series'
        className = 'nav-link' > Children < /Link> <
        /li>

        <
        /div> <
        div className = { click ? 'hamburger toggle' : 'hamburger' }
        onClick = {
            () => setClick(!click) } >
        <
        div className = 'line-1' > < /div> <
        div className = 'line-2' > < /div> <
        div className = 'line-3' > < /div> <
        /div> <
        /div>
    )
}

export default Topbar