function windowLoaded() {
  document.getElementById('button-1').addEventListener('click', buttonClicked);
}

function buttonClicked() {
  document.getElementById('button-1').classList.toggle('is-red');
}
window.onload = windowLoaded;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(32);
  circle(mouseX, mouseY, 50);
}
function setNewImg() {
    document.getElementById('first-img').src='../img/Resume.pdf';
}

function setOldImg() {
    document.getElementById('first-img').src='../img/Profile.jpeg';
}
