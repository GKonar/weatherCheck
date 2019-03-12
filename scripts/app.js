// ************ MAIN VARS ************

const form = document.querySelector('#formEl');

// ************ FUNCTIONS ************

// Render weather information to UI
const renderWeather = (data) => {
    const weatherTable = document.querySelector('#weatherTable');
    calculateSun(data);
    
    weatherTable.innerHTML =
    `<tr>
        <th>City</th>
        <td>${data.name}</td>
    </tr>
    <tr>
        <th>Temperature</th>
        <td>${Math.floor(data.main.temp - 273.15)}°C</td>
    </tr>
    <tr>
        <th>Atmospheric preassure</th>
        <td>${data.main.pressure}</td>
    </tr>
    <tr>
        <th>Humidity</th>
        <td>${data.main.humidity}%</td>
    </tr>
    <tr>
        <th>Sunrise</th>
        <td>${calculateSun(data).sunrise}</td>
    </tr>
    <tr>
        <th>Sunset</th>
        <td>${calculateSun(data).sunset}</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>${data.weather[0].description}</td>
    </tr>
    `
}

// Calculate sunrise and sunset
const calculateSun = (data) => {
    const sunriseTimeMs = data.sys.sunrise * 1000;
    const sunsetTimeMs = data.sys.sunset * 1000;

    const sunrise = new Date(sunriseTimeMs); 
    const sunset = new Date(sunsetTimeMs);

    const sunriseTime = `${sunrise.getHours()}:${sunrise.getMinutes()}:${sunrise.getSeconds()}`
    const sunsetTime = `${sunset.getHours()}:${sunset.getMinutes()}:${sunset.getSeconds()}`

    return {
        sunrise : sunriseTime,
        sunset: sunsetTime
    }
}

// ************ EVENT LISTENERS ************

form.addEventListener('submit', e => {
    // Getting Input Value
    const city = document.querySelector('#cityInput').value;
    
    // Fetching city from weather API
    getWeather(city)
    .then((data)=> {
        console.log(data);
        renderWeather(data);
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    })
    
    e.preventDefault();
})







// // ************ BCG ************
// const particles = Particles.init({
// 	selector: '.background',
//     color: ['#404B69', '#DBEDF3'],
//     connectParticles: true,
//     speed: .5,
//     minDistance: 10
// });