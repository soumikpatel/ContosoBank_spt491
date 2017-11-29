var rest = require('../API/RestClient');
var builder = require('botbuilder');

exports.sendApplication = function postApplication(session) {
    var url = 'https://contosobank-spt491.azurewebsites.net/tables/Applications';
    if (session.message && session.message.value) {
        var name = session.message.value.myName;
        var email = session.message.value.myEmail;
        var tel = session.message.value.myTel;
        var accType = session.message.value.accountType;
        var drNum = session.message.value.DLnum;
        var drVer = session.message.value.DLver;
        session.conversationData['name'] = name;


        rest.apply(url, name, email, tel, accType, drNum, drVer);
    } else {
        var card = ApplicationData();
        session.send(new builder.Message(session).addAttachment(card));
    }

};

function ApplicationData() {
    var card = {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [{
                    "type": "TextBlock",
                    "text": "Contoso Bank Account Application",
                    "weight": "bolder",
                    "size": "medium"
                },
                {
                    "type": "TextBlock",
                    "text": "Please select an account type:"
                },
                {
                    "type": "Input.ChoiceSet",
                    "id": "accountType",
                    "style": "compact",
                    "choices": [{
                            "title": "Electronic Account",
                            "value": "Electronic Account"
                        },
                        {
                            "title": "Access Account",
                            "value": "Access Account"
                        },
                        {
                            "title": "Earner Account",
                            "value": "Earner Account"
                        },
                        {
                            "title": "Graduate Account",
                            "value": "Graduate Account"
                        }
                    ]
                },
                {
                    "type": "TextBlock",
                    "text": "Your name",
                    "wrap": true
                },
                {
                    "type": "Input.Text",
                    "id": "myName",
                    "placeholder": "First Last"
                },
                {
                    "type": "TextBlock",
                    "text": "Your email",
                    "wrap": true
                },
                {
                    "type": "Input.Text",
                    "id": "myEmail",
                    "placeholder": "youremail@example.com",
                    "style": "email"
                },
                {
                    "type": "TextBlock",
                    "text": "Phone Number"
                },
                {
                    "type": "Input.Text",
                    "id": "myTel",
                    "placeholder": "0212345678",
                    "style": "tel"
                },
                {
                    "type": "TextBlock",
                    "text": "Drivers License Number"
                },
                {
                    "type": "Input.Text",
                    "id": "DLnum",
                    "placeholder": "AA0123456",
                },
                {
                    "type": "TextBlock",
                    "text": "Drivers License Version"
                },
                {
                    "type": "Input.Text",
                    "id": "DLver",
                    "placeholder": "123",
                }
            ],
            "actions": [{
                "type": "Action.Submit",
                "title": "Submit"
            }]
        }
    }

    return card;
}