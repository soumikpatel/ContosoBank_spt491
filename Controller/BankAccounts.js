var rest = require('../API/Restclient');
var builder = require('botbuilder');


exports.displayBankAccounts = function getAccountDetails(session) {
    var url = 'https://contosobank-spt491.azurewebsites.net/tables/BankAccounts';
    rest.getAccountDetails(url, session, handleAccountDetailsResponse)
};

function handleAccountDetailsResponse(message, session) {
    var accountDetailsResponse = JSON.parse(message);
    var allAccounts = [];
    for (var index in accountDetailsResponse) {
        var accountName = accountDetailsResponse[index].accountname;
        var monthlyFees = accountDetailsResponse[index].monthlyfees;
        var transactionFees = accountDetailsResponse[index].transactionfee;
        var interestRates = accountDetailsResponse[index].interestrate;
        var minBalance = accountDetailsResponse[index].minbalance;

        session.send(new builder.Message(session).addAttachment({
            contentType: "application/vnd.microsoft.card.adaptive",
            content: {
                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                "type": "AdaptiveCard",
                "version": "0.5",
                "body": [{
                    "type": "Container",
                    "items": [

                    ]
                }]
            }
        }));

    }



    console.log("handeling this piece of shit");
    console.log(message);
    session.send(message);
}