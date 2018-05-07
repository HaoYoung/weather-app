const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
    request({
      url: `https://api.darksky.net/forecast/3f6d9f76025e54aef637c3e03e221daa/${results.latitude},${results.longitude}`,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        console.log(`Current Temperature: ${body.currently.temperature}`);
      } else {
        console.log('Unable to fetch weather.');
      }
    });
  }
});

const request = require('request');

