/* Sidebar */
document.getElementById('burger').addEventListener('click', openNav);
document.getElementById('overlay').addEventListener('click', closeNav);

/* Expanding the sidebar */
function openNav() {
  document.getElementById("sidenavigation").style.width = "250px";
  document.getElementById("overlay").style.display = "block";
  console.log('hamburger clicked open, overlay on');
}

/* Minimizing the sidebar */
function closeNav() {
  document.getElementById("sidenavigation").style.width = "0";
  document.getElementById("overlay").style.display = "none";
  console.log('hamburger clicked closed, overlay off');
}

/* About-Resume*/
function setNewImg() {
    document.getElementById('first-img').src='./img/Resume.png';
}

function setOldImg() {
    document.getElementById('first-img').src='./img/Profile.jpeg';
}
