const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const address = process.argv[2]


if (!address) {
    console.log("Please provide an address")
} else {
    geocode(address, (error, data) => {
        if (error) {
            console.log("Error in geocoding", error)
            throw new Error("Error in geocoding")
        } 
        forecast(data.latitude, data.longitude, (error, data) => {
            if (error) {
                console.log(error)
                throw new Error("Error in forecasting", error)
            }
            console.log(data)
        })
    })
}




