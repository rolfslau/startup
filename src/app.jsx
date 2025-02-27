import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
// import { useNavigate } from 'react-router-dom';

import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Login } from './login/login';
import { Music } from './music/music';
import { Movies } from './movies/movies';
import { Books } from './books/books';
import { Friends } from './friends/friends';
import { Inputbooks } from './books/input_books'

export default function App() {
  return (
    <BrowserRouter>
    < AppContent />
    </BrowserRouter>
  )

  function AppContent() {
  const navigate = useNavigate()
  const [username, setusername] = React.useState("")
  const [selectedOption, setSelectedOption] = React.useState("")
  function handleChange(e) {
    setSelectedOption(e.target.value)
    if (selectedOption == "input_books") {
      navigate('/input_books')
    }
    // if (selectedOption === 'input_books') {
    //   navigate('/input_books')
    // }
  }
  return ( 
  // <BrowserRouter>
  <>
  <div className="body_class">
    <div className='full_page'>
<header>
<nav>
  <div>{username}</div>
        <NavLink className='button' to="/books">books</NavLink>
        <NavLink className='button' to="movies">movies</NavLink>
        <NavLink className='button' to="music">music</NavLink>
        <NavLink className='button' to="friends">friends</NavLink>
        <br/>
        <select id="select" name="varSelect" onChange={handleChange}>
          <option value='select'>select</option>
          <option value="input_books">books</option>
          <option value="input_movies">movies</option>
          <option value="input_music">music</option>

        </select>

        {/* {selectedOption === 'input_books' && (
          navigate('/input_books')
        )} */}
    </nav>
  <h1>Mumoo Review</h1>
  <img src="/cow_noBG.png"></img>
  <hr></hr>
  </header>

  <Routes>
  <Route path='/' element={<Login setusername = {setusername}/>} exact />
  <Route path='/music' element={<Music />} />
  <Route path='/movies' element={<Movies />} />
  <Route path='/books' element={<Books username = {username}/>} />
  <Route path='/friends' element={<Friends />} />
  <Route path='/input_books' element={<Inputbooks />} />
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
</>
// </BrowserRouter>
);
}


function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }}