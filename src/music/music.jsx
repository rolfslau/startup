import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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

    <h2>My name is Inigo Montoya, you killed my father, prepare to die - Inigo Montoya</h2>

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