var rest = require('../API/RestClient');
var builder = require('botbuilder');

exports.displayConversions = function getExchangeRates(session) {
    var url = 'https://api.fixer.io/latest?base=NZD';
    rest.getCurrencyData(url, session, displayConversions);
}


function displayConversions(message, session) {
    var conversions = JSON.parse(message);

    //var message = new builder.Message(session);
    console.log(message);
    //session.send('test');
    session.send(message);
    //console.log(session);
}