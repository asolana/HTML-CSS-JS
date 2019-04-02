// -b±(Math.sqrt((b**2)-4*(a*c)))/2*a
function calcEquacion2(){
	var a = parseFloat(document.getElementById('avar').value),
		b = parseFloat(document.getElementById('bvar').value),
		c = parseFloat(document.getElementById('cvar').value),
		d;



		//Comprobar valores no numericos
		if(!isNaN(a)&&!isNaN(b)&&!isNaN(c)){
			//Comprobar si es una equacion
			if(!a==0){
				//Comprobar soluciones reales
				if(d=((b**2) - 4*(a*c) >= 0)){
					//Dos soluciones reales distintas
					res1.innerHTML = "Resultado (+) = "+((-b+(Math.sqrt((b**2)-4*(a*c))))/(2*a));
					res2.innerHTML = "Resultado (-) = "+((-b-(Math.sqrt((b**2)-4*(a*c))))/(2*a));
				}else{
					alert("No es una solucion real");
				}
			}else{
				alert("No es una equacion");
			}
		}else{
			alert("No son numeros");
		}
}