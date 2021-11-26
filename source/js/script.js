$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,
		autoplay:true,
		speed:1000,
		autoplaySpeed:5000,
		responsive:[
			{
				breakpoint: 1370,
				settings: {
					slidesToShow:3
				}
			},
      {
				breakpoint: 1070,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow:1,
		      dots:true,
          arrows:false,
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.product-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:5000,
    responsive:[
			{
				breakpoint: 500,
				settings: {
					slidesToShow:1,
		      dots:true,
          arrows:false,
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.similar-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:5000,
		responsive:[
			{
				breakpoint: 1280,
				settings: {
					slidesToShow:2
				}
			},
      {
				breakpoint: 960,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow:1,
		      dots:true,
          arrows:false,
				}
			}
		]
	});
});

$(document).ready(function($) {
  $('.tab_content').hide();
  $('.tab_content:last').show();
  $('.tabs li:last').addClass('active');
  $('.tabs li').click(function(event) {
    event.preventDefault();
    $('.tabs li').removeClass('active');
    $(this).addClass('active');
    $('.tab_content').hide();
    var selectTab = $(this).find('a').attr("href");
    $(selectTab).fadeIn();
  });
});

var header = document.getElementById("nav");
var links = header.getElementsByClassName("navigation__link");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("navigation__link--current");
    current[0].className = current[0].className.replace(" navigation__link--current", "");
    this.className += " navigation__link--current";
  });
}

let scrollpos = window.scrollY
const shadow = document.querySelector("header")
const header_height = header.offsetHeight

const add_class_on_scroll = () => shadow.classList.add("header--shadow")
const remove_class_on_scroll = () => shadow.classList.remove("header--shadow")

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
})

function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    e.preventDefault();
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.form__input--tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});
});

var menu = document.querySelector(".navigation__menu");
var nav = document.querySelector(".navigation__list");

nav.classList.add("navigation__list--closed");
menu.classList.add("navigation__menu--off");

menu.addEventListener("click", function() {
  if (nav.classList.contains("navigation__list--closed")) {
    nav.classList.remove("navigation__list--closed");
    nav.classList.add("navigation__list--opened");
    menu.classList.remove("navigation__menu--off");
    menu.classList.add("navigation__menu--on");
  } else {
    nav.classList.remove("navigation__list--opened");
    nav.classList.add("navigation__list--closed");
    menu.classList.remove("navigation__menu--on");
    menu.classList.add("navigation__menu--off");
  }
});

var catalogСaption = document.querySelector(".footer__caption--catalog");
var catalog = document.querySelector(".footer__list--catalog");
var servicesСaption = document.querySelector(".footer__caption--services");
var services = document.querySelector(".footer__list--services");

catalogСaption.classList.add("footer__caption--closed");
servicesСaption.classList.add("footer__caption--closed");
catalog.classList.add("footer__list--off");
services.classList.add("footer__list--off");

servicesСaption.addEventListener("click", function() {
  if (services.classList.contains("footer__list--off")) {
    services.classList.remove("footer__list--off");
    services.classList.add("footer__list--on");
    servicesСaption.classList.remove("footer__caption--closed");
    servicesСaption.classList.add("footer__caption--open");
  } else {
    services.classList.remove("footer__list--on");
    services.classList.add("footer__list--off");
    servicesСaption.classList.remove("footer__caption--open");
    servicesСaption.classList.add("footer__caption--closed");
  }
});

catalogСaption.addEventListener("click", function() {
  if (catalog.classList.contains("footer__list--off")) {
    catalog.classList.remove("footer__list--off");
    catalog.classList.add("footer__list--on");
    catalogСaption.classList.remove("footer__caption--closed");
    catalogСaption.classList.add("footer__caption--open");
  } else {
    catalog.classList.remove("footer__list--on");
    catalog.classList.add("footer__list--off");
    catalogСaption.classList.remove("footer__caption--open");
    catalogСaption.classList.add("footer__caption--closed");
  }
});

// ------каталог----------

var sideCatalogСaption = document.querySelector(".side-menu__caption--catalog");
var sideCatalog = document.querySelector(".side-menu__list--catalog");
var sideServicesСaption = document.querySelector(".side-menu__caption--services");
var sideServices = document.querySelector(".side-menu__list--services");

sideCatalogСaption.classList.add("side-menu__caption--on");
sideServicesСaption.classList.add("side-menu__caption--on");
sideCatalog.classList.add("side-menu__list--on");
sideServices.classList.add("side-menu__list--on");

sideServicesСaption.addEventListener("click", function() {
  if (sideServices.classList.contains("side-menu__list--off")) {
    sideServices.classList.remove("side-menu__list--off");
    sideServices.classList.add("side-menu__list--on");
    sideServicesСaption.classList.remove("side-menu__caption--off");
    sideServicesСaption.classList.add("side-menu__caption--on");
  } else {
    sideServices.classList.remove("side-menu__list--on");
    sideServices.classList.add("side-menu__list--off");
    sideServicesСaption.classList.remove("side-menu__caption--on");
    sideServicesСaption.classList.add("side-menu__caption--off");
  }
});

sideCatalogСaption.addEventListener("click", function() {
  if (sideCatalog.classList.contains("side-menu__list--off")) {
    sideCatalog.classList.remove("side-menu__list--off");
    sideCatalog.classList.add("side-menu__list--on");
    sideCatalogСaption.classList.remove("side-menu__caption--off");
    sideCatalogСaption.classList.add("side-menu__caption--on");
  } else {
    sideCatalog.classList.remove("side-menu__list--on");
    sideCatalog.classList.add("side-menu__list--off");
    sideCatalogСaption.classList.remove("side-menu__caption--on");
    sideCatalogСaption.classList.add("side-menu__caption--off");
  }
});
