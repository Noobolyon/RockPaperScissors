


function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    //this retruns choices[from 0 to array length]
    return choices[Math.floor(Math.random()*choices.length)];  
}


let playerSelection = prompt("enter your choice: ");

function playRound(playerSelection,computerSelection=getComputerChoice()){
    
    let p = playerSelection.toLowerCase();
    let c = computerSelection;
    if((p=="rock"&&c=="scissors")||(p=="paper"&&c=="rock")||(p=="scissors"&&c=="paper")){
        return `You Win! ${p} beats ${c}`;
    }
    else if((c=="rock"&&p=="scissors")||(c=="paper"&&p=="rock")||(c=="scissors"&&p=="paper")){
        return `You Lose! ${p} is beaten by ${c}`;
    }
    else if(c===p){
        return "It's a Tie!";
    }
    else{
        return "error";
    }

}


function game(){
    for(let i = 0;i<5;i++){
        console.log(playRound(playerSelection));
    }
}


