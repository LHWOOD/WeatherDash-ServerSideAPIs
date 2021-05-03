var userForm = document.querySelector("#city-search-form");
var cityInput = document.querySelector("#city-search");

var inputHandler = function (event) {
  event.preventDefault();
  var city = cityInput.value;
  console.log(city);
  //needs this to text content of city weather
};

//function to contact API
// function getApi() {
//   var requestUrl =
//     "https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=74f3ae2f827155ea451bd2e9b7cacb93";

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       //   var cold = document.createElement("h3");

//       //   cold.textContent = data.main.humidity;

//       //   infoDump.appendChild(cold);
//     });
// }

// var displayWeather = function (weather, searchCity) {
//   cityInput.textContent = searchCity;

//   console.log(weather);
// };

userForm.addEventListener("submit", inputHandler);
// userForm.addEventListener("submit", getApi);
