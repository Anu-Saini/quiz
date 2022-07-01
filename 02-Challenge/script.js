var cityFormEl = document.querySelector('#city-form');
// var languageButtonsEl = document.querySelector('#language-buttons');
var nameInputEl = document.querySelector('#cityname');
var repoContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

var formSubmitHandler = function (event) {
   event.preventDefault();

  var city = nameInputEl.value.trim();

 if (city) {
  getCityPool(city);

     repoContainerEl.textContent = '';
     nameInputEl.value = '';
   } else {
     alert('Please enter a City name');
   }
 };


  var requestedUrl ='https://pro.openweathermap.org/data/2.5/forecast/hourly?q=' + nameInputEl + '&appid=9b1192177659da66737e8df6341c92d7';
console.log(requestedUrl);

  fetch(requestedUrl)
     .then(function (response) {
       if (response.ok) {
        response.json().then(function (data) {
        displayCity(data);
       });
               } else {
         alert('Error: ' + response.statusText);
       }
    })
     .catch(function (error) {
       alert('Unable to connect to Weather App');
     });
 
var cardList =document.getElementById(card)

 repoSearchTerm.textContent = searchTerm;

  for (var i = 0; i < getCityPool.length; i++) {
    var SelectedCity = getCityPool[i];

    var ulEl = document.createElement('ul');
    var liEl=document.createElement('li');
    liEl.textContent =(SelectedCity);
    ulEl.appendChild(liEl);
  }
cityFormEl.addEventListener('submit', formSubmitHandler)
