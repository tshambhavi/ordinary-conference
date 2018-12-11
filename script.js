const toggler = document.querySelector(".open-menu");
const navContainer = document.querySelector(".nav-container");

function showNav() {
  toggler.classList.toggle("js-active");
  navContainer.classList.toggle("js-open");
}

toggler.addEventListener("click", showNav);
