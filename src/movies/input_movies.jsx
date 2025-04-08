import React from 'react';
import { useNavigate } from 'react-router-dom';
import { revEvent, EvNotifier } from '../reviewNotifications';

export function Inputmovies({username}) {
    const navigate = useNavigate()
    const [movie, setmovie] = React.useState('')
    const [mreview, setmreview] = React.useState('')
    const [mstars, setmstars] = React.useState('')
    async function savereview(e) {
        // let movieReviews = JSON.parse(localStorage.getItem('moviereviews'));
        // if (!movieReviews) {
        //     movieReviews = [];
        // }
        // let currReview = {
        //     title: movie,
        //     review: mreview,
        //     stars: mstars,
        // }
        const response = await fetch('/api/movie_review', {
            method: 'POST',
            body: JSON.stringify({username: username, title: movie, review: mreview, stars: mstars}),
            headers: {
                'Content-type': 'application/json',
            },
        });
        const jsonResponse = await response.json();
        if (jsonResponse.status == 200) {
            EvNotifier.broadcastEvent(username, revEvent.movie, {msg: `${username} added a movie review`})
            navigate('/movies')
        }
        else {alert("error adding review")}
    //     movieReviews.push(currReview);
    //     localStorage.setItem('moviereviews', JSON.stringify(movieReviews));
    //     navigate('/movies')
        }
    return (
        <main>
            <label htmlFor="text">Title </label>
        <input type="text" id="text" name="varText" placeholder="your last watch here" onChange={(e)=>setmovie(e.target.value)}/>

<br/>
    
<label htmlFor="textarea">Review</label>
<textarea id="textarea" name="varTextarea" placeholder="what did you think?" onChange={(e)=>setmreview(e.target.value)}></textarea>

<br/>

<label htmlFor="stars">Stars</label>
  <textarea id='stars' placeholder="1-5" onChange={(e)=>setmstars(e.target.value)}></textarea>

  <br/>

  <button onClick={savereview} >add review</button>
        </main>
    )}