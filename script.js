const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const WeatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weatherBody = document.querySelector('.weather-body');


async function checkWeather(city){
  const api_key = '26b6621be2772f89dd316b18761ec2a3';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(url).then(response => response.json());

  if(weather_data.cod === `404`){
    location_not_found.style.display = "flex";
    weatherBody.style.display = "none";
    return;
  }
  location_not_found.style.display = "none";
  weatherBody.style.display = "flex";
  temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  windSpeed.innerHTML = `${weather_data.wind.speed}Km/h`;

  switch (weather_data.weather[0].main){
    case 'Clouds':
      WeatherImg.src = 'cloud.png';
      break;
    case 'Clear':
      WeatherImg.src = 'clear.png';
      break;
    case 'Rain':
       WeatherImg.src = 'rain.png';
       break;
    case 'Mist':
      WeatherImg.src = 'mist.png';
      break;
    case 'Snow':
      WeatherImg.src = 'snow.png';
      break;
  }
}

searchBtn.addEventListener('click', ()=>{
  checkWeather(inputBox.value);
});

