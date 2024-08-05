const apiKey = 'e4a218c22431d5ef68fd189ccaef7417';
const weatherData = document.querySelector('.weatherData');
const cityName = document.querySelector('#cityName');
const formElement = document.querySelector('form');
const imgIcon = document.querySelector('.icon');
const forecastData = document.querySelector('.forecastData');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityValue = cityName.value;
    getWeatherData(cityValue);
    getForecastData(cityValue); // Call the function to fetch the 5-day forecast
});

async function getWeatherData(cityValue) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);

        if (!res.ok) {
            throw new Error("Network Response not ok");
        }

        const data = await res.json();
        console.log('Current Weather Data:', data);

        const temp = Math.floor(data.main.temp);
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels Like: ${Math.floor(data.main.feels_like)}°C`,
            `Wind Speed: ${data.wind.speed} m/s`
        ];

        weatherData.querySelector(".temp").textContent = `${temp}°C`;
        weatherData.querySelector(".description").textContent = `${desc}`;
        imgIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
        weatherData.querySelector(".details").innerHTML = details.map(detail => `<div>${detail}</div>`).join("");

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function getForecastData(cityValue) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${apiKey}&units=metric`);
        
        if (!res.ok) {
            throw new Error("Network Response not ok");
        }
        
        const data = await res.json();
        console.log('5-Day Forecast Data:', data);

        const forecastHTML = data.list.slice(0, 5).map(item => {
            const date = new Date(item.dt * 1000).toLocaleDateString();
            const temp = Math.floor(item.main.temp);
            const desc = item.weather[0].description;
            const icon = item.weather[0].icon;

            return `
                <div class="forecast-item">
                    <div class="forecast-date">${date}</div>
                    <div class="forecast-temp">${temp}°C</div>
                    <div class="forecast-desc">${desc}</div>
                    <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">
                </div>
            `;
        }).join("");

        forecastData.innerHTML = forecastHTML;

    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}
