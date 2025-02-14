import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Music } from './music/music';
import { Movies } from './movies/movies';
import { Books } from './books/books';
import { Friends } from './friends/friends';

export default function App() {
  return ( 
  <BrowserRouter>
  <div className="body">
<header>
  
</header>


<nav>
        <NavLink className='nav-link' to="books">books</NavLink>
        <NavLink className='nav-link' to="movies">movies</NavLink>
        <NavLink className='nav-link' to="music">music</NavLink>
    </nav>
  <h1>Mumoo Review</h1>
  <img src="/cow_noBG.png"></img>
  <hr></hr>
  
  <Routes>
  <Route path='/' element={<Login />} exact />
  <Route path='/music' element={<Music />} />
  <Route path='/movies' element={<Movies />} />
  <Route path='/books' element={<Books />} />
  <Route path='/friends' element={<Friends />} />
  <Route path='*' element={<NotFound />} />
</Routes>

  <hr></hr>

  <footer>
      <a href="https://github.com/rolfslau/startup">github repo</a>

      <h4>Laurel Rolfs</h4>
  </footer>
</div>
</BrowserRouter>
);
}


function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }