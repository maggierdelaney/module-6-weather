var searchCity = document.getElementById("search-city");
var searchButton = document.getElementById("search-button");

// var oldSearches = document.querySelector("#old-search");
// API key: 8e55341ac7775e0941d6dfeb6271449e


function saveCity() {
    var savedCity = searchCity.value;
    localStorage.setItem("savedCity", JSON.stringify(savedCity));
    console.log(savedCity + " was saved!");
};

searchButton.addEventListener('submit', saveCity());
