// Ham
const ham = document.querySelector('#ham');
const navMenu = document.querySelector('#nav-menu');

ham.addEventListener('click', function() {
   ham.classList.toggle('ham-active');
   navMenu.classList.toggle('hidden');
});

// Navbar
window.onscroll = function() {
     const header = document.querySelector('header');
     const fixedNav = header.offsetTop;

     if (window.pageYOffset > fixedNav) {
          header.classList.add('navbar-fixed');
     } else {
          header.classList.remove('navbar-fixed');
     }
}