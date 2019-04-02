var numR;
var count;
function adivinar(){
	if(isNaN(numR)){
		numR = parseInt(Math.random()* (128 - 1))+1;
		count = 1;
	}

	var guess = parseInt(num.value);
	if(!isNaN(guess)){
		if (guess==numR){
			res.innerHTML = "<b>Acertaste</b> al intento nº " +count;
			numR = undefined;
			gue.disabled = true;
			if(count>7){
				res.innerHTML += "<br />Pero te ha costado";
			}
		}else{
			count++;
			if (guess>numR) {
				res.innerHTML = "Mas pequeño que :"+guess;		
			}else{
				res.innerHTML = "Mayor que :"+guess;
			}
		}
	}
}
function reiniciar(){
	numR = NaN;
	count = 1;
	gue.disabled = false;
}