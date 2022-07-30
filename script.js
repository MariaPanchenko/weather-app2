// realTime
let now = new Date();
let time = document.querySelector('time');

let days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'Jule',
  'August',
  'September',
  'October',
  'Nowember',
  'Decemder',
];
let hours = now.getHours();
let minutes = now.getMinutes();
if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let day = days[now.getDay()];
let date = now.getDate();
let month = months[now.getMonth()];

time.innerHTML = `${hours}:${minutes}-${day},${date} ${month}`;

function displaytemperature(response) {
  let temperatureElement = document.querySelector('#temperature');
  let cityElement = document.querySelector('#city');
  let descriptionElement = document.querySelector('#description');
  let iconElement = document.querySelector('#icon');

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  iconElement.setAttribute(
    'i',
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function displayWeather(response) {
  document.querySelector('#city').innerHTML = response.data.name;
  document.querySelector('#temperature').innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = '7b33e98fb3b0406841a50cf97f2e248a';
  let city = document.querySelector('#search-input').value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(url).then(displayWeather);

  // let searchInput = document.querySelector('#search-input');

  // let h2 = document.querySelector('h2');
  // h2.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector('#search-form');
form.addEventListener('submit', search);

function showTemperature(response) {
  let h1 = document.querySelector('h1');
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `${temperature}°C`;
  h2.innerHTML = `${city}`;
}
