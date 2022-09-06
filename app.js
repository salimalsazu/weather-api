//Dont show API key on your JS file 
const API_KEY = `e751aaba9e0c4f62902135045220509`;

const loadTemp = (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemmp(data))
}


const displayTemmp = (weather) => {
    const temp = document.getElementById('contain');
    temp.innerHTML = `
    <img src=" ${weather.current.condition.icon}" alt="">
    <h1>${weather.location.name}</h1>
    <p> Current Temperature:  ${weather.current.temp_c ? weather.current.temp_c : 'Temp not found'}</p>
    <p> Feels Like:  ${weather.current.feelslike_c ? weather.current.feelslike_c : 'Temp not Found'}</p>
    <p> Current Condition:  ${weather.current.condition.text}</p>
    <p> Humidity:  ${weather.current.humidity}</p>
    <p> Wind:  ${weather.current.wind_kph}<span>Km</span></p>
    <h4> Region: ${weather.location.region ? weather.location.region : 'not Found'}</h4>
    <p> Country: ${weather.location.country ? weather.location.country : 'not found '}</p>
    <p> Local Time: ${weather.location.localtime ? weather.location.localtime : 'not Found'}</p>       
    `
}


function btn() {
    const searchFiled = document.getElementById('search-filed');
    const seacrText = searchFiled.value;
    searchFiled.value = "";
    loadTemp(seacrText);
}


// loadTemp();

