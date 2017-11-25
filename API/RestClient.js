var request = require('request');

exports.getCurrencyData = function getData(url, session, callback) {

    request.get(url, function(err, res, message) {
        if (err) {
            console.log(err);
        } else {
            callback(message, session);
        }
    });
};