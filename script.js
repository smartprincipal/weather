const menu = document.querySelector('.menu')
const cancel = document.querySelector('.close')
const menuIcon = document.querySelector('.hamburger')
const logo = document.querySelector('.logo')


menuIcon.addEventListener('click' ,() => {
 menuIcon.classList.toggle('deactive')
 menu.classList.toggle('show-menu')
 cancel.classList.toggle('show-close')
 logo.classList.toggle('deactive')
})

cancel.addEventListener('click', () => {
 cancel.classList.toggle('show-close')
 menu.classList.toggle('show-menu')
 menuIcon.classList.toggle('deactive')
 logo.classList.toggle('deactive')
})

let getUserLocation = () => {

 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getWeatherAPI)
  }
  else{
    alert("oops sorry")
  }
   
   
  };


let apiKey= '9c324df5a674b284755eae3dadb30b0f'
let baseURL = 'https://api.openweathermap.org/data/2.5/weather'


let getWeatherAPI  = (position) => {
 fetch(
  `${baseURL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`
)
.then((res) => res.json())
.then ((data) => {
  JSON.stringify(data)
  var para = document.getElementById('myCountry')
  para.innerText = JSON.stringify(data)
  var img = document.getElementById('img')
  img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
  var country = document.getElementById('countryName')
  country.innerText = "Country:" +" " + (data.sys.country)
  var wind = document.getElementById('wind')
  wind.innerText="Windspeed:" + " " + JSON.stringify(data.wind.speed)+ "km"
  var gets = document.getElementById('gets')
  gets.innerText = (data.weather.main)
})
 }


getUserLocation()