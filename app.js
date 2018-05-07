const request = require('request');
const yargs = require('yargs');

const argv = yargs

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=30%20lincoln%20ave%20iowacity&key=AIzaSyAwCvq0CdrdAra0FMjcDtRoa0Z7DT9agEQ',
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});