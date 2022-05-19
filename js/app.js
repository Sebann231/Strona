var pierwiastki = [] ;
//console.log(wylosowany);
var y = 0 ;
container = document.getElementsByClassName("symbol");
//console.log(container.length);
function randomElements(){
for(x = 0; x < container.length; x++){
  if(container[x].textContent != "DE" 
  && container[x].textContent != "DEL" 
  && container[x].textContent != "57-71" 
  && container[x].textContent != "89-103"  ){
      pierwiastki[y] = container[x].textContent ;
      y++ ;
  }
}
for(x = 0; x < pierwiastki.length; x++){
//console.log("x:"+x+","+pierwiastki[x]);
}

random = Math.floor(Math.random() * pierwiastki.length) ;
console.log(pierwiastki[random]);

for(x = 0 ; x < container.length ; x++){
  if(container[x].textContent == pierwiastki[random]){
     wylosowany = container[x] ;
    }
}

console.log(wylosowany);
wylosowany = wylosowany.parentNode ;
wylosowany.setAttribute("class","checked");
}

const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");

easy.addEventListener('click',gameStart);
medium.addEventListener('click',gameStart);
hard.addEventListener('click',gameStart);

function gameStart(e){
  console.log(e.target.id);
  randomElements();
}





