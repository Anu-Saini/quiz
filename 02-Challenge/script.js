var cityFormEl = document.querySelector('#city-form');
var nameInputEl = document.querySelector('#cityname');
var repoContainerEl = document.querySelector('#repos-container');
var citySearchTerm = document.querySelector('#city-search-term');
var locationCity = document.querySelector('#maincard');
var a1 =document.querySelector('#card1');
var box=[];

let list = document.createElement('ul');

var temp1 = document.createElement('li');
var temp_max = document.createElement('li');
let cloudy = document.createElement('li');
var wind1 = document.createElement('li');
let pressure1 = document.createElement('li');
let moist = document.createElement('li');
let head=document.createElement('h5')

//for city list counter
var cityList = document.querySelector('#city-list')

var cities=[];
function renderCity() {
cityList.innerHTML = "";
const length = cities.length >5?5:cities.length;

for (var i=0;i<length;i++){
  var li=document.createElement('li');
  let a=document.createElement('a');
  a.onclick=function(){
   inputCity(cities[i]);}
  a.textContent=cities[i];
  li.setAttribute("data-index",i);
    li.appendChild(a);
  cityList.appendChild(li);
}
}

var formSubmitHandler = function (event) {
event.preventDefault();

var city = nameInputEl.value.trim();
 if (city) {
      repoContainerEl.textContent = '';
     nameInputEl.value = '';
     cities.push(city);
     inputCity(city);
    
   } else {
     alert('Please enter a City name');
   }
 }  
  
  function inputCity(city){
   var requestedUrl ='https://api.openweathermap.org/data/2.5/forecast?q='+city+'&id=524901&appid=9b1192177659da66737e8df6341c92d7&units=metric'

  fetch(requestedUrl)
       .then(function (response) {
  //     if (response.ok) {
     return    response.json();})
     .then(function (data) {
box=(data);
console.log(data);

var today = moment().format("DD/MM/YYYY");


temp1.innerText=`Temp: ${box.list[0].main.temp} ℃`;
temp_max.innerText=`Temp: ${box.list[0].main.temp_max} ℃`;
cloudy.innerText= `sky: ${box.list[0].weather.discription} `;
wind1.innerText=`Wind: ${box.list[0].wind.speed} km/hr`;
moist.innerText=`Humidity: ${box.list[0].main.humidity} g/kg`;
pressure1.innerText=`Pressure: ${box.list[0].main.pressure} kPa`;

head.innerText= `City : ${box.city.name}  ( on ${today} )`;

locationCity.append(head);
console.log(locationCity)
list.append(temp1);
list.append(temp_max);
list.append(cloudy);
list.append(wind1);
list.append(moist);
list.append(pressure1);
locationCity.append(list);


for ( i=1 ; i<=5 ; i++) {
  let list_ = document.createElement('ul');
  var temp1_ = document.createElement('li');
  var temp_max_ = document.createElement('li');
  let cloudy_ = document.createElement('li');
  var wind1_ = document.createElement('li');
  let pressure1_ = document.createElement('li');
  let moist_ = document.createElement('li');
  let date = document.createElement('h5');

temp1_.innerText=`Temp: ${box.list[i].main.temp} ℃`;
temp_max_.innerText=`Temp: ${box.list[i].main.temp_max} ℃`;
cloudy_.innerText= `sky: ${box.list[i].weather.discription} `;
wind1_.innerText=`Wind: ${box.list[i].wind.speed} km/hr`;
moist_.innerTextt=`Humidity: ${box.list[i].main.humidity} g/kg`;
pressure1_.innerText=`Pressure: ${box.list[i].main.pressure} kPa`;

var duedate=moment().add(i,'days').format("DD/MM/YYYY"); 
date.innerText=`${duedate}`;

console.log(duedate);

let id=`day${i}`; 

var customref=document.getElementById(id) 
//customid.append(list);


let head_=document.createElement('h3')
//head.textContent= `City : ${box.city.name}`;

// const moment = require('moment');
// let now = moment();
// console.log(now.format("L"));

list_.append(date);
list_.append(temp1_);
list_.append(temp_max_);
list_.append(cloudy_);
list_.append(wind1_);
list_.append(moist_);
list_.append(pressure1_);
const prevChild = customref.getElementsByTagName('ul');
if(prevChild.length > 0)
  customref.removeChild(customref.getElementsByTagName('ul')[0]);
  customref.append(list_);
customref.append(head_);
}
});
renderCity()
};

cityFormEl.addEventListener('submit', formSubmitHandler)





//var today = moment();
//$("#maincard").text(today.format("dd, MM, YYYY"));





