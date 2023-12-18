function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
}

let formSearch = document.querySelector("#search-form");
formSearch.addEventListener("submit", search);
