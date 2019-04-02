/*Ejercicio 1*/
function minimo (num1, num2) {
	return Math.min(num1,num2);
}
/*Ejercicio 2*/
/*A*/
function areaTriangulo (b,a) {
	return (b*a)/2;
}
/*B*/
function areaRectangulo (b,a) {
	return (b*a);
}
/*C*/
function areaCirculo (r) {
	return Math.PI * Math.sqrt(r);
}
/*Ejercicio 3*/
function descuento(p, desc){
	if (p>0) {
		if(desc>0 && desc<100){
			return p - p*desc/100;
		}
	}
	return NaN;
}
/*Ejercicio 4*/
function hipotenusa (c1,c2) {
	return Math.sqrt(c1**2+c2**2);
}
/*Ejercicio 5*/
function esPrimo (n) {
	for(let i = 2;i<n/2;i++){
		return (n%2==0)? false : true;
	}
}