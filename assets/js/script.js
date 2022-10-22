var searchForm = document.getElementById("search-form");
var searchCity = document.getElementById("search-city");
var searchButton = document.getElementById("search-button");
var cityList = document.getElementById("city-list");
var APIkey = "8e55341ac7775e0941d6dfeb6271449e"
var todayWeather = document.getElementById("today-weather");
var futureWeather = document.getElementById("future-weather");

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
    var requestUrl = 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={APIkey}';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }
  
