function windowLoaded() {
  document.getElementById('button-1').addEventListener('click', buttonClicked);
}

function buttonClicked() {
  document.getElementById('button-1').classList.toggle('is-red');
}
window.onload = windowLoaded;

const para = document.querySelector('p');
