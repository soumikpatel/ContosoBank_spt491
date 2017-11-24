var builder = require('botbuilder');


exports.startDialog = function(bot) {

    var recognizer = new builder.LuisRecognizer('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/83f1f75d-9945-45fd-ab44-2c481bdfdab2?subscription-key=d63d1605a9d14aa2abeb04de9aaf522f&verbose=true&timezoneOffset=0&q=');

    bot.recognizer(recognizer);



    bot.dialog('getTransactions', function(session, args) {
        //if (!isAttachment(session)) {

        // Pulls out the food entity from the session if it exists
        var shopEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'shop');

        // Checks if the for entity was found
        if (shopEntity) {
            session.send('Retreving transactions at %s...', shopEntity.entity);
            // Insert logic here later

        } else {
            session.send("No food identified! Please try again");
        }
        // }
    }).triggerAction({
        matches: 'getTransactions'
    });



    bot.dialog('Welcome', function(session) {
        session.send('Hello there!');
    }).triggerAction({
        matches: 'Welcome'
    });
}