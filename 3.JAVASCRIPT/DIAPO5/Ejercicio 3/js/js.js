function calc(){
	var salario = parseFloat(document.getElementById('sala').value),
		nivel = parseFloat(document.getElementById('lvl').value);

	switch (nivel) {
		case 1: salario *= 1.3; break;
		case 2: salario *= 1.05; break;
		default: salario *= 0.93; break;
	}

	oout.innerHTML = "Tu nuevo salario es: "+ salario +" euros.";
}