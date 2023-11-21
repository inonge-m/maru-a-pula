function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let formattedDay = days[day];
  let formattedMonth = months[month];
  return `${formattedDay} ${formattedMonth} ${hours}:${minutes} ${date.getFullYear()}`;
}

function addDate() {
  let currentDateElement = document.querySelector(".current-date");
  let currentDate = new Date();
  currentDateElement.innerHTML = formatDate(currentDate);
}

let currentDateElement = document.querySelector(".current-date");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;
  addDate();
  let apikey = "09te80b3afa4a4a00294o54335b850b6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
addDate();

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElements = document.querySelector("#current-city");
  cityElements.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}
