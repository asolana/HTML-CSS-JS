function rndrgb () {
	return 'rgb('+Math.floor(Math.random() * 256)+
			','+Math.floor(Math.random() * 256)+
			','+Math.floor(Math.random() * 256)+')';
}
function cambiarBGbody (yo) {
	document.body.style.backgroundColor = yo.style.backgroundColor;
}