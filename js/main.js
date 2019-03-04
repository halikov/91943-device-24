var menuBtn = document.querySelector('.menu-button');
var menuBtnIcon = document.querySelector('.menu-button-closed')
var menuTitle = document.querySelector('.catalog-menu-title');
var menuList = document.querySelector('.catalog-menu-list');

menuBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  menuBtnIcon.classList.toggle('menu-button-opened');
  menuList.classList.toggle('menu-hide');
});


var slide1 = document.querySelector('.slide-1');
var slide2 = document.querySelector('.slide-2');
var slide3 = document.querySelector('.slide-3');

var slideDot1 = document.querySelector('.slider-dot-1');
var slideDot2 = document.querySelector('.slider-dot-2');
var slideDot3 = document.querySelector('.slider-dot-3');

slideDot1.addEventListener('click', function(evt) {
  // evt.preventDefault();
  slide1.classList.remove('slide-hidden');
  slide2.classList.add('slide-hidden');
  slide3.classList.add('slide-hidden');
});

slideDot2.addEventListener('click', function(evt) {
  // evt.preventDefault();
  slide2.classList.remove('slide-hidden');
  slide1.classList.add('slide-hidden');
  slide3.classList.add('slide-hidden');
});

slideDot3.addEventListener('click', function(evt) {
  // evt.preventDefault();
  slide3.classList.remove('slide-hidden');
  slide1.classList.add('slide-hidden');
  slide2.classList.add('slide-hidden');
});


var deliveryBtn = document.querySelector('.delivery-slide-btn'); 
var warrantyBtn = document.querySelector('.warranty-slide-btn'); 
var creditBtn = document.querySelector('.credit-slide-btn'); 

var deliverySlide = document.querySelector('.services-slide-1'); 
var warrantySlide = document.querySelector('.services-slide-2'); 
var creditSlide = document.querySelector('.services-slide-3'); 

deliveryBtn.addEventListener('click', function(evt) {
  evt.preventDefault(evt);

  deliveryBtn.classList.add('pressed');
  warrantyBtn.classList.remove('pressed');
  creditBtn.classList.remove('pressed');

  deliverySlide.classList.remove('services-slide-hidden');
  warrantySlide.classList.add('services-slide-hidden');
  creditSlide.classList.add('services-slide-hidden');

});

warrantyBtn.addEventListener('click', function(evt) {
  evt.preventDefault(evt);

  warrantyBtn.classList.add('pressed');
  deliveryBtn.classList.remove('pressed');
  creditBtn.classList.remove('pressed');

  warrantySlide.classList.remove('services-slide-hidden');
  deliverySlide.classList.add('services-slide-hidden');
  creditSlide.classList.add('services-slide-hidden');
  
});

creditBtn.addEventListener('click', function(evt) {
  evt.preventDefault(evt);

  creditBtn.classList.add('pressed');
  deliveryBtn.classList.remove('pressed');
  warrantyBtn.classList.remove('pressed');

  creditSlide.classList.remove('services-slide-hidden');
  deliverySlide.classList.add('services-slide-hidden');
  warrantySlide.classList.add('services-slide-hidden');

});
