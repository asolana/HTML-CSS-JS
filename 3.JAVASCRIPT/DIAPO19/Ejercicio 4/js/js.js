var mon = 10;
var turn = 0;
var ok = 0;
var not = 0;
var d1,d2;
var inter = [];
const diceface = ['img/d1.png',
                  'img/d2.png',
                  'img/d3.png',
                  'img/d4.png',
                  'img/d5.png',
                  'img/d6.png'];

const betSelect = document.getElementsByName('betSelect')[0];
cargarBetSel();
function tirar(){
  //Se recoje la apuesta:
  var masmen = 'men';
  if(masRadio.checked) masmen = 'mas';
  var bet = [parseInt(betSelect.children[betSelect.selectedIndex].value),masmen];

  //Se tiran los dados;
  rollthedice(document.images[0]);
  rollthedice(document.images[1]);
  //Comprobar resultados

  setTimeout(function(){
    if((checkRes()>7 && masmen == 'mas') || (checkRes()<7 && masmen == 'men')){
      // TODO: win
    }else{
      // TODO: lose 
    }
  },3000);

  //Se carga el selector con las Monedas
  cargarBetSel();
}

function cargarBetSel(){

  //Vaciar select de apuestas
  if(betSelect.childElementCount > 0){
    for(let i = betSelect.childElementCount-1;i>=0;i--){
      betSelect.removeChild(betSelect.children[0]);
    }
  }
  //Llenar select con las monedas
  for(let i = 1; i<=mon;++i){
    let op = document.createElement('option');
    op.value = i;
    op.innerHTML = i;
    betSelect.appendChild(op);
  }
}
 //Rotar dado
function rollthedice(im){
  var ale = Math.round(Math.random()*5);
  im.src = diceface[ale];
  inter[parseInt(im.id)] = setInterval(function(){
    ale = Math.round(Math.random()*5);
    im.src = diceface[ale];
    im.value = ale+1;
  },200)

  setTimeout(function(){clearInterval(inter[parseInt(im.id)]);},2000);
}

//Comprobar Resultados
function checkRes(){
  d1 = document.images[0].value;
  d2 = document.images[1].value;
  return d1+d2;
}
