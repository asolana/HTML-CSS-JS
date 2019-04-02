function calc(){
	var ques = parseInt(document.getElementById('ques').value),
		desc = parseFloat(document.getElementById('desc').value)/100,
		buenas = parseInt(document.getElementById('buena').value),
		malas = parseInt(document.getElementById('mala').value),
		nfinal;

		outbuenas.innerHTML = "Aciertos: "+ buenas;
		outmalas.innerHTML = "Errores: "+ malas;
		outnoans.innerHTML = "No Contestadas: " + (ques - (buenas+malas));
		outnota.innerHTML = "Nota sin descontar: " + ((10/ques)*buenas);
		nfinal = ((10/ques)*buenas) - ((10/ques)*desc)*malas;
		outnota10.innerHTML = "Final sobre 10: <b>"+ nfinal + "</b>";

		if(nfinal<5){
			outtext.innerHTML = "<b>SUSPENDIDO</b>";
		} else if (nfinal>=5 && nfinal<9) {
			outtext.innerHTML = "<b>APROBADO</b>";
		} else if (nfinal == 9 || nfinal == 10) {
			outtext.innerHTML = "<b>EXCELENTE</b>";
		}
}