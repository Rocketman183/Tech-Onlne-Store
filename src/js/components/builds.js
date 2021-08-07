new Swiper('.builds', {
	// Optional parameters
	loop: false,
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