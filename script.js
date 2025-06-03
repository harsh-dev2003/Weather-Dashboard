document.getElementById('get-weather').addEventListener('click', () => {
  const city = document.getElementById('city-input').value;
  if (city) {
    getCurrentWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});

function getCurrentWeather(city) {
  const apiKey = '026a7275ba5c2d5fc0e3f6ca94349a15'; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('current-weather').innerHTML = `
        <h2>Current Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      document.getElementById('current-weather').innerHTML = `
        <p>Error fetching weather data: ${error.message}</p>
      `;
      console.error("Error:", error);
    });
}

