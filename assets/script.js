var apiKey = '4e6d959d6e4e5a589c56b55027ba326e';
var city;
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
var userInput = document.querySelector(".form-input");
var searchBtn = document.querySelector(".btn");
var searchHistory = document.querySelector(".search-history");
var currentCity = document.querySelector(".city-card");
var forecast5Day = document.querySelector(".five-day-cast");

// userInput = city;

// Current city forecast
function getApi () {
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