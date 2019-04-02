function listar(n) {
	document.body.children[2].innerHTML = '';
	for(let i = 2;i<=n;i++){
		if(esPrimo(i)){
			document.body.children[2].innerHTML += '<li>'+i+'</li>';
		}
	}
}


function esPrimo(n){
	var num = parseInt(n);
	var primo = true;

	for(var i=2; i<=(num/2); i++){
		if(num%i==0){
			primo=false;
			break;
		}
	}
	return primo;
}