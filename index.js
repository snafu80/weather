#!/usr/bin/env node

const getWeather = require('weather3')

//console.log(process.argv)
if(process.argv[2] === '--help') {
  console.log(`
  Usage:
    weather <cityName>

  Example:
    weather 北京
  `)
} else {
  let city = process.argv[2]
  getWeather(city)
    .then(data => {
      console.log('当前城市:' + data.results[0].currentCity)
      console.log('PM2.5   :' + data.results[0].pm25)
      console.log('天气概况:')
      console.log(' * ' + data.results[0].weather_data[0].date)
      console.log(' * ' + data.results[0].weather_data[0].temperature)
      console.log(' * ' + data.results[0].weather_data[0].wind)
      console.log(' * ' + data.results[0].weather_data[0].weather)
    }).catch(e => {
      console.log(e)
    })

}

