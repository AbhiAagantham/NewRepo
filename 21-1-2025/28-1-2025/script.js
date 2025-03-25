
const apiKey ='a3340d2f22ccc9fdc399b44e9eb65c5a' ;
const city = 'London'; 
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

function fetchWeatherData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeatherData(data) {
    const tableBody = document.querySelector('#weather-table tbody');
    
    const city = data.name;
    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    
    // Create a new row
    const row = document.createElement('tr');
    
    // Populate the row with weather data
    row.innerHTML = `
        <td>${city}</td>
        <td>${temp} °C</td>
        <td>${weather}</td>
        <td>${humidity} %</td>
        <td>${windSpeed} m/s</td>
    `;
    
    // Append the row to the table body
    tableBody.innerHTML = ''; // Clear existing data before adding new data
    tableBody.appendChild(row);
}

// Fetch the weather data when the page loads
window.onload = fetchWeatherData;
