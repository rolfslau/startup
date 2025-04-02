import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Inputfriend({username}) {
    const navigate = useNavigate()
    const [friend, setfriend] = React.useState('')
    async function savefriend(e) {
        // let movieReviews = JSON.parse(localStorage.getItem('moviereviews'));
        // if (!movieReviews) {
        //     movieReviews = [];
        // }
        // let currReview = {
        //     title: movie,
        //     review: mreview,
        //     stars: mstars,
        // }
        const response = await fetch('/api/add_friend', {
            method: 'POST',
            body: JSON.stringify({friend: friend}),
            headers: {
                'Content-type': 'application/json',
            },
        });
        const jsonResponse = await response.json();
        if (jsonResponse.status == 200) {
            navigate('/friends')
        }
        else {alert("error adding friend")}
    //     movieReviews.push(currReview);
    //     localStorage.setItem('moviereviews', JSON.stringify(movieReviews));
    //     navigate('/movies')
        }
    return (
        <main>
            <label htmlFor="text">friend </label>
        <input type="text" id="text" name="varText" placeholder="username here" onChange={(e)=>setfriend(e.target.value)}/>

  <br/>

  <button onClick={savefriend} >add friend</button>
        </main>
    )}