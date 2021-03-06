 const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2b4e4c72dcfba995f25f97278a9269aa&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            //callback(undefined,)
            callback(undefined,body.current.weather_descriptions[0]+ ',.... It is currently ' + body.current.temperature + ' degress out. with a humidity of ' + body.current.humidity + '. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast