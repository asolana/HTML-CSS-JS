const pi = 3.1416;
function calcula(){
	var r = parseFloat(rad.value),
		oppe = opp.checked,
		opar = opa.checked,
		opdi = opd.checked;
	oout.innerHTML = "";

	if (oppe)
		oout.innerHTML += "El perimetro es: "+ (2 * pi * r) +"<br />";
	if (opar)
		oout.innerHTML += "El area es: "+ (pi * (r**2)) +"<br />";
	if (opdi)
		oout.innerHTML += "El diametro es: "+ (2 * r);
}