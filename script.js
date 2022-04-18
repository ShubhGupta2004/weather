let button = document.querySelector('.button');
let inputtedvalue = document.querySelector('.inputValue');
let nameValue = document.querySelector('.name');
let temp = document.querySelector('.temp');
let description = document.querySelector('.desc');
const weatherdisp = document.querySelector('.displayWeather');
let city = document.querySelector('.city');
button.addEventListener('click', function () {
  // Fection data from open weather API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputtedvalue.value}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`
  )
    .then(response => response.json())
    .then(displayData)
    .catch(err => init());
});
const init = function () {
  temp.innerText = 'Wrong City Name';
  city.innerText = '';
  description.innerText = '';
};
// Function to diplay weather on html document
const displayData = weather => {
  city.innerText = `City: ${inputtedvalue.value}`;
  temp.innerText = `Temperature: ${weather.main.temp}°C`;
  description.innerText = `Forecast: ${weather.weather[0].main}`;
};
