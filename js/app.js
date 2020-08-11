const form = document.querySelectorAll("form"),
  dropbtns = document.querySelectorAll("a.dropdown__btn"),
  dropdownContent = document.querySelectorAll(".dropdown__content"),
  navMenu = document.querySelector(".navigation__menu"),
  mobileMenuBtn = document.querySelector(".mobile-bar");

mobileMenuBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  document.querySelector(".navigation").classList.toggle("open");
  mobileMenuBtn.classList.toggle("open");
  navMenu.classList.toggle("active");
});

form.forEach((el) =>
  el.addEventListener("submit", (ev) => {
    ev.preventDefault();
  })
);

// dropdown menu
dropbtns.forEach((el) => {
  el.addEventListener("click", (ev) => {
    let target = ev.target.nextElementSibling;
    target.classList.toggle("db");
    target.addEventListener("click", (ev) => {
      ev.stopPropagation();
    });
  });
});

window.addEventListener("click", (ev) => {
  if (!ev.target.matches(".dropdown__btn")) {
    for (let i of dropdownContent) {
      if (i.classList.contains("db")) {
        console.log(i);
        i.classList.remove("db");
      }
    }
  } else {
    for (let j of dropbtns) {
      if (ev.target !== j) {
        console.log(form[0]);
        j.nextElementSibling.classList.remove("db");
      }
    }
  }
});
