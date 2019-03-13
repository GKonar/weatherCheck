// ************ GET WEATHER REQUEST ************

// ****** using FETCH
// const getWeather = (cityName) => {
//     return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=62c52d877472a0f6d6798ddf466afc6f`, {}).then((response) => {
//         if(response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch data')
//         }
//     })
// };

// ****** using ASYNC function and AWAIT operator

const getWeather = async (cityName) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=62c52d877472a0f6d6798ddf466afc6f`, {});

    if(response.status === 200) {
        const data = await response.json();
        return data
    } else {
        throw new Error('Unable to fetch data');
    }
};



// ****** Country API with callback and XMLHttpRequest object

// ****** Callback ******
// const getCountry = (countryCode, callback) => {
    // const countryRequest = new XMLHttpRequest();

    // countryRequest.addEventListener('readystatechange', (e) => {
    //     if (e.target.readyState === 4 && e.target.status === 200) {
    //         const data = JSON.parse(e.target.responseText)
    //         const country = data.find((country) => country.alpha2Code === countryCode)
    //         callback(country.name, undefined)
    //     } else if (e.target.readyState === 4) {
    //         console.log('Unable to fetch country');
    //         callback(undefined, country.name)
    //     }
    // })

    // countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
    // countryRequest.send();
// }

// ****** Promise ******  
// const getCountry = (countryCode) => {
//    return new Promise((resolve, reject) => {
//         const countryRequest = new XMLHttpRequest();

//         countryRequest.addEventListener('readystatechange', (e) => {
//             if (e.target.readyState === 4 && e.target.status === 200) {
//                 const data = JSON.parse(e.target.responseText);
//                 const country = data.find((country) => country.alpha2Code === countryCode);
//                 resolve(country.name);
//             } else if (e.target.readyState === 4) {
//                 reject('Unable to fetch country');
//             }
//         })
    
//         countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
//         countryRequest.send();
//     })
// }






