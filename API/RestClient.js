var request = require('request');

//------------ Bank Accounts Easy Table GET request
exports.getAccountDetails = function getData(url, session, callback) {
    request.get(url, { 'headers': { 'ZUMO-API-VERSION': '2.0.0' } }, function(err, res, body) {
        if (err) {
            console.log(err);
        } else {
            callback(body, session);
        }
    });
};




//------------ Currency Converter API
exports.getCurrencyData = function getData(url, session, callback) {

    request.get(url, function(err, res, message) {
        if (err) {
            console.log(err);
        } else {
            callback(message, session);
        }
    });
};