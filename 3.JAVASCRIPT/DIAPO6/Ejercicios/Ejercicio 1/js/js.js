function calcular () {
	var n1 = parseInt(nn1.value),
		resu = 1;

	for(var i = 1;i <= n1; i++){
		resu *= i;
	}
	res.innerHTML = resu;
}