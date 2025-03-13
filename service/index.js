const express = require('express');
const app = express();
app.use(express.json());

let users = [];
let book_reviews = [];
let movie_reviews = [];
let music_reviews = [];
let friends = [];


app.post('/register', (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).send("username and password required")
    }
    if (users.find(user => user.username === username)) {
        return res.status(400).send("account already exists")
    }
    const newUser = {username, password};
    users.push(newUser);
    res.send("account created!!")
});



app.post('/login', (req, res) => {
    const { username } = req.body;
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).send("no user found")
    }
    if (user.password != password) {
        return res.status(400).send("wrong password")
    }
    res.send("login successful")
});


app.post('/book_review', (req, res) => {
    const { username, title, author, review, stars } = req.body;
    if( !title || !author || !review || !stars) {
        return res.status(400).send('must fill all fields')
    }
    const breview = { username, title, author, review, stars };
    book_reviews.push(breview);
    res.send("book review added")   
});


app.post('/movie_review', (req, res) => {
    const { username, title, review, stars } = req.body;
    if( !title || !review || !stars) {
        return res.status(400).send('must fill all fields')
    }
    const mreview = { username, title, review, stars };
    movie_reviews.push(mreview);
    res.send("movie review added")
});


app.post('/music_review', (req, res) => {
    const { username, title, artist, stars } = req.body;
    if( !title || !artist || !stars) {
        return res.status(400).send('must fill all fields')
    }
    const mureview = { username, title, artist, stars };
    music_reviews.push(mureview);
    res.send("music review added")
});


app.post('/add_friend', (req, res) => {
    const {username, fname} = req.body;
    const friend = {username, fname};
    friends.push(friend);
    res.send("new friend added")
});


const port = 8080;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});