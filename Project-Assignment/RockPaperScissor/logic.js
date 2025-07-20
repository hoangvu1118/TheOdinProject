let randomNumber;
let computerChocie

let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1){
        return "Rock"
    }
    else if(randomNumber==2){
        return "Paper"
    }
    else{
        return "Scissor"
    }
}

function playRound(){
    computerChocie = getComputerChoice()
    computer = computerChocie.toLocaleLowerCase()

    let userChoice = prompt("What is ur choice (Rock | Paper | Scissor) ?")
    human = userChoice.toLocaleLowerCase()

    if(computer == human){
        console.log("Tie Game")
    }
    else if(computer == "rock" && human =="scissor"){
        console.log("You lose")
        computerScore += 1
    }
    else if(computer == "rock" && human == "paper"){
        console.log("You win")
        humanScore += 1
    }
    else if(computer == "paper" && human =="scissor"){
        console.log("You win")
        humanScore += 1
    }
    else if(computer == "paper" && human == "rock"){
        console.log("You lose")
        computerScore += 1
    }
    else if(computer == "scissor" && human =="rock"){
        console.log("You win")
        humanScore += 1
    }
    else if(computer == "scissor" && human == "paper"){
        console.log("You lose")
        computerScore += 1
    }
    console.log("Computer: ", computer, " | ", "Human: ", human)
    console.log("Current Score:")
    console.log("Computer: ", computerScore, " | Human: ", humanScore )
}

function playGame(){
    for(let i = 0; i < 5; i++){
        console.log("Round: ", i+1)
        playRound()
    }
}
playGame()
