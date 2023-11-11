const cityName = document.getElementById("city");
const regionName = document.getElementById("region");
const countryName = document.getElementById("country");
const tempLevel = document.getElementById("temperature");
const tempToggle = document.getElementByiId("temp-toggle")

const defaultCity = "san jose";
let userCity = defaultCity;

const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("keydown", (event) =>{
    if(event.key == "Enter"){
        userCity = searchBar.value;
        getWeather(userCity);
        cityName.textContent = "City: ";
        regionName.textContent = "Region: ";
        countryName.textContent = "Country: ";
        tempLevel.textContent = "Temperature (f): ";
    }
})

async function getWeather(searchTerm){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=cd06bddc6518484ba1721122232810&q=${searchTerm}`,
    {mode: "cors"});
    const cityData = await response.json();
    cityName.textContent += `${cityData.location.name}`;
    regionName.textContent += `${cityData.location.region}`;
    countryName.textContent += `${cityData.location.country}`;
    tempLevel.textContent += `${cityData.current.temp_f}`;
}

getWeather(userCity);
