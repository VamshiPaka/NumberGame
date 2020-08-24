var p1Button=document.getElementById("p1");
var p2Button=document.getElementById("p2");
var reset=document.getElementById("reset");
var winNum=document.getElementById("winNum");
var numInput=document.querySelector("input");

var p1Score=0;
var p2Score=0;
var gameOver=false;
var winningScore=5;

var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");

p1Button.addEventListener("click",function(){
    if(!gameOver)
    p1Score++;
    if(p1Score===winningScore){
        p1display.classList.add("winner");
       gameOver=true;
    }
    p1display.textContent=p1Score;
    
});

p2Button.addEventListener("click",function(){
    if(!gameOver)
    p2Score++;
    if(p2Score===winningScore){
        p2display.classList.add("winner");
        gameOver=true;
     }
    p2display.textContent=p2Score;
    
});
reset.addEventListener("click",function(){
    
    resetf();
});

function resetf(){
    p1Score=0;
    p2Score=0;
    p1display.textContent=p1Score;
    p2display.textContent=p2Score;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameOver=false;
}

numInput.addEventListener("change",function(){
    winNum.textContent=this.value;
    winningScore=Number(this.value);
    resetf();
});