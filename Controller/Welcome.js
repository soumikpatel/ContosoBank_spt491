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
                        "url": "https://github.com/soumikpatel/ContosoBank_spt491/blob/master/brandLogo/MainLogo.png",
                        "size": "small",
                        "style": "person"
                    }, {
                        "type": "TextBlock",
                        "text": "Welcome to Contoso Bank!",
                        "weight": "bolder",
                        "wrap": true
                    },
                    {
                        "type": "TextBlock",
                        "spacing": "none",
                        "text": "How may I help you today?",
                        //"isSubtle": true,
                        "wrap": true
                    }
                ]
            }]
        }


    }
    return card;
}