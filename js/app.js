var pierwiastki = [] ;
var elementLosed = [] ;
var odp1 = "";
var y = 0 ;
var k=0 ;
var point = 0;
container = document.getElementsByClassName("symbol");
function randomElements(){
  y=0 ;
for(x = 0; x < container.length; x++){
  if(container[x].textContent != "DE"
  && container[x].textContent != "57-71" 
  && container[x].textContent != "89-103"  ){
      pierwiastki[y] = container[x].textContent ;
      y++ ;
  }
}
for(x = 0; x < pierwiastki.length; x++){
}
//console.log(pierwiastki.length);

random = Math.floor(Math.random() * pierwiastki.length) ;
//console.log(pierwiastki[random]);
//console.log(random);
odp1 = pierwiastek[random][1];
//console.log("odp1:"+odp1);


for(x = 0 ; x < container.length ; x++){
  if(container[x].textContent == pierwiastki[random]){
     wylosowany = container[x] ;
    }
}

//console.log(wylosowany);

wylosowany = wylosowany.parentNode ;

for(z = 0; z < elementLosed.length; z++){

  if (pierwiastki[random] == elementLosed[z]){
    //wylosowany.classList.remove("checked");
    console.log("powtorka");
    randomElements();
  }
  }
 
  wylosowany.setAttribute("class","checked");
elementLosed.push(pierwiastki[random]);
//console.log(elementLosed);


console.log(elementLosed.length);
  



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
  document.getElementById("startButton").className = "hide"
  document.getElementById("inputAuto").className = "show"
}


function checkQuestion(event){
  if(event.keyCode == 13){
   

    inputAuto = document.getElementById("inputAuto").value
    if(inputAuto == odp1){
      //console.log(wylosowany);
      wylosowany.classList.remove("checked");
      wylosowany.classList.add("goodAnswer");
      point++;

      randomElements();
    }
    else {
      wylosowany.classList.remove("checked");
      wylosowany.classList.add("badAnswer");
      randomElements();
    }
  }
}

if(elementLosed.length == pierwiastki.length){
  
}







