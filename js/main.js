var menuBtn = document.querySelector('.menu-button');
var menuBtnIcon = document.querySelector('.menu-button-closed')
var menuTitle = document.querySelector('.catalog-menu-title');
var menuList = document.querySelector('.catalog-menu-list');


menuBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  menuBtnIcon.classList.toggle('menu-button-opened');
  menuList.classList.toggle('menu-hide');
});
