const express = require('express');
const app = express();
app.use(express.json());

let users = [];
let book_reviews = [];
let movie_reviews = [];
let music_reviews = [];
let friends = [];

app.post('/register', (req, res) => {
    const {username, email} = req.body;
    const newUser = {username, email};
    users.push(newUser);
    res.send("account created!!")
});



app.post('/login', (req, res) => {
    const { email } = req.body;
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(400).send("no user found")
    }
    res.send("login successful")
});


app.post('/book_review', (req, res) => {
    const { email, title, author, review, stars } = req.body;
    const breview = { email, title, author, review, stars };
    book_reviews.push(breview);
    res.send("book review added")   
});


app.post('/movie_review', (req, res) => {
    const { email, title, review, stars } = req.body;
    const mreview = { email, title, review, stars };
    movie_reviews.push(mreview);
    res.send("movie review added")
});


app.post('/music_review', (req, res) => {
    const { email, title, artist, stars } = req.body;
    const mureview = { email, title, artist, stars };
    music_reviews.push(mureview);
    res.send("music review added")
});



app.post('/add_friend', (req, res) => {
    const {email, fname} = req.body;
    const friend = {email, fname};
    friends.push(friend);
    res.send("new friend added")
});


const port = 8080;
app.listen(port, () => {
    console.log('server running on port ${port}');
});