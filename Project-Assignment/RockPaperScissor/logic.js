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

function playRound(human){
    computerChocie = getComputerChoice()
    computer = computerChocie.toLocaleLowerCase()

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
}

let buttons = document.querySelector(".userChoice")

buttons.addEventListener('click', (event) => {
    let target = event.target
    switch(target.id){
        case "rock":
            playRound("rock")
            break
        case "paper":
            playRound("paper")
            break
        case "scissor":
            playRound("scissor")
            break
    }
})
