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
