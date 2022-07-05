var cityFormEl = document.querySelector('#city-form');
var nameInputEl = document.querySelector('#cityname');
var repoContainerEl = document.querySelector('#repos-container');
var citySearchTerm = document.querySelector('#city-search-term');
var locationCity = document.querySelector('#maincard');
var a1 =document.querySelector('#card1');
var box=[];

var formSubmitHandler = function (event) {
event.preventDefault();

var city = nameInputEl.value.trim();
 if (city) {
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
box=(data);
console.log(data);
let list = document.createElement('ul');
var temp1 = document.createElement('li');
var temp_max = document.createElement('li');
let cloudy = document.createElement('li');
var wind1 = document.createElement('li');
let pressure1 = document.createElement('li');
let moist = document.createElement('li');

temp1.innerText=`Temp: ${box.list[0].main.temp} ℃`;
console.log(temp1)
temp_max.innerText=`Temp: ${box.list[0].main.temp_max} ℃`;
cloudy.innerText= `sky: ${box.list[0].weather.discription} `;
wind1.innerText=`Wind: ${box.list[0].wind.speed} km/hr`;
moist.innerText=`Humidity: ${box.list[0].main.humidity} g/kg`;
pressure1.innerText=`Pressure: ${box.list[0].main.pressure} kPa`;
console.log(pressure1)
let head=document.createElement('h3')
head.innerText= `City : ${box.city.name}`;

locationCity.append(head);
console.log(locationCity)
list.append(temp1);
list.append(temp_max);
list.append(cloudy);
list.append(wind1);
list.append(moist);
list.append(pressure1);
locationCity.append(list);
});
}


// const moment = require('moment');
// let now = moment();
// console.log(now.format("L"));


//function being reiterated for the rest of the days
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
console.log(data);



box=(data);
for ( i=1 ; i<=5 ; i++) {
  let list = document.createElement('ul');
  var temp1 = document.createElement('li');
  var temp_max = document.createElement('li');
  let cloudy = document.createElement('li');
  var wind1 = document.createElement('li');
  let pressure1 = document.createElement('li');
  let moist = document.createElement('li');

  temp1.innerText=`Temp: ${box.list[i].main.temp} ℃`;
temp_max.innerText=`Temp: ${box.list[i].main.temp_max} ℃`;
cloudy.innerText= `sky: ${box.list[i].weather.discription} `;
wind1.innerText=`Wind: ${box.list[i].wind.speed} km/hr`;
moist.innerTextt=`Humidity: ${box.list[i].main.humidity} g/kg`;
pressure1.innerText=`Pressure: ${box.list[i].main.pressure} kPa`;

let id=`day${i}`; 
var customref=document.getElementById(id) 
//customid.append(list);


let head=document.createElement('h3')
//head.textContent= `City : ${box.city.name}`;

// const moment = require('moment');
// let now = moment();
// console.log(now.format("L"));


list.append(temp1);
list.append(temp_max);
list.append(cloudy);
list.append(wind1);
list.append(moist);
list.append(pressure1);
customref.append(list);
customref.append(head);
}
});
}




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