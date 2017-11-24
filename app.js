var restify = require('restify');
var builder = require('botbuilder');


//BOT Connector
var connector = new builder.ChatConnector({
    appId: 'f5be6924-a0ca-421f-b43c-07980aac8d08',
    appPassword: 'oeeYU2_[ugtcDKQHP6797}:'
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