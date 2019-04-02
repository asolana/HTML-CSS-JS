function adivinar(){
	var numR = num.value;
	var count = 0;
	var mami = null;

	if(!isNaN(numR) || (numR != '')){
		var guess = parseInt(Math.random()* (128 - 1))+1;
			mami = alertBox('Mayor o menor','cus1',guess);
			window.setTimeout(function(){alert(mami);},2000);
		// do{
		// 	count++;
			
		// }while(guess != numR);
		
		res.innerHTML = "Numero: "+numR+"<br />Intentos: "+count;
	}
}

function alertBox(titulo, type = 'ok', contenido = '') {

    var content   =   '<div><input id="ptext" class="field" type="text"></div>';

    switch (type) {
    	case 'err':
	        document.getElementById('alertBox').firstElementChild.children[1].innerHTML = contenido;
	        document.getElementById('alertBox').firstElementChild.children[1].style.color = "#F00";
	        document.getElementById('alertBox').firstElementChild.children[1].style.top = "50%";
    		break;
    	case 'ok':
	        document.getElementById('alertBox').firstElementChild.children[1].innerHTML = contenido;
	        document.getElementById('alertBox').firstElementChild.children[1].style.top = "50%";
    		break;
    	case 'prompt':
    		// revisar
	        document.getElementById('alertBox').firstElementChild.children[1].innerHTML = text2 + content;
	        document.getElementById('alertBox').firstElementChild.children[1].style.top = "25%";
	        document.getElementById('alertBox').firstElementChild.children[1].value = "OK";
	        document.getElementById('alertBox').firstElementChild.children[1].onclick = function(){ alert(document.getElementById('ptext').value); alertBox_hide(); }
        	if (text) {
        		document.getElementById('ptext').value = text;
        	}
    		break;
    	case 'cus1':// Este tipo sirve para indicar mayor o menor
    		//Titulo
    		document.getElementById('alertBox').firstElementChild.children[0].children[0].innerHTML = titulo;
    		//Contenido
    		document.getElementById('alertBox').firstElementChild.children[1].innerHTML = "<span>"+contenido+"</span>";
    		//Botones Creacion
    		document.getElementById('alertBox').firstElementChild.children[2].innerHTML = 
	        	"<button id='may'>Mayor</button><button id='men'>Menor</button>";
	        document.getElementById('alertBox').firstElementChild.children[2].childNodes[0].onclick = function(){alertBox_hide(); return(true);}
    		break;
    	default:
       		document.getElementById('alertBox').firstElementChild.children[1].innerHTML = text;
    		break;
    }

    document.getElementById('alertBox').style.visibility = 'visible';
    
}//end function

function alertBox_hide() {
	document.getElementById('alertBox').style.visibility = 'hidden';
}