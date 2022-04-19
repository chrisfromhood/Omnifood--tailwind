///////////////////////////////////////////////////////////
// Make mobile navigation work

const burger = document.querySelector('#burger');
const menu = document.querySelector('#mobile-menu');

burger.addEventListener("click", () => {
  if (menu.classList.contains("main-mobile-nav--hidden")) {
    menu.classList.remove("main-mobile-nav--hidden");
  } else {
    menu.classList.add("main-mobile-nav--hidden");
  }
});

///////////////////////////////////////////////////////////