let randomNumber;
let userChoice;
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
console.log(getComputerChoice())
