var rest = require('../API/RestClient');
var builder = require('botbuilder');

exports.displayConversions = function getExchangeRates(session, base, conversion) {
    var url = 'https://api.fixer.io/latest?base=' + base + '&symbols=' + conversion;
    rest.getCurrencyData(url, session, displayConversions);
}


exports.getConversionCard = function(session) {
    var card = {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
            type: "AdaptiveCard",
            body: [{
                    "type": "TextBlock",
                    "text": "Contoso Currency Convertor",
                    "size": "large",
                    "weight": "bolder"
                },
                {
                    "type": "TextBlock",
                    "text": "Convert from:"
                },
                {
                    "type": "Input.ChoiceSet",
                    "id": "base",
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
                    "id": "conversion",
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
            ],
            "actions": [{
                "type": "Action.Submit",
                "title": "Convert"
            }]
        }
    }
    return card;
}

function displayConversions(message, session, base, conversion) {
    var response = JSON.parse(message);
    var jsonResponse = response.rates;

    //var conversionCurrency = Object.keys(conversions.rates)[0];
    // var x = session.message.value.base;

    for (var symbolValue in jsonResponse) {
        var keyValue = jsonResponse[symbolValue];
        session.send("The value of 1 " + response.base + " is " + keyValue + " " + symbolValue);
    }
}