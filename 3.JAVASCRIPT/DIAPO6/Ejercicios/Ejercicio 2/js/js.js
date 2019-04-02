function calcular() {
	var n1 = parseInt(nn1.value);
	for(let i = 1;i<=n1;i++){
		if(n1%i == 0){
			res.innerHTML += i + ", ";
		}
	}
	res.innerHTML = res.innerHTML.substring(0,res.innerHTML.length-2);
}