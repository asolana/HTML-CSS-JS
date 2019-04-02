//ca1 + ca2 > hipotenusa
//ca1 + hipotenusa > ca2
//ca2 + hipotenusa > ca1

//Equilatero 3 lados iguales
//Isosceles 2 lados iguales
//Escaleno ningun lado igual
function verificar(){
	var ca1 = parseFloat(document.getElementById('cateto1').value),
		ca2 = parseFloat(document.getElementById('cateto2').value),
		h = parseFloat(document.getElementById('hipotenusa').value);

	//Teorema de la desigualdad
	if ((ca1 + ca2 > h)&&(ca1 + h > ca2)&&(ca2 + h > ca1)){
		//Tipo de triangulo
		if(ca1 == ca2 && ca2 == h){
			resimg.src = "./img/equilatero.png";
			res.innerHTML = "Equilatero";
		}else{
			if(ca1 == h || ca2 == h || ca1 == ca2){
				resimg.src = "./img/isosceles.png";
				res.innerHTML = "Isosceles";
			}else{
				resimg.src = "./img/escaleno.png";
				res.innerHTML = "Escaleno";
			}
		}
	}else{
		resimg.src = "";
		res.innerHTML = "No es un triangulo";
	}
}

