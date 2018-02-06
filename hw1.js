// To execute this code, be sure you're in the right directory;
// (Mac)       cd ~/code/hw1
// (Windows)   cd c:\code\hw1
// Then type:
// node hw1.js

// HOMEWORK 1

// Given the following JavaScript object that represents weather data,
// write a weather summary out to the screen, when this code is executed.
// Something like this:

// Currently it is 67 degrees and sunny. Tomorrow it will be 65 and Mostly Cloudy.
// The next day it we will see Partly Cloudy skies, with a temperature of 70.

let weatherData = {
  current: {
    temperature: 12,
    conditions: "snowy"
  },
  forecast: [
    { temperature: 15, conditions: "snowy" },
    { temperature: 19, conditions: "partly cloudy" }
  ]
}

console.log("Currently, here in Evanston, IL, it is " + weatherData.current.temperature + " and " + weatherData.current.conditions + ".");
console.log("Tomorrow, it will be " + weatherData.forecast[0].temperature + " and " + weatherData.forecast[0].conditions + ".");
console.log("The next day, it will be " + weatherData.forecast[1].temperature + " and " + weatherData.forecast[1].conditions + ".");
