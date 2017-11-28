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


//------------ Bank Account Application POST request
exports.apply = function getData(url, username, applicationData) {
    var options = {
        url: url,
        method: 'POST',
        headers: {
            'ZUMO-API-VERSION': '2.0.0',
            'Content-Type': 'application/json'
        },
        json: {
            "username": username
        }
    };

    request(options, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
        } else {
            console.log(error);
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