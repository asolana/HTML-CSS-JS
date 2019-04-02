function calc(){
	var base = parseFloat(document.getElementById('base').value),
		altura = parseFloat(document.getElementById('altura').value),
		area,perimetro;

	if (base>0 && altura>0){
		area=base*altura;
		perimetro=2*(base+altura);
		document.getElementById('area').innerHTML = "Area: "+area;
		document.getElementById('perimetro').innerHTML = "Perimetro: "+perimetro;
	}else{
		alert("Datos Incorrectos");
	}
}