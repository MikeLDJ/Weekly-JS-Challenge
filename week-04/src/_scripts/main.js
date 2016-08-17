var window = document.querySelector('form');
var searchText = '';
var publicKey = 'dc6zaTOxFJmzC';
var error = '';

window.addEventListener('keyup', debounce(app, 500));

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

function app() {
  getSearchText();
  console.log(searchText);
  searchGiphy();

}

function isJavaScriptEnabled() {
  document.getElementById('searchState').textContent = 'waiting for input....';
}

function getSearchText() {
  searchText = document.getElementById('searchField').value;
}

function searchGiphy() {
  fetch('http://api.giphy.com/v1/gifs/search?q=' + searchText + '&api_key=' + publicKey)
  .then(function(response) {
    return response.json();
  })
  .then(function(o) {
    console.log(o.data.length);
    console.log(o.data[0]);
    document.getElementById('searchState').textContent = o.data[0];
  })
  .catch(function(error){
    document.getElementById('searchState').textContent = "error";
  });
}


isJavaScriptEnabled();
