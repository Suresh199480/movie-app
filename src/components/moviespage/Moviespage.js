import React, { useState } from 'react'

import { Movies } from '../../Data';

const Moviespage = () => {
    const [search, setSearch] = useState("")
    return ( <
        >
        <
        div className = 'movies-section' >
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
        div className = 'movie-card-section' >
        <
        div className = 'container movie-card-container' > {
            Movies.filter(movie => movie.title.toLowerCase().includes(search)).map((movie) => ( <
                a href = { movie.path } >
                <
                div className = 'movie-card'
                key = { movie.id } >
                <
                img src = { movie.img }
                alt = { movie.title }
                /> <
                div className = 'movie-card-title' > { movie.title } < /div> <
                /div> <
                /a>
            ))
        } <
        /div> <
        /div> <
        /div> <
        />
    );
}

export default Moviespage