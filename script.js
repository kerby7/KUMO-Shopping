
/* Javascript files */

/* 1. Sticky header */
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", this.window.scrollY > 0);
})


/* Click configuration on navbar for mobile-site */
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-x');
  navmenu.classList.toggle('open');
}