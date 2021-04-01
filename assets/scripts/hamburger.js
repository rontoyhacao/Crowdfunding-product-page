const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
    hamburger.classList.toggle('open');
});