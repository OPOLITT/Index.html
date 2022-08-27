"use strict";

// // const sum = require("./module/sum.js");
// const togglemenu = require("./module/toggle.js");
// togglemenu();
// Open Burger
var menuBurgerItem = document.querySelector(".body-burger__item");
var menuBurger = document.querySelector(".menu__burger-open");
var activated = document.querySelector(".activated");
menuBurgerItem.addEventListener("click", function () {
  menuBurger.classList.toggle("activated");
  menuBurgerItem.classList.toggle("opened");
});
var Catalog = document.querySelector(".menu__burger-open-second");
var MenuOpenCatalog = document.querySelector(".burger-open__item-arrow");
var close = document.querySelector(".close");
MenuOpenCatalog.addEventListener('click', function () {
  Catalog.classList.add('activated');
  menuBurgerItem.classList.add('hide');
});
close.addEventListener('click', function () {
  Catalog.classList.remove('activated');
  menuBurgerItem.classList.remove('hide');
}); // Open Phones

var arrow = document.querySelector(".arrow");
var hide = document.querySelector('.hide');
var rotate = document.querySelector('.rotate');
var list = document.querySelector('.phones-header__list');
var active = document.querySelector('.active');
arrow.addEventListener("click", function () {
  list.classList.toggle('hide');
  arrow.classList.toggle('rotate');
}); //
// Open subMenu

document.addEventListener("click", documentActions);

function documentActions(e) {
  var targetElement = e.target;

  if (targetElement.closest('[data-parent]')) {
    var subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
    var subMenu = document.querySelector("[data-submenu=\"".concat(subMenuId, "\"]"));

    if (subMenu) {
      targetElement.classList.toggle('active');
      subMenu.classList.toggle('hide');
    } else {}

    e.preventDefault();
  }
} // Swiper


var Swiper1 = new Swiper('.body-main__swiper', {
  pagination: {
    el: '.body-main__swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 2000
  },
  loop: true,
  speed: 500,
  spaceBetween: 150
});
var Swiper2 = new Swiper('.swiper-bestsellers', {
  pagination: {
    el: '.swiper-bestsellers__swiper-pagination',
    clickable: true
  },
  speed: 700,
  spaceBetween: 50
});
var Swiper3 = new Swiper('.body-novelties__swiper', {
  pagination: {
    el: '.swiper-bestsellers__swiper-pagination',
    clickable: true
  },
  speed: 700,
  spaceBetween: 50
});
var Swiper4 = new Swiper('.swiper-sale', {
  pagination: {
    el: '.swiper-bestsellers__swiper-pagination',
    clickable: true
  },
  speed: 700,
  spaceBetween: 50
});