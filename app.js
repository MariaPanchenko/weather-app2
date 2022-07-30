function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();

  return days[day];
}
// function formatDate(timestamp) {
//   let date = new Date(timestamp);
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let days = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
//   ];
//   let day = days[date.getDay()];
//   return `${day} ${hours}:${minutes}`;
// }
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
let day = days[now.getDay()];
let date = now.getDate();
let month = months[now.getMonth()];

time.innerHTML = `${hours}:${minutes}-${day}, ${date} ${month}`;

function displayTemperature(response) {
  let temperatureElement = document.querySelector('#temperature');
  let cityElement = document.querySelector('#city');
  let descriptionElement = document.querySelector('#description');
  let dateElement = document.querySelector('#date');
  let iconElement = document.querySelector('#icon');
  console.dir(iconElement);
  temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}°`;
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  // dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    'src',
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute('alt', response.data.weather[0].description);
}
function search(city) {
  let apiKey = '7b33e98fb3b0406841a50cf97f2e248a';
  // let city = 'Lviv';
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(url).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector('#search-input');
  search(cityInput.value);
}

let form = document.querySelector('#search-form');
form.addEventListener('submit', handleSubmit);

search('Lviv');
