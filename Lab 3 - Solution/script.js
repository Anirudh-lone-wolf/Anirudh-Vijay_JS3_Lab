
let searchBox = document.getElementById('search-city')
searchBox.addEventListener('keypress',(e) => {
    if(e.keyCode == 13){
        getWeatherData(searchBox.value)
    }
})

function getWeatherData(cityName){
    let apiKey = "7e3f21edee540e6110af347b55eb1ab2";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(res => {
        displayWeaherData(res)
    })
}

function displayWeaherData(weatherData) {

    let city = document.querySelector(".city")

    let date = document.querySelector(".date")

    let temp = document.querySelector(".temp")

    let weather = document.querySelector(".weather")

    let hilow = document.querySelector(".hi-low")

    city.innerText = `${weatherData.name}, ${weatherData.sys.country}`
    temp.innerText = `${Math.round( weatherData.main.temp )}°C`
    weather.innerText = `${weatherData.weather[0].main}`

    hilow.innerText = `${Math.round( weatherData.main.temp_min )}°C`
    date.innerText = getTodaysDate()

}

function getTodaysDate() {
    let date = new Date();
    let months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    return `${day} ${date.getDate()} ${month} ${date.getFullYear()}`
     
}