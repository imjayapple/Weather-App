// Utilize your own environment variable to mask your API key, else, process.env.secretkey
// will not fetch an active API key from OpenWeatherMap and thus the program will not run.
// Type into the Terminal (I use bash) 'export secretkey=' and paste the API key that was
// provided to you by OpenWeatherMap.org (You must create an account first to obtain a key).

const myApiKey = process.env.secretkey;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// process.env.secretkey

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${myApiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();