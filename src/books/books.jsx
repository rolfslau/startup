import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';

export function get_quote() {
  const [quote, setQuote] = React.useState({quote: 'loading...'});
  useEffect(() => {
    fetch('https://quote.cs260.click')
    .then((response) => response.json())
    .then((data) => {
      setQuote(data);
      // setCharacter(data.character);
    })
  }, [])

  return (
    <p>{quote.quote} <br/> {quote.author}</p>
  )
};

async function saved_reviews() {
  const response = await fetch('/api/get_books', {
    method: 'GET',
    body: JSON.stringify({username: usertext, password: passwordtext}),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const jsonResponse = await response.json();
     if (jsonResponse.status == 200) {
      return jsonResponse;
     }
}

export function Books(p) {
    const [reviews, setReviews] = React.useState([]);
    useEffect(() => {
      // const savedReviews = localStorage.getItem('bookreviews');
      savedReviews = saved_reviews();
      if (savedReviews) {
        setReviews(JSON.parse(savedReviews));
      }
    }, []);

    
  

  return (
    <main>


     <h2> 
      {get_quote()}
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
