import React, { useState } from 'react'
import { Series } from '../../Data'
const Tvshows = () => {
    const [search, setSearch] = useState("")
    return ( <
        >
        <
        div className = 'tv-section' >
        <
        div className = 'container' >
        <
        div className = 'search-container' >
        <
        input type = "search"
        className = 'search'
        placeholder = 'What do you want to watch?'
        onChange = {
            (e) => setSearch(e.target.value) }
        /> <
        i class = "fa fa-search " > < /i> <
        /div> <
        /div> <
        div className = 'tv-card-section' >
        <
        div className = 'container tv-card-container' > {
            Series.filter(tv => tv.title.toLowerCase().includes(search)).map((tv) => ( <
                a href = { tv.path } >
                <
                div className = 'tv-card'
                key = { tv.id } >
                <
                img src = { tv.img }
                alt = { tv.title }
                /> <
                div className = 'tv-card-title' > { tv.title } < /div> <
                /div> <
                /a>
            ))
        } <
        /div> <
        /div> <
        /div> <
        />
    )
}

export default Tvshows