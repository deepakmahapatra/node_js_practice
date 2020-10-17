const request = require('request')

const forecast = (latitude, longitude, callback) => {
    console.log(latitude, longitude)
    const url = 'http://api.weatherstack.com/current?access_key=8f6c16307cc9e5e46f531c808c3501ff&query='+latitude + ',' + longitude 
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (response.body.error) {
            callback('error from server'+ response.body.error, undefined)
        } else {
            console.log(response.body)
        }
    })
}

module.exports(forecast)