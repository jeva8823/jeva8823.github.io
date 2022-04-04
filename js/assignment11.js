function windowLoaded() {
  document.getElementById('button-1').addEventListener('click', buttonClicked);
}

function buttonClicked() {
  document.getElementById('button-1').classList.toggle('is-red');
}
window.onload = windowLoaded;

// Personalized welcome

let myButton = document.querySelector('user');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
