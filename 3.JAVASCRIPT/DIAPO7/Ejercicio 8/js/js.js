var cliked = false;

function pintar (yo,col) {
	if(cliked){
		yo.style.backgroundColor = col;
	}	
}

function clicked (bo) {
	if(!bo){
		cliked = false;
	}else{
		cliked = true;
	}
}

function limpiar(){
	for (it in document.getElementById('paintZone').children) {
		if(document.getElementById('paintZone').children[it].nodeName == "DIV"){
			document.getElementById('paintZone').children[it].style.backgroundColor = 'transparent';
		}
	}
}