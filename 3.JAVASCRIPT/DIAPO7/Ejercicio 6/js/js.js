//Impedancia = Math.sqrt(r**2 + (ri() - rc()))
//ri = 2 * Math.PI * f * l
//rc = 1/(2*Math.PI*f*c)

function calcula(r,l,c,f,out) {
	out.innerHTML = Math.sqrt(r**2 + (ri(f,l) - rc(f,c)))
}
function ri(f,l){
	return 2 * Math.PI * f * l;
}
function rc(f,c) {
	return 1/(2*Math.PI*f*c);
}