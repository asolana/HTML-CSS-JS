function changeProfWeb(){
	if(window.location.pathname.indexOf('pages') == -1){
		window.location.assign("pages/index2.html");
	}else{
		var newref = window.location.href.substr(0,window.location.href.lastIndexOf('/'));
		newref = newref.substr(0,newref.lastIndexOf('/')+1);
		window.location.assign(newref+'index.html');
	}
}
function switchProf () {
	window.setTimeout(changeProfWeb(),2000);
}

var gal = [['../img/gale/DSC_0125.jpeg','Titulo 1'],
						['../img/gale/DSC_0389.jpeg','Titulo 2'],
						['../img/gale/DSC_0410.jpeg','Titulo 3'],
						['../img/gale/DSC_0566.jpeg','Titulo 4'],
						['../img/gale/DSC_0620.jpeg','Titulo 5']];

function cargarQuiroGaleria(art){
	for (var i = 0; i < gal.length; i++) {
		var im = document.createElement('img');
		var figc = document.createElement('figcaption');
		var fig = document.createElement('figure');
		im.src = gal[i][0];
		im.addEventListener('click',function(im){agrandarIMG(this);});
		figc.innerHTML = gal[i][1];
		fig.appendChild(im);
		fig.appendChild(figc);
		art.appendChild(fig);
	}
}

function agrandarIMG(thi){
	var im = document.createElement('img');
	var figc = document.createElement('figcaption');
	var fig = document.createElement('figure');
	im.src = thi.src;
	im.addEventListener('click', function(){this.parentNode.remove();});
	figc.innerHTML = thi.nextElementSibling.textContent;
	fig.classList.add('grande');
	fig.appendChild(im);
	fig.appendChild(figc);
	document.body.appendChild(fig);
}
