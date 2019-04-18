const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

const address = process.argv[2]
if(!address){
    console.log(chalk.red.inverse("Please provide an address"))
}
else{
    geocode(address, (err, data) => {
        if(err){
            return console.log(chalk.red.inverse(err))
        }
    
            forecast(data.latitude, data.longitude, (error, forecastdata) => {
                if(error){
                    return console.log(chalk.red.inverse(err))
                }
                console.log(chalk.green.inverse(data.location))
                console.log(chalk.yellow.inverse(forecastdata))
              })
    })
}
