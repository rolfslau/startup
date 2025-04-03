const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));
const DB = require('./database.js');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const authCookieName = 'token';

// let users = [];
// let book_reviews = [];
// let movie_reviews = [];
// let music_reviews = [];
// let friends = [];

var apiRouter = express.Router();
app.use(`/api`, apiRouter);


apiRouter.post('/register', async (req, res) => {
    const {username, password} = req.body;
    console.log(req.body)
    if (!username || !password) {
        console.log('username and password required')
        return res.status(400).send({status: 400, message: "username and password required"})
    }
    // if (users.find(user => user.username === username)) {
    if  (await DB.getUser(username)) {
        console.log('account already exists')
        return res.status(400).send({status:400, message: "account already exists"})
    }
    let friends = [];
    // const newUser = {username, password, friends};
    const newUser = await createUser(username, password, friends)
    setAuthCookie(res, newUser.token);
    // users.push(newUser);
    // console.log(users)
    return res.status(200).send({status: 200, message: "registration sucessful"})
});


apiRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)
    // const user = users.find(user => user.username === username);
    // const user = await DB.getUserToken('token', req.cookies[authCookieName])
    const user = await DB.getUser(username)
    console.log(user)
    if (user) {
        if (await bcrypt.compare(password, user.password)) {
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            return res.status(200).send({username: user.username});
        }
    }

    return res.status(400).send({status: 400, message: 'unauthorized'})
});

apiRouter.delete('/logout', async (req, res) => {
    const user = await DB.getUserToken(req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(200).send();
})


apiRouter.post('/book_review', (req, res) => {
    const { username, title, author, review, stars } = req.body;
    if( !title || !author || !review || !stars) {
        return res.status(400).send({message: 'must fill all fields'})
    }
    const breview = { username, title, author, review, stars };
    console.log(breview)
    // book_reviews.push(breview);
    DB.addBook(breview)
    // console.log(book_reviews)
    return res.status(200).send({status: 200, message: 'book review added'})   
});


apiRouter.post('/movie_review', (req, res) => {
    console.log(req.body)
    const { username, title, review, stars } = req.body;
    if( !title || !review || !stars) {
        return res.status(400).send({message: 'must fill all fields'})
    }
    const mreview = { username, title, review, stars };
    // movie_reviews.push(mreview);
    DB.addMovie(mreview)
    return res.status(200).send({status: 200, message: 'movie review added'})
});


apiRouter.post('/music_review', (req, res) => {
    const { username, title, artist, stars } = req.body;
    if( !title || !artist || !stars) {
        return res.status(400).send('must fill all fields')
    }
    const mureview = { username, title, artist, stars };
    // music_reviews.push(mureview);
    DB.addMusic(mureview)
    return res.status(200).send({status: 200, message: "music review added"})
});

apiRouter.get('/get_books', async (req, res) => {
    console.log(req)
    username = req.query.username
    user = { username }
    console.log(username)
    // res.send(book_reviews)
    book_reviews = await DB.getBooks(username)
    return res.send(book_reviews)
});

apiRouter.get('/get_movies', async (req, res) => {
    // res.send(movie_reviews)
    username = req.query.username
    user = { username }
    movie_reviews = await DB.getMovies(user)
    return res.send(movie_reviews)
});


apiRouter.get('/get_music', async (req, res) => {
    // res.send(music_reviews)
    username = req.query.username
    user = { username }
    music_reviews = await DB.getMusic(user)
    return res.send(music_reviews)
});

apiRouter.post('/add_friend', (req, res) => {
    const {username, friendname} = req.body;
    const friend = {friendname};
    // friends.push(friend);
    DB.addFriend(username, friend)
    res.status(200).send({status: 200, message: 'new friend added'})
});


async function createUser(username, password, friends) {
    const passwordHash = await bcrypt.hash(password, await bcrypt.genSalt(10));
    console.log(await bcrypt.compare(password, passwordHash))
  
    const user = {
      username: username,
      password: passwordHash,
      friends: friends,
      token: uuid.v4(),
    };
    // users.push(user);
    DB.addUser(user)
  
    return user;
  }


  function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }


  async function findUser(field, value) {
    if (!value) return null;
  
    // return users.find((u) => u[field] === value);
    return DB.getUser((u) => u[field] === value);
  }

const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});