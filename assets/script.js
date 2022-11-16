var apiKey = '4e6d959d6e4e5a589c56b55027ba326e';
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
var userInput = document.querySelector(".form-input");
var searchBtn = document.querySelector(".btn");
var searchHistory = document.querySelector(".search-history");

// Current city variables
var currentCity = document.querySelector(".city-card");
var currentDate = document.querySelector("#current-date");
var currentWeather = document.querySelector("#current-weather");

// Five day forecast variables
var forecast5Day = document.querySelector(".five-day-cast");
var dayOne = document.querySelector("#date-1");
var weatherOne = document.querySelector(".weather-1");
var dayTwo = document.querySelector("#date-2");
var weatherTwo = document.querySelector(".weather-2");
var dayThree = document.querySelector("#date-3");
var weatherThree = document.querySelector(".weather-3");
var dayFour = document.querySelector("#date-4");
var weatherFour = document.querySelector(".weather-4");
var dayFive = document.querySelector("#date-5");
var weatherFive = document.querySelector(".weather-5");



// userInput = city;

// Current city forecast
function getApi (city, apiKey) {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    userInput = city;
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(response)
      })
}

searchBtn.addEventListener('click', getApi);