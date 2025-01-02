const input_box = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const weather_img = document.querySelector('.weather-img');
const location_notfound = document.querySelector('.location-notfound');
 const weather_body = document.querySelector('.weather-body');
 const weather_details = document.querySelector('.weather-details');
 const cityname = document.querySelector('.cityname');

async function checkweather(city) {
const API_key = "e5ae6c82a4091069caab3fce1be110de";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
 
const weather_data = await fetch(`${url}`).then(response => response.json());
console.log (weather_data);

if(input_box.value === ''){
    
    alert ('enter a city name')
};

cityname.innerHTML = input_box.value;
input_box.value = "";


if (weather_data.cod === `404`){
    weather_details.style.display ="none";
 location_notfound.style.display = "flex";
 weather_body.style.display = "none";
 
console.log("eror");
return;
}
console.log("run");

weather_details.style.display ="flex";
weather_body.style.display = "flex";
location_notfound.style.display="none";



temperature.innerHTML = `${Math.round(weather_data.main.temp - 273)}°C`;
description.innerHTML = `${weather_data.weather[0].description}`;
humidity.innerHTML = `${weather_data.main.humidity}%`;
wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;

switch(weather_data.weather[0].main){
    case 'Clouds':
    weather_img.src = "/img/weather-clouds.png";
    break;
    case 'mist':
    weather_img.src = "/img/weather-mist.png";
    break;
    case 'Rain':
    weather_img.src = "/img/weather-rain.png";
    break;
    case 'Snow':
    weather_img.src = "/img/weather-snow.png";
    break;
}



}




searchbtn.addEventListener('click',()=>{checkweather(input_box.value)});
