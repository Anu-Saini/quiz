var cityFormEl = document.querySelector('#city-form');
// // var languageButtonsEl = document.querySelector('#language-buttons');
var nameInputEl = document.querySelector('#cityname');
var repoContainerEl = document.querySelector('#repos-container');
var citySearchTerm = document.querySelector('#city-search-term');
var locationCity = document.querySelector('#card0');
var a1 =document.querySelector('#card1');
var box=[];

var formSubmitHandler = function (event) {
event.preventDefault();

var city = nameInputEl.value.trim();
 if (city) {
  //getCityPool(city);
     repoContainerEl.textContent = '';
     nameInputEl.value = '';
   } else {
     alert('Please enter a City name');
   }


  var requestedUrl ='https://api.openweathermap.org/data/2.5/forecast?q='+city+'&id=524901&appid=9b1192177659da66737e8df6341c92d7&units=metric'

  fetch(requestedUrl)
       .then(function (response) {
  //     if (response.ok) {
     return    response.json();})
     .then(function (data) {
         // displayCity(data);
//console.log(data);

box=(data);
console.log(box);
console.log(box.city.name);
console.log(box.list[0].main.temp);
console.log(box.list[0].main.temp_max);
console.log(box.list[0].main.humidity);
console.log(box.list[0].main.pressure);
console.log(box.list[0].weather.discription);
console.log(box.list[0].wind.speed);


var list = document.createElement('ul');
var temp1 = document.createElement('li');
var temp_max = document.createElement('li');
let cloudy = document.createElement('li');
var wind1 = document.createElement('li');
let pressure1 = document.createElement('li');
let moist = document.createElement('li');


temp1.innerText=`Temp: ${box.list[0].main.temp} ℃`;
temp_max.innerText=`Temp: ${box.list[0].main.temp_max} ℃`;
cloudy.textContent= `sky: ${box.list[0].weather.discription} `;
wind1.textContent=`Wind: ${box.list[0].wind.speed} km/hr`;
moist.textContent=`Humidity: ${box.list[0].main.humidity} g/kg`;
pressure1.textContent=`Pressure: ${box.list[0].main.pressure} kPa`;

let head=document.createElement('h3')
head.textContent= `City : ${box.city.name}`;

// const moment = require('moment');
// let now = moment();
// console.log(now.format("L"));

locationCity.append(list);
//list.append(temp1);
locationCity.append(head);

list.append(temp1);
list.append(temp_max);
list.append(cloudy);
list.append(wind1);
list.append(moist);
list.append(pressure1);

locationCity.append(list);

});
}

//function being reiterated for the rest of the days

var requestedUrl ='https://api.openweathermap.org/data/2.5/forecast?q='+city+'&id=524901&appid=9b1192177659da66737e8df6341c92d7&units=metric'

  fetch(requestedUrl)
       .then(function (response) {
  //     if (response.ok) {
     return    response.json();})
     .then(function (data) {
         // displayCity(data);
//console.log(data);

var list = document.createElement('ul');
var temp1 = document.createElement('li');
var temp_max = document.createElement('li');
let cloudy = document.createElement('li');
var wind1 = document.createElement('li');
let pressure1 = document.createElement('li');
let moist = document.createElement('li');

for ( i=1 ; i<5 ; i++) {
temp1.innerText=`Temp: ${box.list[i].main.temp} ℃`;
temp_max.innerText=`Temp: ${box.list[i].main.temp_max} ℃`;
cloudy.textContent= `sky: ${box.list[i].weather.discription} `;
wind1.textContent=`Wind: ${box.list[i].wind.speed} km/hr`;
moist.textContent=`Humidity: ${box.list[i].main.humidity} g/kg`;
pressure1.textContent=`Pressure: ${box.list[i].main.pressure} kPa`;

let head=document.createElement('h3')
head.textContent= `City : ${box.city.name}`;

// const moment = require('moment');
// let now = moment();
// console.log(now.format("L"));

a[i].append(list);
a[i].append(head);

list.append(temp1);
list.append(temp_max);
list.append(cloudy);
list.append(wind1);
list.append(moist);
list.append(pressure1);
console.log(pressure)
}
});





//localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
//renderMessage();







//                } else {
//          alert('Error: ' + response.statusText);
//        }
//     })
//      .catch(function (error) {
//        alert('Unable to connect to Weather App');
//      });
// };
// var cardList =document.getElementById(card)

//  citySearchTerm.textContent = searchTerm;

//   for (var i = 0; i < getCityPool.length; i++) {
//     var SelectedCity = getCityPool[i];

//     var ulEl = document.createElement('ul');
//     var liEl=document.createElement('li');
//     liEl.textContent =(SelectedCity);
//     ulEl.appendChild(liEl);

cityFormEl.addEventListener('submit', formSubmitHandler)