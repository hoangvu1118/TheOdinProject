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

let buttons = document.querySelector(".userChoice")
// compScore.addEventListener('mouseup', ()=>{
//     compScore.value = computerScore
// })

// userScore.addEventListener('mouseup',() => {
//     userScore.value = humanScore
// })

function updateScore(){
    let compScore = document.querySelector(".element.computerScore")
    let userScore = document.querySelector(".element.userScore")
    
    compScore.textContent = `Score: ${computerScore}`
    userScore.textContent = `Score: ${humanScore}`
}

function displayImage(userChoice){
    let computer = document.querySelector(".element.Compimg")
    let user = document.querySelector(".element.Userimg")

    let imgComp = document.createElement("img");
    let imgUser = document.createElement("img");

    user.innerHTML = ""
    if(userChoice == 1){
        imgUser.src = "assets/rock.jpg"
    }
    else if(userChoice == 2){
        imgUser.src = "assets/paper.jpg"
    }
    else if(userChoice == 3){
        imgUser.src = "assets/scissor.jpg"
    }
    imgUser.width = 350
    imgUser.height = 250
    user.appendChild(imgUser)
// Computer Image

    computer.innerHTML = ""
    if(computerChocie == "Rock"){
        imgComp.src = "assets/rock.jpg"
    }
    else if(computerChocie == "Paper"){
        imgComp.src = "assets/paper.jpg"
    }
    else if(computerChocie == "Scissor"){
        imgComp.src = "assets/scissor.jpg"
    }
    imgComp.width = 350
    imgComp.height = 250
    computer.appendChild(imgComp)

}

buttons.addEventListener('click', (event) => {
    let target = event.target
    let choice = 0
    switch(target.id){
        case "rock":
            playRound("rock")
            choice = 1
            break
        case "paper":
            playRound("paper")
            choice = 2
            break
        case "scissor":
            playRound("scissor")
            choice = 3
            break
    }

    updateScore()
    displayImage(choice)
})
