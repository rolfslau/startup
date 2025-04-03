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

export function Movies({ username }) {

  const [reviews, setReviews] = React.useState([]);

    useEffect(() => {
      // const savedReviews = localStorage.getItem('moviereviews');
      fetchMovies = async () => {
        const response = await fetch(`/api/get_movies?username=${username}`);
        const mReviewsData = await response.json();
        setReviews(mReviewsData);
      };
      fetchMovies();
      // fetch('/api/get_movies')
      // .then((response) => response.json())
      // .then((reviews) => {
      //   setReviews(reviews);
      // });
    }, []);

  return (
    <main>

    <h2>{get_quote()}</h2>

    <hr/>

    {reviews.length === 0 ? (
      <p>No reviews yet!</p>
    ) : (
      <div>
        {Array.isArray(reviews) && reviews.map((review, index) => (
          <div key={index}>
            <h2>{review.title}: {review.stars} stars</h2>
            <p>Review: {review.review}</p>
            <hr/>
          </div>
        ))}
      </div>
    )}
    
    {/* <h4>While You Were Sleeping</h4>
    <h5>⭐⭐⭐⭐⭐</h5>
    <p>This is my favorite movie of all time. It is just such a happy little story</p>

    <hr/>

    <h4>Elf</h4>
    <h5>⭐</h5>
    <p>I hate this movie so much. its the worst.</p> */}

    </main>
  );
}