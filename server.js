require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserController = require("./controllers/user");
const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

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
app.use(express.static(__dirname + '/client/build/'));

app.use("/api/user", UserController);

app.post('/sms', (req, res) => {
    var twiml = new MessagingResponse();
    twiml.message("The robots are coming! Head for the hills!");
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

// Connecting to build folder:
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
});

const PORT = process.env.PORT || 3001;

http.createServer(app).listen(1337, () => {
    console.log("Twilio server listening on port 1337");
});

app.listen(PORT, () => {
    console.log("App is listening on: " + PORT);
});