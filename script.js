// ================================
// SkyCast - JavaScript
// Step 2: DOM + Events
// ================================


// Select HTML elements

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById(cityName);
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
}