new Swiper('.new-products', {
	// Optional parameters
	loop: false,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	speed: 700,
	slidesPerView: 2,
	breakpoints: {
		768: {
			slidesPerView: 4,
			loop: true,
		},
		1280: {
			slidesPerView: 6,
		},
	}
});