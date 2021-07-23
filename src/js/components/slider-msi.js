new Swiper('.slider-msi', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: true
	},

	speed: 700,
});