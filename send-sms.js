// Twilio Credentials 
var accountSid = 'ACb9802f9354b80e3f616206531aeaeb86'; 
var authToken = 'f37256fe98d600160d61d4734b99a84d'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+16786135273", 
    from: "+14708237709", 
    body: "This is a successful message sent from Twilio's API.", 
}, function(err, message) { 
    console.log(message.sid); 
});