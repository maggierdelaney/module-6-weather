var searchForm = document.getElementById("search-form");
var searchCity = document.getElementById("search-city");
var searchButton = document.getElementById("search-button");
var cityList = document.getElementById("city-list");
var APIkey = "63372ec60a804168fdfd9bc2b9e87df2"
var todayWeather = document.getElementById("today-weather");
var futureWeather = document.getElementById("future-weather");
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + APIkey;

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

var savedCityList = localStorage.getItem("city-list")
    ? JSON.parse(localStorage.getItem("city-list"))
    : [];

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    savedCityList.push(searchCity.value);
    localStorage.setItem("city-list", JSON.stringify(savedCityList));
    cityListItems(searchCity.value);
    searchCity.value = "";
    getWeatherApi();
});

var cityListItems = (text) => {
    var cityLi = document.createElement("button");
    cityLi.innerHTML = text;
    cityList.appendChild(cityLi);
};

function getWeatherApi() {
    fetch(queryUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        //will need: city name, date, weather icon, temp, humidit, wind speed
      });
  }
  
//future weather will need: date, icon, temp, wind speed, humidity