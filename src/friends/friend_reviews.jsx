import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function FriendReviews() {
    function savebookreview() {
        let friendReviews = JSON.parse(localStorage.getItem('friendreviews'));
        if (!friendReviews) {
            friendReviews = [];
        }
        let currReview = {
            friend: "John",
            title: "way of kings",
            author: "brandon sanderson",
            review: "a good book",
            stars: "4",
        }
        friendReviews.push(currReview);
        localStorage.setItem('friendreviews', JSON.stringify(friendReviews));
    }

    function savemoviereview() {
        let friendReviews = JSON.parse(localStorage.getItem('friendreviews'));
        if (!friendReviews) {
            friendReviews = [];
        }
        let currReview = {
            friend: "Jane",
            title: "Paycheck",
            author: "no author",
            review: "a good movie",
            stars: "5",
        }
        friendReviews.push(currReview);
        localStorage.setItem('friendreviews', JSON.stringify(friendReviews));
    }

    function savemusicreview() {
        let friendReviews = JSON.parse(localStorage.getItem('friendreviews'));
        if (!friendReviews) {
            friendReviews = [];
        }
        let currReview = {
            friend: "James",
            title: "you're on your own kid",
            author: "taylor swift",
            stars: "5",
        }
        friendReviews.push(currReview);
        localStorage.setItem('friendreviews', JSON.stringify(friendReviews));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            savebookreview();
            console.log("book review added")
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            savemusicreview();
            console.log("music review added")
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            savemoviereview();
            console.log("movie review added")
        }, 45000);
        return () => clearInterval(interval);
    }, []);
}
