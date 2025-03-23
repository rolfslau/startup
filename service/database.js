const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('simon');
const userCollection = db.collection('user');
const bookCollection = db.collection('books');
const movieCollection = db.collection('movies');
const musicCollection = db.collection('music');
const friendCollection = db.collection('friends');

(async function testConnection() {
    try {
      await db.command({ ping: 1 });
      console.log(`Connect to database`);
    } catch (ex) {
      console.log(`Unable to connect to database with ${url} because ${ex.message}`);
      process.exit(1);
    }
  })();


function getUser(username) {
    return userCollection.findOne({ username: username });
  }

async function addUser(user) {
    await userCollection.insertOne(user);
}

async function addFriend(user, friend) {
    await userCollection.updateOne({}) //HELP WITH THIS PART
}

async function addBook(user, book) {
    await userCollection.updateOne(
        { username: user.username }, 
        {$push: {
        books: {
        title: book.title,
        author: book.author,
        review: book.review,
        stars: book.stars,
    }
}});} //HELP WITH THIS PART

async function addMovie(user, movie) {
    await userCollection.updateOne(
        { username: user.username},
    {$push: {
        movies: {
            title: movie.title,
            review: movie.review,
            stars: movie.stars
        }
    }}); //HELP WITH THIS PART
}

async function addMusic(user, music) {
    await userCollection.updateOne({}) //HELP WITH THIS PART
}

function getBooks(user) {

}

function getMovies(user) {}

function getMusic(user) {}

module.exports = {
    getUser,
    addUser,
    addFriend,
    addBook,
    addMovie,
    addMusic,
    getBooks,
    getMovies,
    getMusic
  };