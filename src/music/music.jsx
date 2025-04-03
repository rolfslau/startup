import React, { useEffect } from 'react';
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

export function Music({ username }) {
  const [reviews, setReviews] = React.useState([]);

    useEffect(() => {
      // const savedReviews = localStorage.getItem('musicreviews');
      const fetchmusic = async () => {
        const response = await fetch(`/api/get_music?username=${username}`);
        const muReviewsData = await response.json();
        setReviews(muReviewsData);
      };
      fetchmusic();
      // fetch('/api/get_music')
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