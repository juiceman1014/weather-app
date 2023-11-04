const defaultCity = "san jose";
let userCity = defaultCity;

const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("keydown", (event) =>{
    if(event.key == "Enter"){
        userCity = searchBar.ariaValueMax;
        fetchData(userCity);
    }
})

async function getWeather(){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=cd06bddc6518484ba1721122232810&q=${userCity}`,
    {mode: "cors"});
    const cityData = await response.json();
    console.log(cityData.location.name);
    console.log(cityData.location.region);
    console.log(cityData.location.country);
    console.log(cityData.current.temp_f);
    
}

getWeather();
