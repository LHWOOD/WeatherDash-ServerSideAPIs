//variables
var userForm = document.querySelector("#city-search-form");
var cityInput = document.querySelector("#city-search");
var infoDump = document.querySelector("#dump");
var fiveDay = document.querySelector("#week");
var dayOne = document.querySelector("#day1");

//captures city search
var inputHandler = function (event) {
  event.preventDefault();
  var city = cityInput.value;
  console.log(city);
  getApi(city);
  getFive(city);
};

// function fetch API info
function getApi(city) {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=74f3ae2f827155ea451bd2e9b7cacb93";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      var cityName = document.createElement("h1");
      var temp = document.createElement("h4");
      var windSpeed = document.createElement("h4");
      var humidity = document.createElement("h4");
      //moment
      cityName.textContent = data.name;
      temp.textContent = "Temp: " + data.main.temp + " °F";
      windSpeed.textContent = "Wind: " + data.wind.speed + " MPH";
      humidity.textContent = "Humidity: " + data.main.humidity + " %";
      //appendmoment
      infoDump.classList.add("test");
      infoDump.appendChild(cityName);
      infoDump.appendChild(temp);
      infoDump.appendChild(windSpeed);
      infoDump.appendChild(humidity);
    });
}
//second call to api to get 5 day info
function getFive(city) {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial&appid=74f3ae2f827155ea451bd2e9b7cacb93";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var week = document.createElement("h2");
      var date = document.createElement("h5");
      var tura = document.createElement("h5");
      var viento = document.createElement("h5");
      var humedad = document.createElement("h5");

      // week.textContent = "5-Day Forecast: ";

      date.textContent = data.list[0].dt_txt;
      tura.textContent = "Temp: " + data.list[0].main.temp + " °F";
      viento.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
      humedad.textContent = "Humidity: " + data.list[0].main.humidity + " %";

      // fiveDay.appendChild(week);

      dayOne.appendChild(date);
      dayOne.appendChild(tura);
      dayOne.appendChild(viento);
      dayOne.appendChild(humedad);
    });
}
// infoDump.remove();
//need weather icons

//need 5 day forecast

//need date info

//function city button local storage set/get

//need to style style style

//event listener for form
userForm.addEventListener("submit", inputHandler);
