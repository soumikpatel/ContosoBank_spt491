var builder = require('botbuilder');
var currencyConversion = require('./Currency');


exports.startDialog = function(bot) {

    var recognizer = new builder.LuisRecognizer('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/83f1f75d-9945-45fd-ab44-2c481bdfdab2?subscription-key=d63d1605a9d14aa2abeb04de9aaf522f&verbose=true&timezoneOffset=0&q=');

    bot.recognizer(recognizer);


    bot.dialog('ExchangeRate', function(session) {
        session.send('the exchange rate is...');
        currencyConversion.displayConversions();
    }).triggerAction({
        matches: 'ExchangeRate'
    });



    bot.dialog('Welcome', function(session) {
        session.send('Hello there!');
    }).triggerAction({
        matches: 'Welcome'
    });
}