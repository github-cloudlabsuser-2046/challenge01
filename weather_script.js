<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
</head>
<body>
    <h1>Weather App</h1>
    <input type="text" id="city" placeholder="Enter city name">
    <button onclick="getWeather()">Get Weather</button>
    <div id="weather"></div>

    <script>
        async function getWeather() {
            const apiKey = 'your_api_key_here'; // Replace with your OpenWeatherMap API key
            const city = document.getElementById('city').value;
            const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
            const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                displayWeather(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }

        function displayWeather(data) {
            const weatherDiv = document.getElementById('weather');
            if (data.cod === 200) {
                const city = data.name;
                const temp = data.main.temp;
                const weather = data.weather[0].description;
                weatherDiv.innerHTML = `
                    <h2>Weather in ${city}:</h2>
                    <p>Temperature: ${temp}°C</p>
                    <p>Condition: ${weather}</p>
                `;
            } else {
                weatherDiv.innerHTML = '<p>City not found.</p>';
            }
        }
    </script>
</body>
</html>