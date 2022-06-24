var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (var i = 0 ; i<data.length; i++)
      var Name=document.createElement('h3');
      var Url=document.createElement('p');
      console.log(data[i]);
      Name.textContent = data[i].login;
      Url.textContent=data[i].url ;
      
      userContainer=document.append(Name);
      userContainer=document.append(Url);
     
    });
}
fetchButton.addEventListener('click', getApi);
