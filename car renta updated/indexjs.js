
const wrapper = document.querySelector('.login-wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.main-btn');
const iconClose = document.querySelector('.ri-close-fill');

registerLink.addEventListener('click', ()=> {
wrapper.classList.add('active');

});

loginLink.addEventListener('click', ()=> {
wrapper.classList.remove('active');

});

btnPopup.addEventListener('click', ()=> {
wrapper.classList.add('active-popup');

});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup')
})

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('ri-close-fill');
    navbar.classList.toggle('active');
}



const sr= ScrollReveal ({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})
sr.reveal('.text',{delay:10,origin:'top'})
sr.reveal('.form-container form',{delay:10,origin:'left'})
sr.reveal('.heading',{delay:10,origin:'top'})
sr.reveal('carscategory',{delay:10,origin:'top'})
sr.reveal('.about-us-container .about-us-photo img',{delay:10,origin:'left'})
sr.reveal('.about-container .about-img img',{delay:10,origin:'left'})
sr.reveal('.carscategory .car-holder a img',{delay:10,origin:'right'})
sr.reveal('.services-container .box',{delay:10,origin:'top'})
sr.reveal('.about-container .box',{delay:10,origin:'top'})
sr.reveal('.reviews-container',{delay:10,origin:'top'})



      // Get the current URL
  var currentUrl = window.location.href;

// Get all navigation links
var navLinks = document.querySelectorAll('.nav-link');

// Loop through each link and check if its href matches the current URL
navLinks.forEach(function(link) {
  if (link.href === currentUrl) {
    // Add 'current-page' class to the link if it matches the current URL
    link.classList.add('current-page');
  }
});