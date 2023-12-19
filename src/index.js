function displayTemperature(response) {
  let temperatureElement = document.querySelector("#value");
  let temperature = Math.round(response.data.temperature.current);
  let cityElemrnt = document.querySelector("#city");
  let descriptionElemrnt = document.querySelector("#description");
  let humidityElemrnt = document.querySelector("#humidity");
  let windSpeedElemrnt = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  cityElemrnt.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElemrnt.innerHTML = response.data.condition.description;
  humidityElemrnt.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElemrnt.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = temperature;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.get.Hours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "80a649af01ofb5104e6atd8426e1f713";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}

let formSearch = document.querySelector("#search-form");
formSearch.addEventListener("submit", searchSubmit);

searchCity("Paris");
