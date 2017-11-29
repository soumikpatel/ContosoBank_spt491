var rest = require('../API/Restclient');
var builder = require('botbuilder');


exports.displayApplicationDetails = function getApplicationDetails(session, name) {
    var url = 'https://contosobank-spt491.azurewebsites.net/tables/Applications';
    rest.displayApplicationDetails(url, session, name, handleApplicationDetailsResponse)
};

function handleApplicationDetailsResponse(message, session, name) {
    var applicationResponse = JSON.parse(message);
    console.log('before for loop');
    var count = 0;
    for (var application in applicationResponse) {
        if (applicationResponse[application].Name.toLowerCase() == name.toLowerCase()) {
            //console.log(application);
            var applierName = applicationResponse[application].Name;
            var acc = applicationResponse[application].AccountName;
            var email = applicationResponse[application].Email;
            var phone = applicationResponse[application].Phone;
            var licenseNum = applicationResponse[application].LicenseNum;
            var licenseVer = applicationResponse[application].LicenseVer;

            session.send("Your application details are:\n\n Name: %s\n\nAccount Type: %s\n\nEmail: %s\n\nPhone: %s\n\nLicense Number: %s\n\nLicense Version: %s\n\n", applierName, acc, email, phone, licenseNum, licenseVer);
            count++;
            console.log('for loop ended');
        }
    }
    if (count == 0) {
        session.send('Sorry, I could not find any applications for %s', name);
        session.conversationData["name"] = "";
        session.beginDialog('GetApplication');
    } else {
        session.beginDialog("Welcome");
    }


    // session.send(applicationResponse[0]);
}

//------------ Delete Request

exports.deleteApplication = function getDeleteData(session, name, acc) {
    var url = 'https://contosobank-spt491.azurewebsites.net/tables/Applications';
    rest.displayApplicationDetails(url, session, name, function(message, session, name) {
        var allData = JSON.parse(message);
        //console.log(session);
        console.log('my name');
        console.log(name);
        for (var i in allData) {
            if (allData[i].Name.toLowerCase() == name.toLowerCase() && allData[i].AccountName.toLowerCase() == acc.toLowerCase()) {
                // console.log(allData[i]);
                rest.deleteApplication(url, session, name, acc, allData[i].id, handleDelete);
            } else {
                session.send("Could not find application. Please try again.")
            }
        }
    })
}

function handleDelete(message, session, name, acc) {
    var applicationResponse = JSON.parse(message);
    for (var application in applicationResponse) {
        if (allData[i].Name.toLowerCase() == name.toLowerCase() && !(allData[i].AccountName.toLowerCase() == acc.toLowerCase())) {
            //console.log(application);
            var applierName = applicationResponse[application].Name;
            var acc = applicationResponse[application].AccountName;
            // var email = applicationResponse[application].Email;
            // var phone = applicationResponse[application].Phone;
            // var licenseNum = applicationResponse[application].LicenseNum;
            // var licenseVer = applicationResponse[application].LicenseVer;

            session.send("%s, your application for %s has now been deleted", applierName, acc);
            console.log('for loop ended');
        } else {
            session.send("Sorry!");
        }
    }
}