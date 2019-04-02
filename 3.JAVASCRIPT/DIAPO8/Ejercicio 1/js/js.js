var evopoint = 1;
var imgArr = ["./img/evo1.png",
				  "./img/evo2.png",
				  "./img/evo3.png",
				  "./img/evo4.png",
				  "./img/evo5.png"];
function evoluciona () {
	transition1();
	setTimeout(transition2,500);
	setTimeout(transition3,1000);
}
function transition1 () {
	evol.style.transition = '1.5s';
	evol.style.transform = 'translate(300%, 0)';
}
function transition2 () {
	evol.src = imgArr[evopoint];
	evol.style.transition = '0s';
	evol.style.transform = 'translate(-300%, 0)';
}
function transition3 () {
	evol.style.transition = '1.5s';
	evol.style.transform = 'translate(0, 0)';
	evopoint++;
	if(evopoint>4) evopoint = 0;
}