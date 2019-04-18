const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if(!address){
    console.log("Please provide an address")
}
else{
    geocode(address, (err, data) => {
        if(err){
            return console.log(err)
        }
    
            forecast(data.latitude, data.longitude, (error, forecastdata) => {
                if(error){
                    return console.log(error)
                }
                console.log(data.location)
                console.log(forecastdata)
              })
    })
}