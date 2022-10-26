var searchForm = document.getElementById("search-form");
var searchCity = document.getElementById("search-city");
var searchButton = document.getElementById("search-button");
var cityList = document.getElementById("city-list");
var APIkey = "63372ec60a804168fdfd9bc2b9e87df2"
//variable for today's weather
var todayWeather = document.getElementById("today-weather");
//variables for the 5 day forecast
var futureWeather = document.getElementById("future-weather");
var futureWeather2 = document.getElementById("future-weather2");
var futureWeather3 = document.getElementById("future-weather3");
var futureWeather4 = document.getElementById("future-weather4");
var futureWeather5 = document.getElementById("future-weather5");

var savedCityList = localStorage.getItem("city-list")
    ? JSON.parse(localStorage.getItem("city-list"))
    : [];

searchForm.addEventListener("submit", (event) => {
    console.log("hello");
    event.preventDefault();
    savedCityList.push(searchCity.value);
    localStorage.setItem("city-list", JSON.stringify(savedCityList));
    cityListItems(searchCity.value);
    getWeatherApi(searchCity.value);
    searchCity.value = "";
});

var cityListItems = (text) => {
    var cityLi = document.createElement("button");
    cityLi.innerHTML = text;
    cityList.appendChild(cityLi);
    cityLi.addEventListener('click', function () {
        getWeatherApi(this.textContent);
    })
};

