
function calculaA(){
	var n1 = parseFloat(num1.value),
		n2 = parseFloat(num2.value),
		n3 = parseFloat(num3.value);

	if (n1>n2){
		if(n1>n3){
			oout.innerHTML = n1;
		}else{
			oout.innerHTML = n3;
		}
	}else{
		if (n2>n3){
			oout.innerHTML = n2;
		}else{
			oout.innerHTML = n3; 
		}
	}
}
function calculaB(){
	var n1 = parseFloat(num1.value),
		n2 = parseFloat(num2.value),
		n3 = parseFloat(num3.value);

	if (n1>n2 && n1>n3){
		oout.innerHTML = n1;
	}else if (n1>n2 || n3>n2){
		oout.innerHTML = n3;
	}else{
		oout.innerHTML = n2;
	}
}