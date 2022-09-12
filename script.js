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
  navigator.geolocation.getCurrentPosition((position) => {
   latitude = position.coords.latitude
   longitude =  position.coords.longitude
   console.log(position)
  })

 }else{
  alert('Geolocation is not supported')

 }
} 

let apiKey= '9c324df5a674b284755eae3dadb30b0f'
let baseURL = 'https://api.openweathermap.org/data/2.5/weather'


let getWeatherAPI  = (position) => {
 fetch(
  `${baseURL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`
)
.then((res) => res.json())
.then ((data) => {
  // JSON.stringify(data)
  // console.log(data)
 let country = document.querySelector('.country')
 country.innerText = JSON.stringify(data)
})
 }


 function showweather(data) {
  let{humidity pressure sunrise}
 }
 getUserLocation()