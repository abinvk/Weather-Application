// ================================
// SkyCast - JavaScript
// Step 2: DOM + Events
// ================================


// Select HTML elements

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const feelsLike = document.getElementById("feelsLike");

const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const visibility = document.getElementById("visibility");

// =================================
// Search Weather
// =================================

function searchWeather() {

    const city = cityInput.value.trim();

    // Check empty input

    if(city === ""){
        alert("Please enter a city name.");
        return;
    }


// Temporary data (Not API Connect)

cityName.textContent = city + ", India";
temperature.textContent = "20°C";
condition.textContent = "Partly Cloudy";
feelsLike.textContent = "Feels like 31°C";
humidity.textContent = "78%";
wind.textContent = "4.2 m/s";
visibility.textContent = "8 km";

}

// =================================
// Search Button Click
// =================================

searchBtn.addEventListener("click", searchWeather);

// =================================
// Enter Key Search
// =================================

cityInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        searchWeather();
    }

});
