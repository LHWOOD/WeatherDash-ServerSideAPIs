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
      console.log(data);

      var cityName = document.createElement("h1");
      var weatherIcon = document.createElement("img");
      var temp = document.createElement("h4");
      var windSpeed = document.createElement("h4");
      var humidity = document.createElement("h4");
      //moment
      cityName.textContent = data.name;
      weatherIcon.setAttribute(
        "src",
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
      );
      temp.textContent = "Temp: " + data.main.temp + " °F";
      windSpeed.textContent = "Wind: " + data.wind.speed + " MPH";
      humidity.textContent = "Humidity: " + data.main.humidity * 0.1 + " %";
      //appendmoment
      infoDump.classList.add("test");
      infoDump.appendChild(cityName);
      infoDump.appendChild(weatherIcon);
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
      //day1 create
      var date = document.createElement("h4");
      var weatherIcon = document.createElement("img");
      var tura = document.createElement("h5");
      var viento = document.createElement("h5");
      var humedad = document.createElement("h5");
      //day2 create
      var a = document.createElement("h4");
      var b = document.createElement("img");
      var c = document.createElement("h5");
      var d = document.createElement("h5");
      var e = document.createElement("h5");
      //day1 text
      date.textContent =
        " (" + moment(data.list[0].dt_txt).format("MMM D, YYYY") + ") ";
      weatherIcon.setAttribute(
        "src",
        "http://openweathermap.org/img/w/" +
          data.list[0].weather[0].icon +
          ".png"
      );
      tura.textContent = "Temp: " + data.list[0].main.temp + " °F";
      viento.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
      humedad.textContent =
        "Humidity: " + data.list[0].main.humidity * 0.1 + " %";
      //day2 text
      a.textContent =
        " (" + moment(data.list[8].dt_txt).format("MMM D, YYYY") + ") ";
      b.setAttribute(
        "src",
        "http://openweathermap.org/img/w/" +
          data.list[8].weather[0].icon +
          ".png"
      );
      c.textContent = "Temp: " + data.list[8].main.temp + " °F";
      d.textContent = "Wind: " + data.list[8].wind.speed + " MPH";
      e.textContent = "Humidity: " + data.list[8].main.humidity * 0.1 + " %";
      //day1 append
      fiveDay.classList.add("test2");
      fiveDay.appendChild(dayOne);
      dayOne.appendChild(date);
      dayOne.appendChild(weatherIcon);
      dayOne.appendChild(tura);
      dayOne.appendChild(viento);
      dayOne.appendChild(humedad);
      //day2 append
      dayOne.appendChild(a);
      dayOne.appendChild(b);
      dayOne.appendChild(c);
      dayOne.appendChild(d);
      dayOne.appendChild(e);
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
