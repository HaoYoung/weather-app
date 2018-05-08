const request = require('request');

const getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/3f6d9f76025e54aef637c3e03e221daa/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;



