var arr = [];

function initializeGame(){
	var mynumber;
	switch(document.forms[0][0].value){
		case 'easy':
		mynumber = 1;
		break;
		case 'medium':
		mynumber = 2;
		break;
		case 'hard':
		mynumber = 3;
		break;
	}
	for(var i=1; i<=mynumber; i++) {
   	arr.push(i.toString());
	}
}