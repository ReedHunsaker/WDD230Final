const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//slider code
var slider = document.getElementById("slider");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = slideList.querySelectorAll("li").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});
var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };
var nextSlide = function() {
if(count < items) {
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
}
else if(count = items) {
    slideList.style.left = "0px";
    count = 1;
}
};
next.addEventListener("click", function() {
    nextSlide();
  });
  
prev.addEventListener("click", function() {
prevSlide();
});
setInterval(function() {
    nextSlide()
  }, 5000);

let api = "https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=e47ecba314efb7db195383d977b50984"


fetch(api)
.then( function (action) {
  return action.json()
})
.then(function (jsonData){
  console.log(jsonData)
  setTodayWeather(jsonData)
})

function setTodayWeather(jsonData) {
  //set image
  getImage(jsonData)
  //get todays high and low weather
  let main = jsonData.main
  getHighandLow(main)
}

function getImage(jsonData){
  let picture = jsonData.weather[0].icon
  let iconURL = `http://openweathermap.org/img/wn/${picture}@2x.png`
  console.log(iconURL)
  let weatherimg = document.getElementById("weatherimg")
  let imgElement = document.createElement("img")
  imgElement.src = iconURL
  imgElement.alt = "Weather Icon"
  weatherimg.appendChild(imgElement)
}

function getHighandLow(main){
  let high = document.getElementById("weatherh")
  let low = document.getElementById("weatherl")
  high.textContent = k2f(main.temp_max)
  low.textContent = k2f(main.temp_min) 
}

function k2f(k) {
  return c2f(k - 273.15)
}
function c2f(c) {
  return Math.round((c * (9/5)) + 32)
}

let api2 =`https://api.openweathermap.org/data/2.5/onecall?lat=38.9847&lon=-77.0947&exclude=hourly&appid=e47ecba314efb7db195383d977b50984`

fetch(api2)
.then( function (action) {
  return action.json()
})
.then(function (jsonData){
  console.log(jsonData)
  getForcast(jsonData)
})

setDays()


function getForcast(jsonData) {

  for (let i = 1; i < 4; i++) {
    dayForcast(i,jsonData.daily[i])
  }
}

function dayForcast(day, data) {
  let dayimg = document.getElementById(`day${day}img`)
  let daytemph = document.getElementById(`day${day}temph`)
  let daytempl = document.getElementById(`day${day}templ`)
  let picture = data.weather[0].icon
  let iconURL = `http://openweathermap.org/img/wn/${picture}@2x.png`
  daytemph.textContent = k2f(data.temp.max)
  daytempl.textContent = k2f(data.temp.min)
  let imgElement = document.createElement("img")
  imgElement.src = iconURL
  imgElement.alt = `Weather Icon ${day}`
  dayimg.appendChild(imgElement)
} 

function getDay(dayOffset) {
  let options = {month: 'long', day: 'numeric' };
  let tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + dayOffset)
  let day = tomorrow.toLocaleDateString("en-US", options)
  return day
}

function setDays(){
  let todayDate = document.getElementById("todayDate")
  todayDate.textContent = getDay(0)
  for (let i = 1; i < 4; i++) {
    let day = document.getElementById(`day${i}`)
    day.textContent = getDay(i)
  }
}
""
reserve = document.getElementById("reserve")
reserve1 = document.getElementById("reserve1")

reserve.addEventListener('click', reserveBtn)
reserve1.addEventListener('click', reserveBtn)

function reserveBtn() {
  location.href = "Reservation/reservation.html"
}