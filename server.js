require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Change mongoose promise to native promise
mongoose.Promise = global.Promise;
// Mongoose connection
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
// Successful connection
connection.on('connected', () => {
    console.log('Mongoose Successfully Connected!');
});
// Error/Failed connection
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});

app.use(bodyParser.json());

// Test connection with "Hello World"
app.get('/', (req, res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("App is listening on: " + PORT);
});