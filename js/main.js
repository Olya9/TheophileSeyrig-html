const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const headerInfo = document.querySelector('.header__info');
const burgerItem = burger.querySelectorAll('.header__burger-item');

function openMenu() {
  menu.classList.toggle('menu_active');
  headerInfo.classList.toggle('header_none');
  burger.classList.toggle('header__burger-item_active');
}
burger.addEventListener('click', openMenu);
