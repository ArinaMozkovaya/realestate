$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
	}); 
});

const swiper = new Swiper('.slider-main-block', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
	  nextEl: '.body-main-block__arrow.swiper-button-next',
	  prevEl: '.body-main-block__arrow.swiper-button-prev',
	},
 });

 // Табы

 const tabNavItems = document.querySelectorAll('.tabs-deals__button');
 const tabItems = document.querySelectorAll('.item-tabs');
 document.addEventListener("click", function (e) {
	const trargetElement = e.target;
	if(trargetElement.closest('.tabs-deals__button')){
		tabNavItems.forEach(( tabNavItems, index ) => {

		});
	}
 });