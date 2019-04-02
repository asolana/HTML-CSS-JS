var empates = 0,
	victorias = 0,
	derrotas = 0,
	partidas = 0;
function tirada (val) {
	//0=piedra 1=papel 2=tijera
	var cpu = parseInt(Math.abs(Math.random()*(1 - 4))),
		ply,gana;
	switch (val) {
		case "piedra":
			ply = 0;
			imgJugador.src = "./img/piedra.png";
			break;
		case "papel":
			ply = 1;
			imgJugador.src = "./img/papel.png";
			break;
		case "tijera":
			ply = 2;
			imgJugador.src = "./img/tijera.png";
			break;
		default:
			alert('Fallo en el programa.');
			return;
			break;
	}
	//Determinar Ganador
	if (ply == cpu){
		gana = 'nadie';
		empates++;
		resultado.innerHTML = "¡EMPATE!";
		resultado.style.color = '#000A8D';
	}else{
		if((ply == 2 && cpu == 1) || (ply == 1 && cpu == 0) || (ply == 0 && cpu == 2)){
			gana = 'jugador';
			victorias++;
			resultado.innerHTML = "¡HAS GANADO!";
			resultado.style.color = '#0f0';
		}else{
			gana = 'cpu';
			derrotas++;
			resultado.innerHTML = "¡HAS PERDIDO!";
			resultado.style.color = '#f00';
		}
	}
	partidas++;
	//Imprimir
	switch (cpu) {
		case 0:
			imgCPU.src = "./img/piedra.png";
			break;
		case 1:
			imgCPU.src = "./img/papel.png";
			break;
		case 2:
			imgCPU.src = "./img/tijera.png";
			break;
	}
	document.getElementById('partidas').innerHTML = partidas;
	ganadas.innerHTML = victorias;
	perdidas.innerHTML = derrotas;
	empatadas.innerHTML = empates;



}