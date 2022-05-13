var startPoint = "x";
var remis = 0;
var p = [1,2,3,4,5,6,7,8,9];
table.addEventListener("click",clickField);
function clickField(e){
    if (e.target.innerHTML == ""){
        remis++;
        e.target.innerHTML = startPoint;
        if (startPoint == "x"){
            startPoint = "o";
        }
        else {
            startPoint = "x";
    } 
}
for(x=1 ;x< 10 ; x++ ){
    p[x] = document.getElementById("p"+x).innerHTML;
}
win1 = p[1]+p[2]+p[3]; win2 = p[4]+p[5]+p[6]; win3 = p[3]+p[6]+p[9]; win4 = p[1]+p[4]+p[7];
win5 = p[2]+p[5]+p[8]; win6 = p[3]+p[6]+p[9]; win7 = p[1]+p[5]+p[9]; win8 = p[3]+p[5]+p[7];
if(win1 == "xxx"){
    for(x=1 ; x<4 ; x++){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KRZYŻYKI</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win2 == "xxx"){
    for(x=4 ; x<7 ; x++){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KRZYŻYKI</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win3 == "xxx"){
    for(x=7 ; x<10 ; x++){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KRZYŻYKI</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win4 == "xxx"){
    for(x=1 ; x<8 ; x+= 3){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KRZYŻYKI</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win5 == "xxx"){
    for(x=2 ; x<9 ; x+= 3){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KRZYŻYKI</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win6 == "xxx"){
    for(x=3 ; x<10 ; x+= 3){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KRZYŻYKI</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win7 == "xxx"){
    for(x=1 ; x<10 ; x+= 4){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KRZYŻYKI</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win8 == "xxx"){
    for(x=3 ; x<8 ; x+= 2){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KRZYŻYKI</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win1 == "ooo"){
    for(x=1 ; x<4 ; x++){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KÓŁKA</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win2 == "ooo"){
    for(x=4 ; x<7 ; x++){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KÓŁKA</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win3 == "ooo"){
    for(x=7 ; x<10 ; x++){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KÓŁKA</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win4 == "ooo"){
    for(x=1 ; x<8 ; x+= 3){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KÓŁKA</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win5 == "ooo"){
    for(x=2 ; x<9 ; x+= 3){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KÓŁKA</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win6 == "ooo"){
    for(x=3 ; x<10 ; x+= 3){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KÓŁKA</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win7 == "ooo"){
    for(x=1 ; x<10 ; x+= 4){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KÓŁKA</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(win8 == "ooo"){
    for(x=3 ; x<8 ; x+= 2){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;color:white;">WYGRAŁY KÓŁKA</div>' ;
    table.removeEventListener("click",clickField) ;
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
}
if(remis == 9){
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
    table.removeEventListener("click",clickField);
    document.getElementById("info").innerHTML = '<h1 style="color:white;">Remis!!!</h1>';
}
resetButton.addEventListener("click",resetTable)
function resetTable(e){
    for(x=1 ;x< 10 ; x++ ){
        p[x] = document.getElementById("p"+x).innerHTML = "";
    }
    document.getElementById("info").innerHTML = "";
    document.getElementById("resetButton").className = "hide buttonReset  btn btn-secondary";
    table.addEventListener("click",clickField);
    startPoint = "x";
    remis = 0;
}
}