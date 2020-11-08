// document.querySelector('.galaxymode').addEventListener('click', () => {
// 	document.querySelector('.body').classList.toggle('body-galaxy');
// });

document.getElementById('galaxymode').onclick = function() {galaxy()};
function galaxy(){
	document.querySelector('.options').classList.toggle('galaxy');
	document.querySelector('.body').classList.toggle('body-galaxy');
	document.querySelector('.menu').classList.toggle('menu-galaxy');
	document.querySelector('.input-search').classList.toggle('input-galaxy');
};

// console.log("holas");
// alert('qlq');

// function galaxy(){
// 	document.querySelector(".options").classList.toggle("galaxy")
// 	,document.querySelector(".body").classList.toggle("body-galaxy")
// 	,document.querySelector(".menu").classList.toggle("menu-galaxy")
// 	,document.querySelector(".input-search").classList.toggle("input-galaxy")}
// 	document.getElementById("galaxymode").onclick = function(){galaxy()
// };