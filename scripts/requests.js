// ************ GET WEATHER REQUEST ************
getWeather = (cityName) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=62c52d877472a0f6d6798ddf466afc6f`, {}).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    })
}