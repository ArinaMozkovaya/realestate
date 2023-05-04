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