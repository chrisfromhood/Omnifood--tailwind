///////////////////////////////////////////////////////////
// Make mobile navigation work

const burger = document.getElementById("burger");
const menu = document.getElementById("mobile-menu");

burger.addEventListener("click", () => {
  if (menu.classList.contains("main-mobile-nav--hidden")) {
    menu.classList.remove("main-mobile-nav--hidden");
  } else {
    menu.classList.add("main-mobile-nav--hidden");
  }
});

///////////////////////////////////////////////////////////
// Sticky navigation


const sectionHeroEl = document.getElementById("section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.getElementById("header").classList.add("sticky")
    }

    if (ent.isIntersecting === true) {
      document.getElementById("header").classList.remove("sticky")
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////