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
exports.apply = function getData(url, name, email, tel, accType, drNum, drVer) {
    var options = {
        url: url,
        method: 'POST',
        headers: {
            'ZUMO-API-VERSION': '2.0.0',
            'Content-Type': 'application/json'
        },
        json: {
            "AccountName": accType,
            "Name": name,
            "Email": email,
            "Phone": tel,
            "LicenseNum": drNum,
            "LicenseVer": drVer
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

//------------ Bank Application Data to see
exports.getApplicationDetails = function getData(url, session, callback) {
    request.get(url, { 'headers': { 'ZUMO-API-VERSION': '2.0.0' } }, function(err, res, body) {
        if (err) {
            console.log(err);
        } else {
            callback(body, session, name);
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

//------------ getting all application data

exports.displayApplicationDetails = function getData(url, session, name, callback) {
    request.get(url, { 'headers': { 'ZUMO-API-VERSION': '2.0.0' } }, function(err, res, body) {
        if (err) {
            console.log(err);
        } else {
            callback(body, session, name);
        }
    });
};

//------------ Delete Call
exports.deleteApplication = function deleteData(url, session, name, acc, id, callback) {
    var options = {
        url: url + "\\" + id,
        method: 'DELETE',
        headers: {
            'ZUMO-API-VERSION': '2.0.0',
            'Content-Type': 'application/json'
        }
    };

    request(options, function(err, res, body) {
        if (!err && res.statusCode === 200) {
            console.log(body);
            callback(body, session, name, acc);
        } else {
            console.log(err);
            console.log(res);
        }
    })

};