//variables
var userForm = document.querySelector("#city-search-form");
var cityInput = document.querySelector("#city-search");
var infoDump = document.querySelector("#dump");

//captures city search
var inputHandler = function (event) {
  event.preventDefault();
  var city = cityInput.value;
  console.log(city);
  getApi(city);
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
      console.log(data);

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

// infoDump.remove();
//need weather icons

//need 5 day forecast

//need date info

//function city button local storage set/get

//need to style style style

//event listener for form
userForm.addEventListener("submit", inputHandler);
