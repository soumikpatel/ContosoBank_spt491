var rest = require('../API/Restclient');
var builder = require('botbuilder');


exports.displayBankAccounts = function getAccountDetails(session) {
    var url = 'https://contosobank-spt491.azurewebsites.net/tables/BankAccounts';
    rest.getAccountDetails(url, session, handleAccountDetailsResponse)
};

function handleAccountDetailsResponse(message, session) {
    var accountDetailsResponse = JSON.parse(message);
    var allAccounts = [];
    var items = [];
    var columns = [];
    for (var index in accountDetailsResponse) {
        var column = {}
        var item = {}

        var accountName = accountDetailsResponse[index].accountname;
        var monthlyFees = accountDetailsResponse[index].monthlyfee.toString();
        var transactionFees = accountDetailsResponse[index].transactionfee.toString();
        var interestRates = accountDetailsResponse[index].interestrate.toString();
        var minBalance = accountDetailsResponse[index].minbalance.toString();

        item.type = 'TextBlock';
        item.text = accountName;
        item.weight = 'bolder';
        item.wrap = true;
        items.push(item);

        item = {};
        item.type = 'TextBlock';
        item.text = 'Monthly Fee: ' + monthlyFees;
        item.wrap = true;
        items.push(item);

        item = {};
        item.type = 'TextBlock';
        item.text = 'Mininum Balance: ' + minBalance;
        item.wrap = true;
        items.push(item);

        item = {};
        item.type = 'TextBlock';
        item.text = 'Transaction Fee: ' + transactionFees;
        item.wrap = true;
        items.push(item);

        item = {};
        item.type = 'TextBlock';
        item.text = 'Interest Rate: ' + interestRates;
        item.wrap = true;
        items.push(item);

        item = {};
        item.type = 'TextBlock';
        item.text = ' ';
        items.push(item);

    }

    column.type = 'Column';
    column.width = 'auto';
    column.items = items;
    columns.push(column);


    console.log('abc');
    session.send(new builder.Message(session).addAttachment({
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "0.5",
            "body": [{
                "type": "Container",
                "items": [{
                    "type": "ColumnSet",
                    "columns": columns
                }]
            }],
            "actions": [{
                "type": "Action.Submit",
                "title": "Apply"
            }]
        }
    }));
}