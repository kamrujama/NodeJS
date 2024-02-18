const express = require("express");
const bodyParser = require("body-parser");

// create server using express
const server = express();

// parse the request and response
server.use(bodyParser.urlencoded({ extended: false }));
// server.use(bodyParser.json());

// using server in various ways
// server.use((req, res, next) => {
//     console.log("First Command");
//     next();
// })

// server.use((req, res, next) => {
//     console.log("second Command");
// })


// handle apis
// we can use get, post, put, delete
// server.use('/api') or using get, post put, delete
server.get('/', (req, res, next) => {
    res.send("Welcome to home page");
})

server.get('/addUser', (req, res, next) => {
    res.send(`
    <form action='/user' method='post'>
        <label>Enter your name</label>
        <input type='text' name='username'>
        <input type='submit' value='Send'>
    </form>
    `);
})

server.post('/user', (req, res) => {
    console.table(req.body);
    const username = req.body.username;
    res.send(`Welcome ${username}`);
})

server.listen(3000, () => {
    console.log("Listening at port 3000");
})