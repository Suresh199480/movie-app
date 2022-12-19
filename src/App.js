import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Homepage from './components/homepage/Homepage';
import Moviespage from './components/moviespage/Moviespage';
import Tvshows from './components/tvseries/Tvshows';


const App = () => {
    return ( <
        >
        <
        Router >
        <
        Topbar / >
        <
        div className = 'section' >
        <
        Routes >
        <
        Route exact path = '/'
        element = { < Homepage / > }
        /> <
        Route exact path = '/movies'
        element = { < Moviespage / > }
        /> <
        Route exact path = '/series'
        element = { < Tvshows / > }
        /> <
        /Routes> <
        /div> <
        /Router> <
        />
    )
}

export default App


/*import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./app.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';

import Movies from './components/movies/Movies';
import Homesec from './components/homesec/Homesec';

const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <div className='section'>
        <Routes>
          <Route path='/' component={<Homesec/>}/>
          <Route path='/movies' component = {<Movies/>}/>
        </Routes>
        </div>
    </Router>
    </>
  )
}

export default App*/