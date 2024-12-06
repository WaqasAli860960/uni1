// JavaScript for menu toggle
const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("open"); // Toggle the menu visibility
});
