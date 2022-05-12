var startPoint = "x";
table.addEventListener("click",clickField);
function clickField(e){
    if (e.target.innerHTML == ""){
        e.target.innerHTML = startPoint;
        if (startPoint == "x"){
            startPoint = "o";
        }
        else {
            startPoint = "x";
    } 
}

p1 = document.getElementById("p1").innerHTML;
p2 = document.getElementById("p2").innerHTML;
p3 = document.getElementById("p3").innerHTML;
p4 = document.getElementById("p4").innerHTML;
p5 = document.getElementById("p5").innerHTML;
p6 = document.getElementById("p6").innerHTML;
p7 = document.getElementById("p7").innerHTML;
p8 = document.getElementById("p8").innerHTML;
p9 = document.getElementById("p9").innerHTML;

win1 = p1+p2+p3;
win2 = p4+p5+p6;
win3 = p7+p8+p9;
win4 = p1+p4+p7;
win5 = p2+p5+p8;
win6 = p3+p6+p9;
win7 = p1+p5+p9;
win8 = p3+p5+p7;
console.log(win1);

if(win1 == "xxx"){
    document.getElementById("p1").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p2").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p3").innerHTML = '<div class="wygrana">x</div>';
}
if(win2 == "xxx"){
    document.getElementById("p4").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p5").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p6").innerHTML = '<div class="wygrana">x</div>';
}
if(win3 == "xxx"){
    document.getElementById("p7").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p8").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p9").innerHTML = '<div class="wygrana">x</div>';
}
if(win4 == "xxx"){
    document.getElementById("p1").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p4").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p7").innerHTML = '<div class="wygrana">x</div>';
}
if(win5 == "xxx"){
    document.getElementById("p2").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p5").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p8").innerHTML = '<div class="wygrana">x</div>';
}
if(win6 == "xxx"){
    document.getElementById("p3").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p6").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p9").innerHTML = '<div class="wygrana">x</div>';
}
if(win7 == "xxx"){
    document.getElementById("p1").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p5").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p9").innerHTML = '<div class="wygrana">x</div>';
}
if(win8 == "xxx"){
    document.getElementById("p3").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p5").innerHTML = '<div class="wygrana">x</div>';
    document.getElementById("p7").innerHTML = '<div class="wygrana">x</div>';
}
if(win1 == "ooo"){
    document.getElementById("p1").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p2").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p3").innerHTML = '<div class="wygrana">o</div>';
}
if(win2 == "ooo"){
    document.getElementById("p4").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p5").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p6").innerHTML = '<div class="wygrana">o</div>';
}
if(win3 == "ooo"){
    document.getElementById("p7").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p8").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p9").innerHTML = '<div class="wygrana">o</div>';
}
if(win4 == "ooo"){
    document.getElementById("p1").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p4").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p7").innerHTML = '<div class="wygrana">o</div>';
}
if(win5 == "ooo"){
    document.getElementById("p2").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p5").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p8").innerHTML = '<div class="wygrana">o</div>';
}
if(win6 == "ooo"){
    document.getElementById("p3").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p6").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p9").innerHTML = '<div class="wygrana">o</div>';
}
if(win7 == "ooo"){
    document.getElementById("p1").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p5").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p9").innerHTML = '<div class="wygrana">o</div>';
}
if(win8 == "ooo"){
    document.getElementById("p3").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p5").innerHTML = '<div class="wygrana">o</div>';
    document.getElementById("p7").innerHTML = '<div class="wygrana">o</div>';
}

if(win1 == "xxx"){
    document.getElementById("info").innerHTML = '<h1>Wygrały krzyżyki!!!</h1>';
}
if(win2 == "xxx"){
    document.getElementById("info").innerHTML = '<h1>Wygrały krzyżyki!!!</h1>';
}
if(win3 == "xxx"){
    document.getElementById("info").innerHTML = '<h1>Wygrały krzyżyki!!!</h1>';
}
if(win4 == "xxx"){
    document.getElementById("info").innerHTML = '<h1>Wygrały krzyżyki!!!</h1>';
}
if(win5 == "xxx"){
    document.getElementById("info").innerHTML = '<h1>Wygrały krzyżyki!!!</h1>';
}
if(win6 == "xxx"){
    document.getElementById("info").innerHTML = '<h1>Wygrały krzyżyki!!!</h1>';
}
if(win7 == "xxx"){
    document.getElementById("info").innerHTML = '<h1>Wygrały krzyżyki!!!</h1>';
}
if(win8 == "xxx"){
    document.getElementById("info").innerHTML = '<h1>Wygrały krzyżyki!!!</h1>';
}
if(win1 == "ooo"){
    document.getElementById("info").innerHTML = '<h1>Wygrały kółka!!!</h1>';
}
if(win2 == "ooo"){
    document.getElementById("info").innerHTML = '<h1>Wygrały kółka!!!</h1>';
}
if(win3 == "ooo"){
    document.getElementById("info").innerHTML = '<h1>Wygrały kółka!!!</h1>';
}
if(win4 == "ooo"){
    document.getElementById("info").innerHTML = '<h1>Wygrały kółka!!!</h1>';
}
if(win5 == "ooo"){
    document.getElementById("info").innerHTML = '<h1>Wygrały kółka!!!</h1>';
}
if(win6 == "ooo"){
    document.getElementById("info").innerHTML = '<h1>Wygrały kółka!!!</h1>';
}
if(win7 == "ooo"){
    document.getElementById("info").innerHTML = '<h1>Wygrały kółka!!!</h1>';
}
if(win8 == "ooo"){
    document.getElementById("info").innerHTML = '<h1>Wygrały kółka!!!</h1>';
}

}

resetButton.addEventListener("click");