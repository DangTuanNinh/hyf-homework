// Create your own json file

// const pet = [
//   {
//     id: 1,
//     title: "Song 1",
//     genre: "Pop",
//     singer: "Nguyễn VĂn A",
//   },
//   {
//     id: 2,
//     title: "Song 2",
//     genre: "Pop",
//     singer: "Nguyễn Văn B",
//   },    
// ];

// script.js

const apiKey = '58167ad9adddd291ee3cc689f1bb02d1';
const cityId = '524901';

async function getWeatherData() {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`);
  const data = await response.json();

  const weather = data.list[0];
  const cityName = data.city.name;
  const temperature = weather.main.temp;
  const weatherDescription = weather.weather[0].description;
  const weatherIcon = weather.weather[0].icon;
  const windSpeed = weather.wind.speed;
  const cloudiness = weather.clouds.all;
  
  const sunrise = new Date(data.city.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.city.sunset * 1000).toLocaleTimeString();

  document.getElementById('city').textContent = cityName;
  document.getElementById('temperature').textContent = `${temperature} °C`;
  document.getElementById('description').textContent = weatherDescription;
  document.getElementById('icon').src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  document.getElementById('wind').textContent = `Wind: ${windSpeed} m/s`;
  document.getElementById('clouds').textContent = `Cloudiness: ${cloudiness}%`;
  document.getElementById('sunrise').textContent = `Sunrise: ${sunrise}`;
  document.getElementById('sunset').textContent = `Sunset: ${sunset}`;
}

getWeatherData();

