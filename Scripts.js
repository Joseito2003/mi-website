document.querySelector('.img-menu').addEventListener('click', () => {
	document.querySelector('.menu').classList.toggle('show-menu');
	document.querySelector('.img-menu').classList.toggle('img-focus');
	// document.querySelector('.main').classList.toggle('main-opacity');
	document.querySelector('.opacity-off').classList.toggle('opacity-on');
	
});

const burbuja = document.getElementById('evento');

burbuja.onclick = function() {esfera()};
	function esfera() {
		burbuja.addEventListener('animationiteration', (e) => {
			console.log('sisarra');
			e.target.style.setProperty('animation-name', 'sphere');
	});
};


ScrollReveal().reveal('.header');
ScrollReveal().reveal('main');


