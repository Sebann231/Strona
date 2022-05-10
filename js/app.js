randomButton = document.getElementById("randomButton");
console.log(randomButton);

randomButton.addEventListener("click",animation);
function animation(e){
    console.log(e.target);
    randomButton.classList.add('animate__animated', 'animate__bounce');
}