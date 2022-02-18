let navToggle = document.querySelector("#nav-toggle");
let navToggleRect = document.querySelectorAll("rect");
let navMenu = document.querySelector("nav");

navToggleRect.forEach((rect) =>
  navToggle.addEventListener("click", () =>
    rect.classList.toggle("nav-toggle-open")
  )
);

navToggle.addEventListener("click", () => navMenu.classList.toggle("nav-open"));
