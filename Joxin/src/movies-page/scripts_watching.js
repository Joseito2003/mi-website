document.querySelector('.img-menu').addEventListener('click', () => {
	document.querySelector('.menu').classList.toggle('show-menu');
	document.querySelector('.img-menu').classList.toggle('img-index');
	document.querySelector('.img-menu').classList.toggle('img-focus');

});

let resultado = document.getElementById('resultado');

const crearTabla = () =>{
	let numero = document.getElementById('numero').value;
	let cadenaDeTexto = "";
	resultado.style.display = 'block';

	for(let i = 1; i <= 10; i++){
		multi = i * numero;
		cadenaDeTexto += `${numero} * ${i} = ${multi} <br>`;
		resultado.innerHMTL = cadenaDeTexto;
	}
}
