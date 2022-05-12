var startPoint = "x";
var remis = 0;
var p = [1,2,3,4,5,6,7,8,9];
console.log(p[2]);
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
win1 = p[1]+p[2]+p[3];
win2 = p[4]+p[5]+p[6];
win3 = p[3]+p[6]+p[9];
win4 = p[1]+p[4]+p[7];
win5 = p[2]+p[5]+p[8];
win6 = p[3]+p[6]+p[9];
win7 = p[1]+p[5]+p[8];
win8 = p[3]+p[5]+p[7];


if(wyn1 == "xxx"){
    for(x=1 ; x<4 ; x++){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
    tabela.removeEventListener("click",clickField) ;
}
if(wyn2 == "xxx"){
    for(x=4 ; x<7 ; x++){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
    tabela.removeEventListener("click",clickField) ;
}
if(wyn3 == "xxx"){
    for(x=7 ; x<10 ; x++){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
    tabela.removeEventListener("click",clickField) ;
}
if(wyn4 == "xxx"){
    for(x=1 ; x<8 ; x+= 3){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
    tabela.removeEventListener("click",clickField) ;
}
if(wyn5 == "xxx"){
    for(x=2 ; x<9 ; x+= 3){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
    tabela.removeEventListener("click",clickField) ;
}
if(wyn6 == "xxx"){
    for(x=3 ; x<10 ; x+= 3){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
    tabela.removeEventListener("click",clickField) ;
}
if(wyn7 == "xxx"){
    for(x=3 ; x<8 ; x+= 2){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
    tabela.removeEventListener("click",clickField) ;
}
if(wyn8 == "xxx"){
    for(x=1 ; x<10 ; x+= 4){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">x</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
    tabela.removeEventListener("click",clickField) ;
}





if(wyn1 == "ooo"){
    for(x=1 ; x<4 ; x++){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
    tabela.removeEventListener("click",clickField) ;
}
if(wyn2 == "ooo"){
    for(x=4 ; x<7 ; x++){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
    tabela.removeEventListener("click",clickField) ;
}
if(wyn3 == "ooo"){
    for(x=7 ; x<10 ; x++){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
    tabela.removeEventListener("click",clickField) ;
}
if(wyn4 == "ooo"){
    for(x=1 ; x<8 ; x+= 3){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
    tabela.removeEventListener("click",clickField) ;
}
if(wyn5 == "ooo"){
    for(x=2 ; x<9 ; x+= 3){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
    tabela.removeEventListener("click",clickField) ;
}
if(wyn6 == "ooo"){
    for(x=3 ; x<10 ; x+= 3){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
    tabela.removeEventListener("click",clickField) ;
}
if(wyn7 == "ooo"){
    for(x=3 ; x<8 ; x+= 2){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
    tabela.removeEventListener("click",clickField) ;
}
if(wyn8 == "ooo"){
    for(x=1 ; x<10 ; x+= 4){
        document.getElementById("p"+x).innerHTML = '<div style="color:lime;">o</div>' ;
    }
    document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
    tabela.removeEventListener("click",clickField) ;
}

if(remis == 9){
    document.getElementById("resetButton").className = "visible buttonReset  btn btn-secondary";
    table.removeEventListener("click",clickField);
    document.getElementById("info").innerHTML = '<h1>Remis!!!</h1>';
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


resetButton.addEventListener("click",resetTable)
function resetTable(e){
    document.getElementById("p1").innerHTML = "";
    document.getElementById("p2").innerHTML = "";
    document.getElementById("p3").innerHTML = "";
    document.getElementById("p4").innerHTML = "";
    document.getElementById("p5").innerHTML = "";
    document.getElementById("p6").innerHTML = "";
    document.getElementById("p7").innerHTML = "";
    document.getElementById("p8").innerHTML = "";
    document.getElementById("p9").innerHTML = "";
    document.getElementById("info").innerHTML = "";
    document.getElementById("resetButton").className = "hide buttonReset  btn btn-secondary";
    table.addEventListener("click",clickField);
    startPoint = "x";
    remin = 0;
}
}