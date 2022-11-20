var apiKey = 'f132ba58ecb06601167576c176b957b0';
var searchBtn = document.querySelector(".btn");
var searchHistory = document.querySelector(".search-history");
var currentDay = document.querySelector(".current-weather");


// Function for API
function getApi (event) {
  event.preventDefault();
    let city = document.querySelector("#city").value
    let weatherURLToday = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    let weatherURLForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
    fetch(weatherURLToday)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      
    // Current day weather
    // Getting current date
     var date = dayjs().format('MM/DD/YYYY');

    // If statement to check weather condition and set appropiate icon
     var conditions;
     if (data.weather[0].main === 'Clear') {
      conditions = './assets/images/icons8-sun-50.png'
     } else if (data.weather[0].main === 'Snow' || data.weather[0].main === 'Sleet') {
      conditions = './assets/images/icons8-light-snow-50.png'
     } else if (data.weather[0].main === 'Rain') {
      conditions = './assets/images/icons8-heavy-rain-50.png'
     } else if (data.weather[0].main === 'Lighting') {
      conditions = './assets/images/icons8-cloud-lighting-50.png'
     } else if (data.weather[0].main === 'Thunder') {
      conditions = './assets/images/icons8-storm-50.png'
     }

    // Creating HTML div for current weather and inserting data from API
     var currentDayWeather = 
     `<div class="current-weather">
        <h2>${city} (${date})</h2>
        <img src="${conditions}"/>
        <p class="temp">Temp: ${data.main.temp} °F</p>
        <p class="humidity">Humidity: ${data.main.humidity}%</p>
        <p class="wind">Wind: ${data.wind.speed} MPH</p>
      </div>`
      $('.current-weather').append(currentDayWeather); // Appending it to HTML div

      // Fetching data from forecast API
      fetch(weatherURLForecast)
      .then(function (response) {
        return response.json()
      })
      .then (function (data) {
        console.log(data)
      })

      // 5 day forecast
      // dayCount for adding one day to the count
      let dayCount = 1;
      // For loop
      for (var i = 4; i < 37; i += 8) {
        let forecastDay = dayjs().add(dayCount, "day").format("MM/DD/YYYY"); // Adding a day to the current day and formatting it 
      // If statement to check weather condition and set appropiate icon
        if (data.list[i].weather[0].main === 'Clear') {
          conditions = './assets/images/icons8-sun-50.png'
         } else if (data.list[i].weather[0].main === 'Snow' || data.list[i].weather[0].main === 'Sleet') {
          conditions = './assets/images/icons8-light-snow-50.png'
         } else if (data.list[i].weather[0].main === 'Rain') {
          conditions = './assets/images/icons8-heavy-rain-50.png'
         } else if (data.list[i].weather[0].main === 'Lighting') {
          conditions = './assets/images/icons8-cloud-lighting-50.png'
         } else if (data.list[i].weather[0].main === 'Thunder') {
          conditions = './assets/images/icons8-storm-50.png'
         }

         // Creating divs for forecast days and inserting data
         let forecastInfo =
         `<div class="forecast-card">
        <h2>${forecastDay}</h2>
        <img src="${conditions}"/>
        <p class="temp">Temp: ${data.list[i].main.temp} °F</p>
        <p class="humidity">Humidity: ${data.list[i].main.humidity}%</p>
        <p class="wind">Wind: ${data.list[i].wind.speed} MPH</p>
      </div>`
      $('.five-day-cast').append(forecastInfo); // Appending it to HTML
      dayCount += 1; // Adds a day to the dayCount
      conditions = "";
      }

  });
}

// Event listener for search button
searchBtn.addEventListener('click', getApi);