import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';

export function Books(p) {
    const [reviews, setReviews] = React.useState([]);

    useEffect(() => {
      const savedReviews = localStorage.getItem('bookreviews');
      if (savedReviews) {
        setReviews(JSON.parse(savedReviews));
      }
    }, []);
  

  return (
    <main>


     <h2> placeholder
      {/* {fetch('https://movie-quote-api.herokuapp.com/v1/quote?censored')
     .then((response)=> response.json())
     .then((jsonResponse) => {console.log(jsonResponse);})} */}
     </h2>

    <hr/>
    {reviews.length === 0 ? (
      <p>No reviews yet!</p>
    ) : (
      <div>
        {reviews.map((review, index) => (
          <div key={index}>
            <h2>{review.title}: {review.stars} stars</h2>
            <p>Author: {review.author}</p>
            <p>Review: {review.review}</p>
            <hr/>
          </div>
        ))}
      </div>
    )}
{/*
    <h4>The Way of Kings</h4>
    <h6>Brandon Sanderson</h6>
    <h5>⭐⭐⭐⭐</h5>
    <p>I like this book because it is always interesting even when it's slow.</p>

    <hr/>

    <h4>The Lobotomist's Wife</h4>
    <h6>Samantha Greene Woodruff</h6>
    <h5>⭐⭐</h5>
    <p>this book is not written very well</p> */}
    
    </main>
  );
}
