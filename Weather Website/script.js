async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '63a90ae96d390ec37d6c1252f5a86e1a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Min temperature: ${data.main.temp_min}°C</p>
            <p>Max temperature: ${data.main.temp_max}°C</p>
            <p>Feels like: ${data.main.feels_like}°C</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
    }
}
