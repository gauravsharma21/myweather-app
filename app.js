const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

const address = process.argv[2]
if (!address) {
    console.log(chalk.red.inverse("Please provide an address"))
}
else {
    geocode(address, (err, { latitude, longitude, location }) => {
        if (err) {
            return console.log(chalk.red.inverse(err))
        }

        forecast(latitude, longitude, (error, forecastdata) => {
            if (error) {
                return console.log(chalk.red.inverse(err))
            }
            console.log(chalk.green.inverse(location))
            console.log(chalk.yellow.inverse(forecastdata))
        })
    })
}
