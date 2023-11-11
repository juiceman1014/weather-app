const cityName = document.getElementById("city");
const regionName = document.getElementById("region");
const countryName = document.getElementById("country");
const tempLevel = document.getElementById("temperature");
const tempToggle = document.getElementById("temp-toggle");
const weatherIcon = document.getElementById("weather-icon")
let isCelsius = false;

const defaultCity = "san jose";
let userCity = defaultCity;

const searchBar = document.getElementById("search-bar");

function clearValues(){
    cityName.textContent = "City: ";
    regionName.textContent = "Region: ";
    countryName.textContent = "Country: ";
    tempLevel.textContent = "Temperature : ";
    weatherIcon.src = " ";
}

searchBar.addEventListener("keydown", (event) =>{
    if(event.key == "Enter"){
        userCity = searchBar.value;
        getWeather(userCity);
        clearValues();
    }
})

tempToggle.addEventListener("click", () => {
    isCelsius = !isCelsius;
    clearValues();
    getWeather(userCity);
});

async function getWeather(searchTerm){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=cd06bddc6518484ba1721122232810&q=${searchTerm}`,
    {mode: "cors"});
    const cityData = await response.json();
    cityName.textContent += `${cityData.location.name}`;
    regionName.textContent += `${cityData.location.region}`;
    countryName.textContent += `${cityData.location.country}`;
    tempLevel.textContent += isCelsius ? `${cityData.current.temp_c} C` : `${cityData.current.temp_f} F`;
    weatherIcon.src = `https:${cityData.current.condition.icon}`;

}

getWeather(userCity);
