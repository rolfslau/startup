import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Inputbooks() {
    const navigate = useNavigate()
    // const [book, setbook, [author, setauthor], [review, setreview], [stars, setstars]] = React.useState
    // const [bookreviews, setbookReviews] = React.useState([])
    const [book, setbook] = React.useState('')
    const [author, setauthor] = React.useState('')
    const [review, setreview] = React.useState('')
    const [stars, setstars] = React.useState('')
    function savereview(e) {
        let bookReviews = JSON.parse(localStorage.getItem('bookreviews'));
        if (!bookReviews) {
            bookReviews = [];
        }
        let currReview = {
            title: book,
            author: author,
            review: review,
            stars: stars,
        }
        // currReview.push(book);
        // currReview.push(author);
        // currReview.push(review);
        // currReview.push(stars);
        bookReviews.push(currReview);
        localStorage.setItem('bookreviews', JSON.stringify(bookReviews));
        navigate('/books')
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