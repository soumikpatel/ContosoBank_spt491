var request = require('request'); //node module for http post requests

exports.retreiveMessage = function(session) {

    request.post({
        url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/286ab602-75ac-49d6-bc2e-fc7f93704a53/url?iterationId=1db70785-e29d-48e0-8212-78547dd73c39',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'Prediction-Key': '4dabd48577884b78807382911176a251'
        },
        body: { 'Url': session.message.text }
    }, function(error, response, body) {
        console.log(validResponse(body));
        session.send(validResponse(body));
    });
}

function validResponse(body) {
    if (body && body.Predictions && body.Predictions[0].Tag) {
        return "This is " + body.Predictions[0].Tag + " coin."
    } else {
        console.log('Oops, please try again!');
    }
}