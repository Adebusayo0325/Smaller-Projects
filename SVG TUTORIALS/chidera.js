const navBtn = document.querySelector(".nav-btn");
const navbar = document.querySelector(".navbar");
const closeNavBtn = document.querySelector(".close-nav");

function showNav() {
  navbar.classList.add("show-nav");
}

navBtn.addEventListener("click", showNav);

closeNavBtn.addEventListener("click", function () {
    navbar.classList.remove("show-nav");
/*  document.querySelector("div").classList.remove("show-nav");*/
});
