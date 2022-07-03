var cityFormEl = document.querySelector('#city-form');
// // var languageButtonsEl = document.querySelector('#language-buttons');
var nameInputEl = document.querySelector('#cityname');
var repoContainerEl = document.querySelector('#repos-container');
var citySearchTerm = document.querySelector('#city-search-term');
var locationCity = document.querySelector('#location');

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


  var requestedUrl ='https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=9b1192177659da66737e8df6341c92d7&units=metric'

  fetch(requestedUrl)
       .then(function (response) {
  //     if (response.ok) {
     return    response.json();})
     .then(function (data) {
         // displayCity(data);
//console.log(data);

box=(data);
console.log(box);
console.log((box.name));
console.log(box.main.temp);
console.log(box.wind.speed);
console.log(box.main.humidity);
console.log(box.main.pressure);
console.log(box.clouds);
console.log(box.rain);
console.log(box.weather[0].main);

var list = document.createElement('ul');
var temp1 = document.createElement('li');
var wind1 = document.createElement('li');
let pressure1 = document.createElement('li');
let moist = document.createElement('li');

temp1.innerText=`Temp: ${box.main.temp}`; 
console.log(temp1)
wind1.textContent=(box.wind.speed);
console.log(wind1)
moist.textContent=(box.main.humidity);
pressure1.textContent=(box.main.pressure);



locationCity.append(list);
list.append(temp1);
locationCity.innerHTML=box.name

list.append(temp1);
list.append(wind1);
list.append(moist);
list.append(pressure1);

locationCity.append(list);

});
}









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