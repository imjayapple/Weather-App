const myApiKey = process.env.secretkey;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=vancouver";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${myApiKey}`);
    var data = await response.json();
    console.log(data);
}

checkWeather();