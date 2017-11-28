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
                    "type": "ColumnSet",
                    "columns": [
                        /*{
                                                    "type": "Column",
                                                    "width": "auto",
                                                    "items": [{
                                                        "type": "Image",
                                                        "url": "https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg",
                                                        "size": "small",
                                                        "style": "person"
                                                    }]
                                                },*/
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [{
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
                        }
                    ]
                }]
            }]
        }


    }
    return card;
}