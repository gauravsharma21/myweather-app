const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/7c68cce2dfed215e901445ae2fd84250/'+ latitude + ',' + longitude + '?units=si'
    request({ url : url, json : true}, (err, response) => {
        if(err){
            callback('Cannot connect to network services')
        }
        else if(response.body.error){
            callback('Incorrect location address. Try another search')
        }
        else{
            callback(undefined, response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
        }
    })
}
module.exports = forecast