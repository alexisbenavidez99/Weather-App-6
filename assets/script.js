var apiKey = '4e6d959d6e4e5a589c56b55027ba326';
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

fetch (queryURL)