function getWeatherApi(cityName) {
    //working on getting current day weather
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIkey + "&units=imperial";
    fetch(queryUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            todayWeather.textContent = "";
            var currentH2 = document.createElement('h2');
            var currentImg = document.createElement('img');
            currentH2.innerHTML = data.name + moment(data.dt, 'X').format('(MM/DD/YYYY)');
            currentImg.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            currentH2.appendChild(currentImg);
            todayWeather.appendChild(currentH2);
            var currentP = document.createElement('p');
            currentP.innerHTML = "Temperature: " + data.main.temp + " °F";
            todayWeather.appendChild(currentP);
            var currentP2 = document.createElement('p');
            currentP2.innerHTML = "Humidity: " + data.main.humidity + "%";
            todayWeather.appendChild(currentP2);
            var currentP3 = document.createElement('p');
            currentP3.innerHTML = "Wind speed: " + data.wind.speed + "mph";
            todayWeather.appendChild(currentP3);
            var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + APIkey + "&units=imperial";
            //now working on the 5-day forecast
            fetch(fiveDayUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (fiveDayData) {
                    console.log(fiveDayData);
                    futureWeather.textContent = "";
                    var futureH2 = document.createElement('h2');
                    var futureImg = document.createElement('img');
                    futureH2.innerHTML = fiveDayData.list[5].dt_txt;
                    futureImg.src = "http://openweathermap.org/img/wn/" + fiveDayData.list[5].weather[0].icon + "@2x.png";
                    futureH2.appendChild(futureImg);
                    futureWeather.appendChild(futureH2);
                    var futureP = document.createElement('p');
                    futureP.innerHTML = "Temperature: " + fiveDayData.list[5].main.temp + " °F";
                    futureWeather.appendChild(futureP);
                    var futureP2 = document.createElement('p');
                    futureP2.innerHTML = "Humidity: " + fiveDayData.list[5].main.humidity + "%";
                    futureWeather.appendChild(futureP2);
                    var futureP3 = document.createElement('p');
                    futureP3.innerHTML = "Wind speed: " + fiveDayData.list[5].wind.speed + "mph";
                    futureWeather.appendChild(futureP3);
                    //space for easier reading, forecast day 2
                    futureWeather2.textContent = "";
                    var futureH2Day2 = document.createElement('h2');
                    var futureImg2Day2 = document.createElement('img');
                    futureH2Day2.innerHTML = fiveDayData.list[12].dt_txt;
                    futureImg2Day2.src = "http://openweathermap.org/img/wn/" + fiveDayData.list[12].weather[0].icon + "@2x.png";
                    futureH2Day2.appendChild(futureImg2Day2);
                    futureWeather2.appendChild(futureH2Day2);
                    var futureP2Day2 = document.createElement('p');
                    futureP2Day2.innerHTML = "Temperature: " + fiveDayData.list[12].main.temp + " °F";
                    futureWeather2.appendChild(futureP2Day2);
                    var futureP2Day2 = document.createElement('p');
                    futureP2Day2.innerHTML = "Humidity: " + fiveDayData.list[12].main.humidity + "%";
                    futureWeather2.appendChild(futureP2Day2);
                    var futureP3Day2 = document.createElement('p');
                    futureP3Day2.innerHTML = "Wind speed: " + fiveDayData.list[12].wind.speed + "mph";
                    futureWeather2.appendChild(futureP3Day2);
                    //forecast day 3
                    futureWeather3.textContent = "";
                    var futureH2Day3 = document.createElement('h2');
                    var futureImg2Day3 = document.createElement('img');
                    futureH2Day3.innerHTML = fiveDayData.list[20].dt_txt;
                    futureImg2Day3.src = "http://openweathermap.org/img/wn/" + fiveDayData.list[20].weather[0].icon + "@2x.png";
                    futureH2Day3.appendChild(futureImg2Day3);
                    futureWeather2.appendChild(futureH2Day3);
                    var futureP2Day3 = document.createElement('p');
                    futureP2Day3.innerHTML = "Temperature: " + fiveDayData.list[20].main.temp + " °F";
                    futureWeather3.appendChild(futureP2Day3);
                    var futureP2Day3 = document.createElement('p');
                    futureP2Day3.innerHTML = "Humidity: " + fiveDayData.list[20].main.humidity + "%";
                    futureWeather3.appendChild(futureP2Day3);
                    var futureP3Day3 = document.createElement('p');
                    futureP3Day3.innerHTML = "Wind speed: " + fiveDayData.list[20].wind.speed + "mph";
                    futureWeather3.appendChild(futureP3Day3);
                    //forecast day 4
                    futureWeather4.textContent = "";
                    var futureH2Day4 = document.createElement('h2');
                    var futureImg2Day4 = document.createElement('img');
                    futureH2Day4.innerHTML = fiveDayData.list[28].dt_txt;
                    futureImg2Day4.src = "http://openweathermap.org/img/wn/" + fiveDayData.list[28].weather[0].icon + "@2x.png";
                    futureH2Day4.appendChild(futureImg2Day4);
                    futureWeather4.appendChild(futureH2Day4);
                    var futureP2Day4 = document.createElement('p');
                    futureP2Day4.innerHTML = "Temperature: " + fiveDayData.list[28].main.temp + " °F";
                    futureWeather4.appendChild(futureP2Day4);
                    var futureP2Day4 = document.createElement('p');
                    futureP2Day4.innerHTML = "Humidity: " + fiveDayData.list[28].main.humidity + "%";
                    futureWeather4.appendChild(futureP2Day4);
                    var futureP3Day4 = document.createElement('p');
                    futureP3Day4.innerHTML = "Wind speed: " + fiveDayData.list[28].wind.speed + "mph";
                    futureWeather4.appendChild(futureP3Day4);
                    //forecast day 5
                    futureWeather5.textContent = "";
                    var futureH2Day5 = document.createElement('h2');
                    var futureImg2Day5 = document.createElement('img');
                    futureH2Day5.innerHTML = fiveDayData.list[36].dt_txt;
                    futureImg2Day5.src = "http://openweathermap.org/img/wn/" + fiveDayData.list[36].weather[0].icon + "@2x.png";
                    futureH2Day5.appendChild(futureImg2Day5);
                    futureWeather5.appendChild(futureH2Day5);
                    var futureP2Day5 = document.createElement('p');
                    futureP2Day5.innerHTML = "Temperature: " + fiveDayData.list[36].main.temp + " °F";
                    futureWeather5.appendChild(futureP2Day5);
                    var futureP2Day5 = document.createElement('p');
                    futureP2Day5.innerHTML = "Humidity: " + fiveDayData.list[36].main.humidity + "%";
                    futureWeather5.appendChild(futureP2Day5);
                    var futureP3Day5 = document.createElement('p');
                    futureP3Day5.innerHTML = "Wind speed: " + fiveDayData.list[36].wind.speed + "mph";
                    futureWeather5.appendChild(futureP3Day5);
                })
        });
}
