
const apiKey ='a3340d2f22ccc9fdc399b44e9eb65c5a' ;
const city = 'London'; 
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

function fetchWeatherData() {
    let x=fetch(apiurl)
    then(response => response.json());
      
}

