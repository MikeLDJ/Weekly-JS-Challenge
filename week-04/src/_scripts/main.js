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

function videoElement(data) {
  var video = '';
  var videoBox = document.createElement('video');
  video.src = data;
  return videoBox;
}

function searchGiphy() {
  fetch('http://api.giphy.com/v1/gifs/search?q=' + searchText + '&api_key=' + publicKey)
  .then(function(response) {
    return response.json();
  })
  .then(function(o) {
    var videoPath = o.data[0].images.original.mp4;

    console.log(o.data.length);
    console.log(videoPath);
    console.log(typeof (videoElement(videoPath)));

    /* todo
    - append video
    - loop json
    */



    document.getElementById('searchState').textContent = "result:";
    document.getElementById('searchState').appendChild(videoElement(videoPath));
  })
  .catch(function(error){
    document.getElementById('searchState').textContent = error;
  });
}

isJavaScriptEnabled();
