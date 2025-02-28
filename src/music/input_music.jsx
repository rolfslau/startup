import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Inputmusic() {
    const navigate = useNavigate()
    const [music, setmusic] = React.useState('')
    const [artist, setartist] = React.useState('')
    const [mustars, setmustars] = React.useState('')
    function savereview(e) {
        let musicReviews = JSON.parse(localStorage.getItem('musicreviews'));
        if (!musicReviews) {
            musicReviews = [];
        }
        let currReview = {
            title: music,
            artist: artist,
            stars: mustars,
        }
        musicReviews.push(currReview);
        localStorage.setItem('musicreviews', JSON.stringify(musicReviews));
        navigate('/music')
    }
    return (
        <main>
            <label htmlFor="text">Title </label>
        <input type="text" id="text" name="varText" placeholder="your last listen here" onChange={(e)=>setmusic(e.target.value)}/>

<br/>

<label htmlFor="text">Artist </label>
<input type="text" id="text" name="varText" onChange={(e)=>setartist(e.target.value)}/>

<br/>

<label htmlFor="stars">Stars</label>
  <textarea id='stars' placeholder="1-5" onChange={(e)=>setmustars(e.target.value)}></textarea>

<br/>

<button onClick={savereview} >add review</button>

        </main>
    )}