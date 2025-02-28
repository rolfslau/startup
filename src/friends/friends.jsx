import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function Friends() {

  const [friendreviews, setFriendReviews] = React.useState([]);

    useEffect(() => {
      const savedReviews = localStorage.getItem('friendreviews');
      if (savedReviews) {
        setReviews(JSON.parse(savedReviews));
      }
    }, []);

  return (
    <main>

    <hr/>
    <h3>Latest Reviews</h3>


    {friendreviews.length === 0 ? (
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
    
        {/* Jacob Hall

        <h4 >Pride and Prejudice</h4>
        <h6 >Jane Austen</h6>
        <h5>⭐⭐⭐⭐⭐⭐</h5>
        <p>Jane Austen has a way with words</p>

        <hr/>

        Tyler Bartschi
        <h4 >Eragon</h4>
        <h6 >Chr/istopher Paolini</h6>
        <h5>⭐⭐⭐⭐⭐</h5>
        <p>it had dragons and it was cool</p>

        <hr/>

        Tyler Bartschi
        <h4 >Crime and Punishment</h4>
        <h6 >Fyodor Dostoevsky</h6>
        <h5>⭐</h5>
        <p>this was a commentary on the nature of human guilt and it was really boring and it also caused me anxiety</p>

        <hr/>

        Elena Evans
        <h4 >A Study in Drowning</h4>
        <h6 >Ava Ried</h6>
        <h5>⭐⭐</h5>
        <p>It was weird and the plot was confusing, and the characters made stupid choices</p> */}


    </main>

  );
}