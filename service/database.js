const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const bookCollection = db.collection('books');
const movieCollection = db.collection('movies');
const musicCollection = db.collection('music');

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
    let curr = getUser(user.username)
    curr.friends.push(friend)
    await userCollection.updateOne({username: curr.username}, {friends: curr.friends}) //HELP WITH THIS PART
}

async function addBook(book) {
    await bookCollection.insertOne(book);
} //HELP WITH THIS PART

async function addMovie(movie) {
    await movieCollection.insertOne(movie);
} //HELP WITH THIS PART

async function addMusic(music) {
    await musicCollection.insertOne(music);
} //HELP WITH THIS PART

function getBooks(user) {
    const query = { username: user.username };
    // const options = { sort: {title: 1}};
    const cursor = bookCollection.find(query, {});
    return cursor.toArray();
}

function getMovies(user) {
    const query = { username: user.username };
    // const options = { sort: {title: 1}};
    const cursor = movieCollection.find(query, {});
    return cursor.toArray();
}


function getMusic(user) {
    const query = { username: user.username };
    // const options = { sort: {title: 1}};
    const cursor = musicCollection.find(query, {});
    return cursor.toArray();
}

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