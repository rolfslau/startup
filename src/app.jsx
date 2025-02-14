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
  <div className="body_class">
    <div className='full_page'>
<header>
<nav>
        <NavLink className='button' to="books">books</NavLink>
        <NavLink className='button' to="movies">movies</NavLink>
        <NavLink className='button' to="music">music</NavLink>
        <NavLink className='button' to="friends">friends</NavLink>
    </nav>
  <h1>Mumoo Review</h1>
  <img src="/cow_noBG.png"></img>
  <hr></hr>
  </header>

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
  <NavLink className='button' to="/">log out</NavLink>
  <br/>
      <a href="https://github.com/rolfslau/startup">github repo</a>

      <h4>Laurel Rolfs</h4>
  </footer>
  </div>
</div>
</BrowserRouter>
);
}


function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }