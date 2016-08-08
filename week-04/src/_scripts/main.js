var window = document.querySelector('form');

window.addEventListener('keyup', app);

function app() {
  console.log('app is working');
}

function isJavaScriptEnabled() {
  document.getElementById('searchState').textContent = 'waiting for input...';
}

isJavaScriptEnabled();
