function crear () {
	var f = parseInt(tablas.value),
		res = "";


	
	for(let x = 1;x<=f;x++){
		res += "<table><thead>";
		for(let i = 0;i<=10;i++){
			if(i == 0){
				res += "<tr><th colspan='5'>Tabla del "+x+"</th></tr></thead>";
			}else{
				res += "<tr>";
				for(let j = 1;j<=5;j++){
					res +="<td>";
					switch (j) {
						case 1:
							res += x;
							break;
						case 2:
							res += "X";
							break;
						case 3:
							res += i;
							break;
						case 4:
							res += "=";
							break;
						case 5:
							res += x*i;
							break;
						default:
							break;
					}
					res += "</td>";
				}
				res += "</tr>";
			}
		}
		res += "</table>";
	}
	
	contentTable.innerHTML = res;


}