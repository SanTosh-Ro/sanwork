
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    closer.style.display = "block";
    navbar.classList.toggle('active');
    cart.classList.remove('active');
  login.classList.remove('active');

}
let cart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    closer.style.display = "block";
    cart.classList.toggle('active');
    navbar.classList.remove('active');
  login.classList.remove('active');

}
let login = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    closer.style.display = "block";
    login.classList.toggle('active');
    navbar.classList.remove('active');
  cart.classList.remove('active');

}
let searchForm = document.querySelector('.header .search-form');
document.querySelector('#search-btn').onclick = () => {
    
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
  cart.classList.remove('active');
  login.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active')
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next( ){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev( ){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.lenght) % slides.length;
    slides[index].classList.add('active');
}


