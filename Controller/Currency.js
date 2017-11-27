var rest = require('../API/RestClient');
var builder = require('botbuilder');

exports.displayConversions = function getExchangeRates(session, base, conversion) {
    var url = 'https://api.fixer.io/latest?base=' + base + '&symbols=' + conversion;
    rest.getCurrencyData(url, session, displayConversions);
}


function displayConversions(message, session, base, conversion) {
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
                    "id": "base",
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
                    "id": "conversion",
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
            ],
            "actions": [{
                "type": "Action.Submit",
                "title": "Submit"
            }]
        }
    }

    session.send(new builder.Message(session).addAttachment(card));

    //var message = new builder.Message(session);
    console.log(message);
    session.send(message);

    var response = JSON.parse(message);
    var jsonResponse = response.rates;




    // console.log('its got here');
    // console.log(session.message.value.conversion);
    //var currenyKey = session.message.value.conversion.toString();

    // console.log(Object.keys(conversions.rates)[0]);
    //var baseCurrency = Object.keys(response.base);
    var conversionCurrency = Object.keys(conversions.rates)[0];

    for (var symbolValue in jsonResponse) {
        var keyValue = jsonResponse[symbolValue];
    }

    session.send("The value of 1 " + conversions.base + " is " + keyValue + " " + conversionCurrency);
    console.log(response);
    console.log(jsonResponse);
    //console.log(currencyValue);

    //console.log(conversions);
    //console.log(message.rates);

    //console.log(session);
    //session.send(message).addAttachment();

}