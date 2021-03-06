var builder = require('botbuilder');
var currencyConversion = require('./Currency');
var bankingAccounts = require('./BankAccounts');
var application = require('./Application');
var welcome = require('./Welcome');
var appDetails = require('./GetAppliction');
var customVision = require('./CognitiveDialog');


exports.startDialog = function(bot) {

    var recognizer = new builder.LuisRecognizer('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/b405e1e9-65f3-4bc8-9233-304c65ea0539?subscription-key=3290d05f82dc43cdb68e41e9c9c3f2fd&verbose=true&timezoneOffset=0&q=');

    bot.recognizer(recognizer);

    function isAttachment(session) {
        var imgUrl = session.message.text;
        if ((session.message.attachments && session.message.attachments.length > 0) || imgUrl.includes("http")) {
            //call custom vision
            customVision.retreiveMessage(session);

            return true;
        } else {
            return false;
        }
    }

    //------------ Currency Conversion
    bot.dialog('ExchangeRate', function(session, args) {
        if (!isAttachment(session)) {
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
        }

    }).triggerAction({
        matches: 'ExchangeRate'
    });



    //------------ Show Different Accounts
    bot.dialog('BankAccounts', function(session) {
        if (!isAttachment(session)) {
            session.send(bankingAccounts.displayBankAccounts(session));
        }
    }).triggerAction({
        matches: 'BankAccounts'
    });



    //------------ Apply for a new Account
    bot.dialog('AccountApplication', function(session) {
        if (!isAttachment(session)) {
            session.send(application.sendApplication(session));
        }
    }).triggerAction({
        matches: 'AccountApplication'
    });

    //------------ Show before Delete Application
    bot.dialog('GetApplication', [
        function(session, args, next) {
            session.dialogData.args = args || {};
            if (!session.conversationData["name"]) {
                builder.Prompts.text(session, "Enter your name to retrieve your account applications");
            } else {
                next(); // Skip if we already have this info.
            }
        },
        function(session, results, next) {
            if (!isAttachment(session)) {

                if (results.response) {
                    session.conversationData["name"] = results.response;
                }

                session.send("Retrieving your details");
                appDetails.displayApplicationDetails(session, session.conversationData["name"]); // <---- THIS LINE HERE IS WHAT WE NEED 

            }
        }
    ]).triggerAction({
        matches: 'GetApplication'
    });



    //------------ Delete Application
    bot.dialog('DeleteApplication', [
        function(session, args, next) {
            session.dialogData.args = args || {};
            if (!session.conversationData["name"]) {
                //builder.Prompts.text(session, "Enter your name");
                builder.Prompts.text(session, "Enter your name");
            } else {
                next(); // Skip if we already have this info.
            }
        },
        function(session, results, next) {
            if (!isAttachment(session)) {
                if (results.response) {
                    session.conversationData["name"] = results.response;
                }
                //session.send("You want to delete one of your favourite foods.");

                // Pulls out the food entity from the session if it exists
                var accEntity = builder.EntityRecognizer.findEntity(session.dialogData.args.intent.entities, 'account');
                var username = session.conversationData["name"];
                console.log("Data")
                console.log(session.conversationData)
                    // console.log(username);

                // Checks if the for entity was found
                if (accEntity) {
                    session.send('Deleting \'%s\'...', accEntity.entity);
                    appDetails.deleteApplication(session, username, accEntity.entity); //<--- CALLL WE WANT
                    //session.beginDialog('GetApplication');
                } else {
                    session.send("Not found! Please try again");
                    session.beginDialog('DeleteApplication');
                }

            }
        }
    ]).triggerAction({
        matches: 'DeleteApplication'
    });



    //------------ Welcome
    bot.dialog('Welcome', function(session) {
        if (!isAttachment(session)) {
            var adaptiveCard = welcome.welcomeCard(session);
            var msg = new builder.Message(session).addAttachment(adaptiveCard)
            session.send(msg);
        }
        //session.send('Hello there!');
    }).triggerAction({
        matches: 'Welcome'
    });
}