var elementsTable = [] ;
var elementChosed = [] ;
var answer = "";
var y = 0 ;
var k=0 ;
var point = 0;
var timer = 0;
var countDownDate = new Date().getTime()+1000*120;
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
  clearInterval(timer)
}
}

const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");

easy.addEventListener('click',gameStart);
medium.addEventListener('click',gameStart);
hard.addEventListener('click',gameStart);

function gameStart(e){

  countDownDate = new Date().getTime()+1000*120;
  timer = setInterval(countDown,1000);
  randomElements();
  document.getElementById("startButton").className = "hide"
  document.getElementById("inputAuto").className = "show"
  document.getElementById("resetButton").className = "show btn btn-info"
  document.getElementById("points").className = "col-6 left padding0 show"
  document.getElementById("timer1").className = "col-6 left padding0 show"
  statistics.innerHTML = "<h1>Liczba Punktów: "+point+"</h1>"
}

function checkQuestion(event){
  if(event.keyCode == 13){
    inputAuto = document.getElementById("inputAuto").value
    if(inputAuto == answer){
      randomElement.classList.remove("checked");
      randomElement.classList.add("goodAnswer");
      randomElement.classList.add("okres");
      point++;
      countDownDate += 10*1000;
      if(point == 2){
        document.getElementById("walterWhite").innerHTML = '<img src="../img/walter.png" alt="">';
        animation();
      } 
      else {
        document.getElementById("walterWhite").innerHTML = "";
      }
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
  document.getElementById("points").className = "col-6 left padding0 hide";
  document.getElementById("timer1").className = "col-6 left padding0 hide";
  point = 0;
  clearInterval(timer);
  countDownDate = new Date().getTime()+1000*120;
  timer = setInterval(countDown,1000);
  statistics.innerHTML = "";
}

function countDown(){
// Set the date we're counting down to


  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = minutes + ":" + seconds + "";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("demo").innerHTML = "KONIEC";
    resetGame();
  }
}

// Update the count down every 1 second

function animation(){
  walterWhite.classList.add('animate__animated', 'animate__fadeInUpBig');
}