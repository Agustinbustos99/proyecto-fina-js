const fetch = require('node-fetch');
const apiKey = 'eab72c7ad2da46928ae213107232912';
const apiUrl = 'http://api.weatherapi.com/v1'
// Realizar una solicitud GET a una API
fetch('http://api.weatherapi.com/v1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));