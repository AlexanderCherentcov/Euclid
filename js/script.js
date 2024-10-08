// Search Form Toggle
document.querySelector(".btn-open").addEventListener("click", function() {
  document.querySelector(".form__search").classList.add("form__active");
  this.classList.add("active");
});

document.querySelector(".btn-closed").addEventListener("click", function() {
  document.querySelector(".form__search").classList.remove("form__active");
});

// Burger Menu Toggle
document.querySelector(".header__menu-burger").addEventListener("click", function() {
  document.querySelector(".header__menu").classList.add("active");
});

document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".header__menu").classList.remove("active");
});

// Swiper Initialization
const container = document.querySelector(".container");
const swiper = new Swiper('.hero__swiper', {
  // Default parameters
  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }
});

// Tabs Navigation
document.querySelectorAll('.tabs-nav-btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav-btn').forEach(function(btn) {
      btn.classList.remove('tabs-nav-btn--active');
    });
    e.currentTarget.classList.add('tabs-nav-btn--active');

    document.querySelectorAll('.tabs-item').forEach(function(tabsItem) {
      tabsItem.classList.remove('tabs-item--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// Accordion
$( function() {
  $( ".accordion__list" ).accordion({
     icons: false,
     heightStyle: "content",
     collapsible: true,
     active: false
   });
    
} ); 

// Hover Detection for Touch Devices
if (('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch)) {
  console.log('this is a touch device');
} else {
  console.log('this is not a touch device');
  document.body.classList.add('no-touch');
}
