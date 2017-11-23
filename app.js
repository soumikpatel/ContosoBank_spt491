var restify = require('restify');
var builder = require('botbuilder');


//BOT Connector
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});



//Create Restify server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log("%s listening to %s", server.name, server.url);
});

//listen to useres messages
server.post('/api/messages', connector.listen());

//Respond to users messages
var bot = new builder.UniversalBot(connector, function(session) {
    session.send("You said: %s", session.message.text);
});