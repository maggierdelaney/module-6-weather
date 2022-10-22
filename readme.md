# 06 Server-Side APIs: Weather Dashboard

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The base URL should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).



## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-homework-demo.png)


# <Your-Project-Title>

## Description

AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

Examples:
https://github.com/darylnauman/weather-dashboard


GIVEN a weather dashboard with form inputs, WHEN I search for a city, THEN I am presented with current and future conditions for that city and that city is added to the search history
    - Add event listener to the submit search button, then the city will need to be passed into a function that pulls the API for that city
    - Current and future information come from the same API
    - Parent div for the entire API information:
        - Div for current
        - Div for 5-day forecast
    - api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    - The city name will also need to be saved using local storage (setItem, getItem), appended under the search bar
    - Save the request Url which will create a button (attached to the saved cities) that will get the item and re-start the fetch request
    - Will need to createEl and append list of buttons with the city names

WHEN I view current weather conditions for that city, THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
    - Fetch request, aksing for the API itself
    - Must check if request Url will return the data we are asking for, make sure to console.log to make sure you get what you are looking for
    - Activity #4 may be helpful
    - Reference mini-project
    - API, ask to parse out those specific pieces

- WHEN I view future weather conditions for that city, THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
    - API, ask to parse out those specific pieces
    - Consider a card element with bootstrap to make it look nice

- WHEN I click on a city in the search history, THEN I am again presented with current and future conditions for that city
 - May be appending the box and 5 day forecast, need empty div for both to be put in
 - save request url to have it send again?
 - Activity 13/14, must use the 200 thing in fetch

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

Weather forecast API: https://openweathermap.org/forecast5
Form inputs: https://www.w3schools.com/html/html_forms.asp#:~:text=The%20element%20is%20a,buttons%2C%20submit%20buttons%2C%20etc.


## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

