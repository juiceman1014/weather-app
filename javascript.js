let userCity;


async function getWeather(){
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=cd06bddc6518484ba1721122232810&q=san_jose",
    {mode: "cors"});
    const cityData = await response.json();
    console.log(cityData.location.name);
    console.log(cityData.location.region);
    console.log(cityData.location.country);
    console.log(cityData.current.temp_f);
    
}

getWeather();
