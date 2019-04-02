function crear () {
	var f = parseInt(fila.value),
		c = parseInt(columna.value),
		res = "";


	res = "<h2>Tabla de: "+f+"x"+c+"</h2><br /><table><thead>";

	
	for(let i = 1;i<=f;i++){
		if(i != 1){
			res += "<tbody>"
		}
		res += "<tr>";
		for(let j = 1;j<=c;j++){
			if(i == 1){
				res += "<th>header "+j+"</th>";
			}else if(i == f){
				res += "<td>footer "+j+"</td>";
			}else{
				res += "<td>row"+i+"col"+j+"</td>";
			}
		}
		if(i == 1){
			res += "</thead>"
		}else if(i == f){
			res += "<tfooter>"
		}else if(i == f-1){
			res += "</tbody>"
		}
		res += "</tr>";
	}

	res += "</tfooter><table>";

	contentTable.innerHTML = res;
}