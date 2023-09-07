"use strict";

const sections = document.querySelectorAll("section");
const navItem = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 10) {
      current = section.getAttribute("id");
    }
  });

  navItem.forEach((li) => {
    const link = li.querySelector("a");
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
