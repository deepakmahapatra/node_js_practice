const request = require('request')


const geocode = (address, callback) => {
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZGVlcGFrbWFoYXBhdHJhIiwiYSI6ImNrZmhwZ2d5bDBqazYzMXAxYnlwdDNpb24ifQ.facXOCbcld2EBmIwuT-McA'
    request({url: geocodeURL, json:true}, (error, response) => {
        if (error) {
            console.log(error)
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            console.log(error)
            callback('Unable to find locations', undefined) 
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1]
            })
        }
    })
}

module.exports = geocode

