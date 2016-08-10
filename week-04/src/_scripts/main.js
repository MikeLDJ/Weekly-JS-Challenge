var window = document.querySelector('form');
var searchText = '';
var publicKey = 'dc6zaTOxFJmzC';
var error = '';
window.addEventListener('keyup', app);

function app() {
  getSearchText();
  console.log(searchText);
  setTimeout(searchGiphy(), 3000);

}

function isJavaScriptEnabled() {
  document.getElementById('searchState').textContent = 'waiting for input...';
}

function getSearchText() {
  searchText = document.getElementById('searchField').value;
}

function searchGiphy() {
  fetch('http://api.giphy.com/v1/gifs/search?q=' + searchText + '&api_key=' + publicKey)
  .then(function(response) {
    console.log(response);
    return response;
  })
  .then(function() {
    console.log('response for ' + searchText);
    document.getElementById('searchState').textContent = 'ok';
  })
  .catch(error);
}

isJavaScriptEnabled();
