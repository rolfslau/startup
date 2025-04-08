import React from 'react';
import { useNavigate } from 'react-router-dom';
import { revEvent, EvNotifier } from '../reviewNotifications';

export function Inputbooks({username}) {
    const navigate = useNavigate()
    // const [book, setbook, [author, setauthor], [review, setreview], [stars, setstars]] = React.useState
    // const [bookreviews, setbookReviews] = React.useState([])
    const [book, setbook] = React.useState('')
    const [author, setauthor] = React.useState('')
    const [review, setreview] = React.useState('')
    const [stars, setstars] = React.useState('')
    async function savereview(e) {
        // let bookReviews = JSON.parse(localStorage.getItem('bookreviews'));
        // let bookReviews = await fetch('/api/get_books')
        // if (!bookReviews) {
        //     bookReviews = [];
        // }
        // let currReview = {
        //     title: book,
        //     author: author,
        //     review: review,
        //     stars: stars,
        // }
        const response = await fetch('/api/book_review', {
            method: 'POST',
            body: JSON.stringify({username: username, title: book, author: author, review: review, stars: stars}),
            headers: {
                'Content-type': 'application/json',
            },
            });
        const jsonResponse = await response.json();
        if (jsonResponse.status == 200) {
            EvNotifier.broadcastEvent(username, revEvent.book, {msg: `${username} added a book review`})
            navigate('/books')
        }
        else {alert("error adding review")}
        // bookReviews.push(currReview);
        // localStorage.setItem('bookreviews', JSON.stringify(bookReviews));
        // navigate('/books')
        }

    return (
        <main>
        <label htmlFor="text">Title </label>
        <input type="text" id="text" name="varText" placeholder="your last read here" onChange={(e)=>setbook(e.target.value)}/>

<br/>

<label htmlFor="text">Author </label>
<input type="text" id="text" name="varText" onChange={(e)=>setauthor(e.target.value)}/>

<br/>
    
<label htmlFor="textarea">Review</label>
<textarea id="textarea" name="varTextarea" placeholder="what did you think?" onChange={(e)=>setreview(e.target.value)}></textarea>
<br/>

  <label htmlFor="stars">Stars</label>
  <textarea id='stars' placeholder="1-5" onChange={(e)=>setstars(e.target.value)}></textarea>

<br/>

    <button onClick={savereview} >add review</button>

</main>
    )
}