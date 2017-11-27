var rest = require('../API/RestClient');
var builder = require('botbuilder');

exports.displayConversions = function getExchangeRates(session) {
    var url = 'https://api.fixer.io/latest?base=NZD';
    rest.getCurrencyData(url, session, displayConversions);
}


function displayConversions(message, session) {
    var conversions = JSON.parse(message);

    var card = {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
            type: "AdaptiveCard",
            body: [{
                    "type": "TextBlock",
                    "text": "Adaptive Card design session",
                    "size": "large",
                    "weight": "bolder"
                },
                {
                    "type": "TextBlock",
                    "text": "Convert from:"
                },
                {
                    "type": "Input.ChoiceSet",
                    "id": "Base",
                    //"title": "Convert from",
                    "style": "compact",
                    "choices": [{
                            "title": "AUD",
                            "value": "AUD"
                        },
                        {
                            "title": "BGN",
                            "value": "BGN"
                        },
                        {
                            "title": "BRL",
                            "value": "BRL"
                        },
                        {
                            "title": "CAD",
                            "value": "CAD"
                        },
                        {
                            "title": "CHF",
                            "value": "CHF"
                        },
                        {
                            "title": "CNY",
                            "value": "CNY"
                        },
                        {
                            "title": "CZK",
                            "value": "CZK"
                        },
                        {
                            "title": "DKK",
                            "value": "DKK"
                        },
                        {
                            "title": "GBP",
                            "value": "GBP"
                        },
                        {
                            "title": "HKD",
                            "value": "HKD"
                        },
                        {
                            "title": "HRK",
                            "value": "HRK"
                        },
                        {
                            "title": "HUF",
                            "value": "HUF"
                        },
                        {
                            "title": "IDR",
                            "value": "IDR"
                        },
                        {
                            "title": "ILS",
                            "value": "ILS"
                        },
                        {
                            "title": "INR",
                            "value": "INR"
                        },
                        {
                            "title": "JPY",
                            "value": "JPY"
                        },
                        {
                            "title": "KRW",
                            "value": "KRW"
                        },
                        {
                            "title": "MXN",
                            "value": "MXN"
                        },
                        {
                            "title": "MYR",
                            "value": "MYR"
                        },
                        {
                            "title": "NOK",
                            "value": "NOK"
                        },
                        {
                            "title": "NZD",
                            "value": "NZD"
                        },
                        {
                            "title": "PHP",
                            "value": "PHP"
                        },
                        {
                            "title": "PLN",
                            "value": "PLN"
                        },
                        {
                            "title": "RON",
                            "value": "RON"
                        },
                        {
                            "title": "RUB",
                            "value": "RUB"
                        },
                        {
                            "title": "SEK",
                            "value": "SEK"
                        },
                        {
                            "title": "SGD",
                            "value": "SGD"
                        },
                        {
                            "title": "THB",
                            "value": "THB"
                        },
                        {
                            "title": "TRY",
                            "value": "TRY"
                        },
                        {
                            "title": "ZAR",
                            "value": "ZAR"
                        },
                        {
                            "title": "EUR",
                            "value": "EUR"
                        }
                    ]
                },
                {
                    "type": "TextBlock",
                    "text": "Convert to:"
                },
                {
                    "type": "Input.ChoiceSet",
                    "id": "Conversion",
                    //"title": "Convert from",
                    "style": "compact",
                    "choices": [{
                            "title": "AUD",
                            "value": "AUD"
                        },
                        {
                            "title": "BGN",
                            "value": "BGN"
                        },
                        {
                            "title": "BRL",
                            "value": "BRL"
                        },
                        {
                            "title": "CAD",
                            "value": "CAD"
                        },
                        {
                            "title": "CHF",
                            "value": "CHF"
                        },
                        {
                            "title": "CNY",
                            "value": "CNY"
                        },
                        {
                            "title": "CZK",
                            "value": "CZK"
                        },
                        {
                            "title": "DKK",
                            "value": "DKK"
                        },
                        {
                            "title": "GBP",
                            "value": "GBP"
                        },
                        {
                            "title": "HKD",
                            "value": "HKD"
                        },
                        {
                            "title": "HRK",
                            "value": "HRK"
                        },
                        {
                            "title": "HUF",
                            "value": "HUF"
                        },
                        {
                            "title": "IDR",
                            "value": "IDR"
                        },
                        {
                            "title": "ILS",
                            "value": "ILS"
                        },
                        {
                            "title": "INR",
                            "value": "INR"
                        },
                        {
                            "title": "JPY",
                            "value": "JPY"
                        },
                        {
                            "title": "KRW",
                            "value": "KRW"
                        },
                        {
                            "title": "MXN",
                            "value": "MXN"
                        },
                        {
                            "title": "MYR",
                            "value": "MYR"
                        },
                        {
                            "title": "NOK",
                            "value": "NOK"
                        },
                        {
                            "title": "NZD",
                            "value": "NZD"
                        },
                        {
                            "title": "PHP",
                            "value": "PHP"
                        },
                        {
                            "title": "PLN",
                            "value": "PLN"
                        },
                        {
                            "title": "RON",
                            "value": "RON"
                        },
                        {
                            "title": "RUB",
                            "value": "RUB"
                        },
                        {
                            "title": "SEK",
                            "value": "SEK"
                        },
                        {
                            "title": "SGD",
                            "value": "SGD"
                        },
                        {
                            "title": "THB",
                            "value": "THB"
                        },
                        {
                            "title": "TRY",
                            "value": "TRY"
                        },
                        {
                            "title": "ZAR",
                            "value": "ZAR"
                        },
                        {
                            "title": "EUR",
                            "value": "EUR"
                        }
                    ]
                }
            ]
        }
    }

    session.send(new builder.Message(session).addAttachment(card));

    //var message = new builder.Message(session);
    console.log(message);
    session.send(message);

    //console.log(session);
    //session.send(message).addAttachment();

}