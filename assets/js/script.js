var searchForm = document.getElementById("search-form");
var searchCity = document.getElementById("search-city");
var searchButton = document.getElementById("search-button");
var cityList = document.getElementById("city-list");

// var oldSearches = document.querySelector("#old-search");
// API key: 8e55341ac7775e0941d6dfeb6271449e
var savedCityList = localStorage.getItem("city-list")
    ? JSON.parse(localStorage.getItem("city-list"))
    : [];

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    savedCityList.push(searchCity.value);
    localStorage.setItem("city-list", JSON.stringify(savedCityList));
    cityListItems(searchCity.value);
    searchCity.value = "";
});

var cityListItems = (text) => {
    var cityLi = document.createElement("button");
    cityLi.innerHTML = text;
    cityList.appendChild(cityLi);
};

