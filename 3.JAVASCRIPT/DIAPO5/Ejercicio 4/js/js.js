const pi = 3.1416;
function calcula(){
	var r = parseFloat(rad.value),
		op = opout.value;

	switch (op) {
		case "perimetro": oout.innerHTML = "El perimetro es: "+ (2 * pi * r); break;
		case "area": oout.innerHTML = "El area es: "+ (pi * (r**2)); break;
		case "diametro": oout.innerHTML = "El diametro es: "+ (2 * r); break;
		default: oout.innerHTML="Opcion Erronea.";break;
	}
}