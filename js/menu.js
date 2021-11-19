const menuBtn = document.getElementById('menu-btn');
const links = document.getElementById('links');

function displayDate() {
  menuBtn.classList.toggle('open');
  links.classList.toggle('open');
}

menuBtn.addEventListener('click', displayDate);