document.addEventListener("DOMContentLoaded", function (event) {
      getWeather("Omsk");
});

function getWeather(city) {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1ebd129afdb2f7041228cb9da8b62ce5")
            .then(response => response.json())
            .then(weather => {
                  console.log(weather);
                  document.querySelector(".city").innerText = weather.name;
                  document.querySelector(".tempValue")
                  .innerText = `🌡${Math.round(weather.main.temp - 273.15)}°C`;
                  document.querySelector(".feels_like")
                  .innerText = `Ощущается как: ${Math.round(weather.main.feels_like - 273)}`;
                  document.querySelector(".hi-low")
                  .innerText = `мин. ${Math.round(weather.main.temp_max - 273.15)} / макс. ${Math.round(weather.main.temp_min - 273.15)}`;
                  document.querySelector(".weather").innerText = weather.weather[0].description;
                  document.querySelector(".humidity").innerText = `💧 ${weather.main.humidity}`;
            })
            .catch(err => console.log(err));
}

