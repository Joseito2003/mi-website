document.querySelector('.form-input').addEventListener('click', () => {
	document.querySelector('.focus-off').classList.toggle('focus-on');
});

document.querySelector('.input-2').addEventListener('click', () => {
	document.querySelector('.focus-off-2').classList.toggle('focus-on-2');
});

// Function

	function suma(numero1,numero2){
		return numero1 + numero2 + bs;
	}
	
	var x = 23;
	var y = 51;
	var bs = " Bs.S";
	document.getElementById("button").onclick = function() {operacion()};
	function operacion(){
		document.getElementById("forgot").innerHTML = suma(x,y)
	}
	//document.getElementById("button").onclick = function() {myFunction()};
	// function myFunction(){
	// 	document.getElementById("forgot").innerHTML = "texto cambiado";
	// }

// Array
  
	var nombres = ["sech","elpepe","suanfonzon"]
	console.log(nombres);

// Condicional if

var hora = 15;

if(hora<12){
	alert("buenos dias");
}
else if(hora>19){
	alert("Buenas noches");
}
else{
	alert("Buenas tardes");
}

document.getElementById("button").onclick = function(){
	var color = document.getElementById("color").value;

	if (color=="verde"){
		document.getElementById("change").classList.add("forgot-psswrd");
	}
	else if(color=="rojo"){
		document.getElementById("change").classList.add("login-button");
	}
	else{
		document.getElementById("change").classList.add("form-title");
	}
} 