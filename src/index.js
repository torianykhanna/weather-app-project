function displayTemperature(response) {
  let temperatureElement = document.querySelector("#value");
  let temperature = Math.round(response.data.temperature.current);
  let cityElemrnt = document.querySelector("#city");

  cityElemrnt.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
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
