function Gameboard(){
    this.gameboard = Array.from({length: 9})
    this.available_choice = Array.from({length: 9}, (_,index) => index)
    this.winNumbers = ["210", "840", "630", "642", "741", "543", "876", "852"]
}

function digitsInside(num1, num2) {
  return [...num1].every(digit => num2.includes(digit));
}

function Player(){
    let choice = []
    let pushChoice = function(number){
        if(choice.includes(number)){
            return false;
        }
        else{
            choice.push(number)
            return true
        }
    }
    let showChoice = function(){
        console.log(choice)
    }
    return {choice, pushChoice, showChoice}
}


function checkWinner(gameboard, player1, player2){
    let choice1 = player1.choice.sort((a,b) => b - a).join("")
    let choice2 = player2.choice.sort((a,b) => b - a).join("")
    for(let win of gameboard.winNumbers){
        if(digitsInside(win, choice1)){
            return 1
        }
        if(digitsInside(win, choice2)){
            return 2
        }
    }
    return 0;
}

function checkAvailableChoice(choose, gameboard){
    let index = gameboard.available_choice.findIndex(number => number === choose)
    console.log(`check chosen index ${index}`)
    while(index == -1){
        choose = parseInt(prompt(`You have to choose different box != ${choose}: `))
        index = gameboard.available_choice.findIndex(number => number === choose)
    }
    return choose
}

function controlGamePlay(){
    let gameboard = new Gameboard()
    const player1 = Player()
    const player2 = Player()

    for(let i = 0; i < 5; i++){ 
        alert(`Turn ${i+1}`)
        let one_choose = parseInt(prompt("1 Select your move: "))
        one_choose = checkAvailableChoice(one_choose, gameboard)
        player1.pushChoice(one_choose)
        if(i == 4) break
        if(i >= 2){
            let winners = checkWinner(gameboard, player1, player2)
            if(winners == 1 || winners == 2){
                return winners
            }
        }

        let two_choose = parseInt(prompt("2 please select: "))
        two_choose = checkAvailableChoice(two_choose, gameboard)
        player2.pushChoice(two_choose)
        

        let index1 = gameboard.available_choice.findIndex(number => number === one_choose)
        gameboard.available_choice.splice(index1, 1)

        let index2 = gameboard.available_choice.findIndex(number => number === two_choose)
        gameboard.available_choice.splice(index2, 1)

        console.log(`Round ${i+1}`)
        player1.showChoice()
        player2.showChoice()

        if(i >= 2){
            let winners = checkWinner(gameboard, player1, player2)
            if(winners == 1 || winners == 2){
                return winners
            }
            else if( winners == 0 && i < 5){
                continue
            }
        }
    }
    return "Draw";
}
console.log(controlGamePlay())
// let testGame = new Gameboard()
// let index = testGame.available_choice.findIndex(number => number === 8)
// testGame.available_choice.splice(index, 1)
// console.log(testGame.available_choice)
// let index1 = testGame.available_choice.findIndex(number => number === 7)
// console.log(index1)

// let index = available_choice.findIndex(number => number === 6)
// console.log(available_choice.splice(index, 1))
// console.log(available_choice)
// let index1 = available_choice.findIndex(number => number === 10)
// console.log(index1)
// console.log(available_choice.splice(index1,1))
// console.log(available_choice)

