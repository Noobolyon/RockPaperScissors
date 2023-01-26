const playerScore=document.querySelector("#h");
const computerScore=document.querySelector("#c");
let pScore=0;
let cScore=0;
const result = document.querySelector("#result");
result.textContent = "";


function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    //this retruns choices[from 0 to array length]
    return choices[Math.floor(Math.random()*choices.length)];  
}
const btns = document.querySelectorAll("button");
btns.forEach(btn => btn.addEventListener("click",playRound));

function updateScore(p,c){
    playerScore.textContent=p;
    computerScore.textContent=c;
}


function playRound(){
    
    let p = this.id;
    let c = getComputerChoice();

    if((p=="rock"&&c=="scissors")||(p=="paper"&&c=="rock")||(p=="scissors"&&c=="paper")){
        result.textContent = (`You Win! ${p} beats ${c}`);
        pScore++;

    }
    else if((c=="rock"&&p=="scissors")||(c=="paper"&&p=="rock")||(c=="scissors"&&p=="paper")){
        result.textContent = (`You Lose! ${p} is beaten by ${c}`); 
        cScore++;
    }
    else if(c===p){
        result.textContent = ("It's a Tie!"); 
    }
    else{
        result.textContent = (playerSelection); 
    }
    updateScore(pScore,cScore);
    winner();
    
}
function winner(){
    if(pScore==5){
        result.textContent="YOU WIN !!";
        pScore==0,cScore==0;
        updateScore(0,0)
    }
    else if(cScore==5){
        result.textContent="YOU LOSE :(";
        pScore==0,cScore==0;
        updateScore(0,0);
    }
    else
        return;
}











