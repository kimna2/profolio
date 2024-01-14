// Menu
const menu = document.querySelector(".navbar__links");
const menuBotton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuBotton.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuBotton.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuBotton.classList.toggle("open");
    overlay.classList.toggle("show");
});
