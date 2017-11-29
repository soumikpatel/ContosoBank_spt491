var rest = require('../API/Restclient');
var builder = require('botbuilder');


exports.displayApplicationDetails = function getApplicationDetails(session, name) {
    var url = 'https://contosobank-spt491.azurewebsites.net/tables/Applications';
    rest.displayApplicationDetails(url, session, name, handleApplicationDetailsResponse)
};

function handleApplicationDetailsResponse(message, session, name) {
    var applicationResponse = JSON.parse(message);
    console.log('before for loop');
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
            console.log('for loop ended');
        } else {
            session.send("Sorry you do not have any applications.");
        }
    }

    // session.send(applicationResponse[0]);
}