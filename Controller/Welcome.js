var builder = require('botbuilder');

exports.welcomeCard = function welCard(session) {
    var card = {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [{
                "type": "Container",
                "items": [{
                        "type": "Image",
                        "url": "https://raw.githubusercontent.com/soumikpatel/ContosoBank_spt491/master/brandLogo/MainLogo.png",
                        "size": "stretch",
                        "style": "person"
                    },
                    {
                        "type": "TextBlock",
                        "text": "Welcome to Contoso Bank!",
                        "weight": "bolder",
                        "wrap": true
                    },
                    {
                        "type": "TextBlock",

                        "text": "How may I help you today?",
                        //"isSubtle": true,
                        "wrap": true
                    },
                    {
                        "type": "TextBlock",

                        "text": "I'm curretly able to help you with the following features:",
                        //"isSubtle": true,
                        "wrap": true
                    },
                    {
                        "type": "TextBlock",
                        "spacing": "none",
                        "text": "  1. Find the latest currency exchange rate.",
                        //"isSubtle": true,
                        "wrap": true
                    },
                    {
                        "type": "TextBlock",
                        "spacing": "none",
                        "text": "  2. Show you different types of daily banking accounts available at Contoso Bank.",
                        //"isSubtle": true,
                        "wrap": true
                    },
                    {
                        "type": "TextBlock",
                        "spacing": "none",
                        "text": "  3. Check which bank accounts have you applied for.",
                        //"isSubtle": true,
                        "wrap": true
                    },
                    {
                        "type": "TextBlock",
                        "spacing": "none",
                        "text": "  4. Delete an application submitted to open a particular account.",
                        //"isSubtle": true,
                        "wrap": true
                    },
                    {
                        "type": "TextBlock",
                        "spacing": "none",
                        "text": "  5. Detect the NZ currency coin value by submitting an image url.",
                        //"isSubtle": true,
                        "wrap": true
                    }
                ]
            }]
        }


    }
    return card;
}