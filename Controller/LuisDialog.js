var builder = require('botbuilder');
var currencyConversion = require('./Currency');
var bankingAccounts = require('./BankAccounts');
var application = require('./Application');
var welcome = require('./Welcome');


exports.startDialog = function(bot) {

    var recognizer = new builder.LuisRecognizer('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/83f1f75d-9945-45fd-ab44-2c481bdfdab2?subscription-key=d63d1605a9d14aa2abeb04de9aaf522f&verbose=true&timezoneOffset=0&q=');

    bot.recognizer(recognizer);

    //------------ Currency Conversion
    bot.dialog('ExchangeRate', function(session, args) {

        if (session.message && session.message.value) {
            console.log('in if')
            var base = session.message.value.base;
            var conversion = session.message.value.conversion;
            currencyConversion.displayConversions(session, base, conversion);
        } else {
            session.dialogData.args = args || {};
            console.log('in else');
            var adaptiveCard = currencyConversion.getConversionCard(session);
            var msg = new builder.Message(session).addAttachment(adaptiveCard)
            session.send(msg);
        }

    }).triggerAction({
        matches: 'ExchangeRate'
    });



    //------------ Show Different Accounts
    bot.dialog('BankAccounts', function(session) {
        session.send(bankingAccounts.displayBankAccounts(session));
    }).triggerAction({
        matches: 'BankAccounts'
    });



    //------------ Apply for a new Account
    bot.dialog('AccountApplication', function(session) {
        session.send(application.sendApplication(session));
    }).triggerAction({
        matches: 'AccountApplication'
    });


    //------------ Welcome
    bot.dialog('Welcome', function(session) {
        var adaptiveCard = welcome.welcomeCard(session);
        var msg = new builder.Message(session).addAttachment(adaptiveCard)
        session.send(msg);
        //session.send('Hello there!');
    }).triggerAction({
        matches: 'Welcome'
    });
}