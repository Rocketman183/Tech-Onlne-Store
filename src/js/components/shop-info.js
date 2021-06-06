function openInfo() {

	let button = document.getElementsByClassName('header-contacts__work-hours');
	let infoWindow = document.getElementsByClassName('shop-info');

	button.addEventListener('click', () => {
		button.style.backgroindColor = 'red';
	})
}

export { openInfo }
