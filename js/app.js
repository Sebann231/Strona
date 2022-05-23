var elementsTable = [] ;
var elementChosed = [] ;
var answer = "";
var y = 0 ;
var k=0 ;
var point = 0;
container = document.getElementsByClassName("symbol");
for(x = 0; x < container.length; x++){
  if(container[x].textContent != "DE"
  && container[x].textContent != "DEL"
  && container[x].textContent != "57-71" 
  && container[x].textContent != "89-103"  ){
      elementsTable[y] = container[x] ;
      y++ ;
  }
}

function randomElements(){
if(elementChosed.length < elements.length){
randomNumber = Math.floor(Math.random() * elements.length) ;
answer = elements[randomNumber][1];
randomElement = elementsTable[randomNumber].parentNode ;
if (elementChosed.includes(randomNumber)){
       randomElements();
} else {
randomElement.setAttribute("class","checked");
elementChosed.push(randomNumber);
}
} else {
  document.getElementById("statictic").className = "show btn btn-warning"
  document.getElementById("inputAuto").className = "hide"
  document.getElementById("end").className = "show"
}
}

const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");

easy.addEventListener('click',gameStart);
medium.addEventListener('click',gameStart);
hard.addEventListener('click',gameStart);

function gameStart(e){
  randomElements();
  document.getElementById("startButton").className = "hide"
  document.getElementById("inputAuto").className = "show"
  document.getElementById("resetButton").className = "show btn btn-info"
}

function checkQuestion(event){
  if(event.keyCode == 13){
    inputAuto = document.getElementById("inputAuto").value
    if(inputAuto == answer){
      randomElement.classList.remove("checked");
      randomElement.classList.add("goodAnswer");
      randomElement.classList.add("okres");
      point++;
    }
    else {
      randomElement.classList.remove("checked");
      randomElement.classList.add("badAnswer");
      randomElement.classList.add("okres");
    }
    statistics.innerHTML = "<h1>Liczba Punktów: "+point+"</h1>";
    randomElements();
    event.target.value = "";
  }
}

resetButton.addEventListener("click", resetGame);
function resetGame(e){
  for(x = 0; x < elements.length; x++){
    elementsTable[x].parentNode.classList.remove("badAnswer");
    elementsTable[x].parentNode.classList.remove("goodAnswer");
    elementsTable[x].parentNode.classList.remove("checked");
    elementsTable[x].parentNode.classList.remove("okresowy");
    elementsTable[x].parentNode.classList.add("okresowy");
  }
  elementChosed = [] ;
  document.getElementById("startButton").className = "btn btn-secondary show";
  document.getElementById("inputAuto").className = "hide";
  document.getElementById("resetButton").className = "hide";
  document.getElementById("statictic").className = "hide";
  document.getElementById("end").className = "hide";
  document.getElementById("end").className = "hide";
  point = 0;
  statistics.innerHTML = "<h1>Liczba Punktów: "+point+"</h1>";
}