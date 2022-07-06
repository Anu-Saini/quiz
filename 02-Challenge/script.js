var cityFormEl = document.querySelector('#city-form');
var nameInputEl = document.querySelector('#cityname');
var repoContainerEl = document.querySelector('#repos-container');
var citySearchTerm = document.querySelector('#city-search-term');
var locationCity = document.querySelector('#maincard');
var cityls=document.querySelector('#citylist');



//var a1 =document.querySelector('#card1');
var box=[];

let cities=[];

function storeSearchCity(city) {
 let ls=localStorage.getItem('city');
 if (ls){
  const arr = ls.split(",");
  if(!arr.find(x => x == city))
  {
      ls += `${city},`
      localStorage.setItem('city', JSON.stringify(ls));
cities=ls.split(",");
    }} else {
   localStorage.setItem('city', JSON.stringify(`${city},`))
   }
 }
var formSubmitHandler = function (event) {
event.preventDefault();

var city = nameInputEl.value.trim();
 if (city) {
storeSearchCity(city);  
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
let date=document.createElement('h3');

var date1 = new Date(box.list[0].dt); // Thu Jan 01 1970 05:30:
moment(date1).format('dd/MM/yyyy')
console.log(date1)

//date.innerText=`As on ${moment(date1).format('DD/mm/yyyy')}`;
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
date.innerText=`As on ${moment(date1).format('DD/mm/yyyy')}`;


console.log(date)
//var string dateString=int.Parse("date").ToString("dd/MM/yyyy"); 


locationCity.append(head);
locationCity.append(date);

console.log(locationCity)
locationCity.append(list);
list.appendChild(temp1);
list.appendChild(temp_max);
list.appendChild(cloudy);
list.appendChild(wind1);
list.appendChild(moist);
list.appendChild(pressure1);


for ( i=1 ; i<=5 ; i++) {
  let listnu = document.createElement('ul');
  var tempnu = document.createElement('li');
  var temp_maxnu = document.createElement('li');
  let cloudynu = document.createElement('li');
  var windnu = document.createElement('li');
  let pressurenu = document.createElement('li');
  let moistnu = document.createElement('li');
  let datenu = document.createElement('li');

var date2 = new Date(box.list[i].dt); // Thu Jan 01 1970 05:30:
moment(date2).format('dd/MM/yyyy')
console.log(date2)

datenu.innerText=`${moment(date2).format('DD/mm/yyyy')}`;
tempnu.innerText=`Temp: ${box.list[i].main.temp} ℃`;
temp_maxnu.innerText=`Max. Temp: ${box.list[i].main.temp_max} ℃`;
cloudynu.innerText= `sky: ${box.list[i].weather.discription} `;
windnu.innerText=`Wind: ${box.list[i].wind.speed} km/hr`;
moistnu.innerTextt=`Humidity: ${box.list[i].main.humidity} g/kg`;
pressurenu.innerText=`Pressure: ${box.list[i].main.pressure} kPa`;

let id=`day${i}`; 
var customref=document.getElementById(id) 
//customid.append(list);


//let head=document.createElement('h3')
//head.textContent= `City : ${box.city.name}`;
// const moment = require('moment');
// let now = moment();
// console.log(now.format("L"));

listnu.append(datenu);
listnu.append(tempnu);
listnu.append(temp_maxnu);
listnu.append(cloudynu);
listnu.append(windnu);
listnu.append(moistnu);
listnu.append(pressurenu);
customref.append(listnu);
//customref.append(head);
}});
}

function displayCity () {
  cities.forEach(x=> {
    let ulnew=document.createElement('ul')
    let divnew = document.createElement('li')
    divnew.innercontent=(x);
    ulnew.textContent=(divnew)
    var list=document.getElementById(citylist)
    ulnew.append(divnew);
    list.append(ulnew);
  })
};
displayCity();

cityFormEl.addEventListener('submit', formSubmitHandler)