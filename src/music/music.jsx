import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function get_quote() {
  const [quote, setQuote] = React.useState(null);
  useEffect(() => {
    fetch('https://movie-quote-api.herokuapp.com/v1/quote?censored')
    .then((response) => response.json())
    .then((data) => {
      setQuote(data.quote);
      // setCharacter(data.character);
    })
  }, [])

  return (
    <p>{quote}</p>
  )
};

export function Music() {
  const [reviews, setReviews] = React.useState([]);

    useEffect(() => {
      const savedReviews = localStorage.getItem('musicreviews');
      if (savedReviews) {
        setReviews(JSON.parse(savedReviews));
      }
    }, []);

  return (
    <main>

    <h2>{get_quote()}</h2>

    <hr/>

    {reviews.length === 0 ? (
      <p>No reviews yet!</p>
    ) : (
      <div>
        {reviews.map((review, index) => (
          <div key={index}>
            <h2>{review.title}: {review.artist}</h2>
            <p>Stars: {review.stars}</p>
            <hr/>
          </div>
        ))}
      </div>
    )}
    </main>
  );
}