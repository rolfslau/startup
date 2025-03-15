const express = require('express');
const app = express();
app.use(express.json());


let users = [];
let book_reviews = [];
let movie_reviews = [];
let music_reviews = [];
let friends = [];

var apiRouter = express.Router();
app.use(`/api`, apiRouter);


apiRouter.post('/register', (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        console.log('username and password')
        return res.status(400).send("username and password required")
    }
    if (users.find(user => user.username === username)) {
        console.log('account already exists')
        return res.status(400).send("account already exists")
    }
    const newUser = {username, password};
    users.push(newUser);
    return res.status(200).send("account created!!")
});


apiRouter.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).send("no user found")
    }
    if (user.password != password) {
        return res.status(400).send("wrong password")
    }
    return res.status(200).send("login successful")
});


apiRouter.post('/book_review', (req, res) => {
    const { username, title, author, review, stars } = req.body;
    if( !title || !author || !review || !stars) {
        return res.status(400).send('must fill all fields')
    }
    const breview = { username, title, author, review, stars };
    book_reviews.push(breview);
    return res.status(200).send("book review added")   
});

app.get('/get_books', (req, res) => {
    res.send(book_reviews)
});

app.get('/get_movies', (req, res) => {
    res.send(movie_reviews)
});


app.get('/get_music', (req, res) => {
    res.send(music_reviews)
});

apiRouter.post('/movie_review', (req, res) => {
    const { username, title, review, stars } = req.body;
    if( !title || !review || !stars) {
        return res.status(400).send('must fill all fields')
    }
    const mreview = { username, title, review, stars };
    movie_reviews.push(mreview);
    return res.status(200).send("movie review added")
});


apiRouter.post('/music_review', (req, res) => {
    const { username, title, artist, stars } = req.body;
    if( !title || !artist || !stars) {
        return res.status(400).send('must fill all fields')
    }
    const mureview = { username, title, artist, stars };
    music_reviews.push(mureview);
    return res.status(200).send("music review added")
});


apiRouter.post('/add_friend', (req, res) => {
    const {username, fname} = req.body;
    const friend = {username, fname};
    friends.push(friend);
    res.send("new friend added")
});


const port = 3000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});