// Utilize your own environment variable to mask your API key, else, process.env.secretkey
// will not fetch an active API key from OpenWeatherMap and thus the program will not run.
// Type into the Terminal (I use bash) 'export secretkey=' and paste the API key that was
// provided to you by OpenWeatherMap.org (You must create an account first to obtain a key).

const myApiKey = process.env.secretkey;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${myApiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector("weather").style.display = "none";
    }else{
        var data = await response.json();

        // Obtain and display all of the necessary weather details
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        // Update the image to match the given weather condition
    
        if(data.weather[0].main == 'Clouds') {
            weatherIcon.src = "assets/images/clouds.png";
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = "assets/images/clear.png";
        }
        else if(data.weather[0].main == 'Rain') {
            weatherIcon.src = "assets/images/rain.png";
        }
        else if(data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "assets/images/drizzle.png";
        }
        else if(data.weather[0].main == 'Mist') {
            weatherIcon.src = "assets/images/mist.png";
        }
        else if(data.weather[0].main == 'Snow') {
            weatherIcon.src = "assets/images/snow.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();