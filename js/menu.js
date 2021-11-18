const menuBtn = document.getElementById("menu-btn");
const links = document.getElementById("links");


menuBtn.addEventListener("click", displayDate);

function displayDate() {
  menuBtn.classList.toggle("open");
  links.classList.toggle("open");
}