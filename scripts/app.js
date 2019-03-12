// ************ MAIN VARS ************
const form = document.querySelector('.form');
const table = document.querySelector('.table');

// ************ FUNCTIONS ************

// Render weather information to UI
const renderWeather = (data) => {
    const weatherTable = document.querySelector('#weatherTable');

    // Calculate sunrise and sunset
    calculateSun(data);
    
    weatherTable.innerHTML =
    `
    <tr>
        <th>City</th>
        <td>${data.name}</td>
    </tr>
    <tr>
        <th>Temperature</th>
        <td>${Math.floor(data.main.temp - 273.15)}°C</td>
    </tr>
    <tr>
        <th>Atmospheric preassure</th>
        <td>${data.main.pressure} hPa</td>
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
    // Moving elements
    table.style.opacity = '1';
    form.classList.add('slideToLeft');
}

// Calculate sunrise and sunset
const calculateSun = (data) => {
    // leadingZero => add zero add the beginning
    leadingZero = (i) => {
        return (i < 10)? '0'+i : i;
    }

    const sunrise = new Date(data.sys.sunrise * 1000); 
    const sunset = new Date(data.sys.sunset * 1000);


    const sunriseTime = `${leadingZero(sunrise.getHours())}:${leadingZero(sunrise.getMinutes())}:${leadingZero(sunrise.getSeconds())}`
    const sunsetTime = `${leadingZero(sunset.getHours())}:${leadingZero(sunset.getMinutes())}:${leadingZero(sunset.getSeconds())}`

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
    if (city.length === 0) {
        alert('Provide city name to get weather')
    } else {
        getWeather(city)
        .then((data)=> {
            renderWeather(data);
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        })

        // Moving elments
        // 1. set table display to block again
        table.style.display = 'flex'
        // 2. slide table from right
        table.classList.add('slideFromRight');
        // 3. remove slide from left from form
        form.classList.remove('slideFromLeft');
        // 4. slide form to left 
        form.classList.add('slideToLeft');
        
        setTimeout(() => {
            form.style.display = 'none';
        }, 500) 
    }
    
    e.preventDefault();
})

table.addEventListener('click', (e) => {
    // 1. form display block
    setTimeout(() => {
        form.style.display = 'flex';
    }, 200);
    // 2. remove move to left class from form
    form.classList.remove('slideToLeft');
    // 3. add class slide from left to form
    form.classList.add('slideFromLeft');
    // 4. remove from table slide from right
    table.classList.remove('slideFromRight');
    // 5. slide table to right 
    table.classList.add('slideToRight');
    // 5 set table display to none
    setTimeout(() => {
        table.style.display = 'none'
    }, 500);

    // Clear input value for the city name
    document.querySelector('#cityInput').value = '';
})

// ************ BCG ************
const particles = Particles.init({
	selector: '.background',
    color: ['#404B69', '#DBEDF3'],
    connectParticles: true,
    speed: .5,
    minDistance: 10
});