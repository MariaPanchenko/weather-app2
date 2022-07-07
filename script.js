// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   'san francisco': {
//     temp: 20.9,
//     humidity: 100,
//   },
//   oslo: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// // write your code here
// console.log(weather.paris);
// console.log(weather.tokyo);
// console.log(weather.lisbon);
// console.log(weather.oslo);
// console.log(weather['san francisco']);

// let city = prompt('Enter a city?');
// city = city.toLowerCase();
// if (weather[city] !== undefined) {
//   let temperature = weather[city].temp;
//   let humidity = weather[city].humidity;
//   let celsiusTemperature = Math.round(temperature);
//   let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
//   alert(
//     `It is currently ${celsiusTemperature} °C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${weather[city].humidity}%.`
//   );
// } else {
//   alert(
//     "Sorry< we don't know the weather for city, try going to https://www.google.com/search?q=google+weather"
//   );
// }

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
let day = days[now.getDay()];
let date = now.getDate();
let month = months[now.getMonth()];

time.innerHTML = `${hours}:${minutes}-${day},${date} ${month}`;

// search
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector('#search-input');

  let h2 = document.querySelector('h2');
  h2.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector('#search-form');
form.addEventListener('submit', search);
