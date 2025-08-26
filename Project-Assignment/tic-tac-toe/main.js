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


function checkWinner(gameboard, player){
    let choice = player.choice.sort((a,b) => b - a).join("")
    for(let win of gameboard.winNumbers){
        if(digitsInside(win, choice)){
            return 1
        }
    }
    return 0;
}

function checkXO_Button(text_turn, cb) {
    const xoButtons = Array.from(document.querySelectorAll('.grid'));
    function onClick(e) {
        const btn = e.currentTarget;
        btn.textContent = text_turn;
        btn.style.color = (text_turn === "X") ? "#ff6b6b" : "#6bc1ff"
        btn.disabled = true;
        const index = parseInt(btn.dataset.index, 10);
        xoButtons.forEach(b => b.removeEventListener('click', onClick));
        cb(index);
    }
    xoButtons.forEach(b => b.addEventListener('click', onClick));
}

function controller(first){
    let insideGrid = first === 1 ? 'X' : 'O';
    let gameboard = new Gameboard()
    let playingBox = document.querySelector(".playingBox")
    let gridBoxes = playingBox.children
    let gameOver = false

    const player1 = Player()
    const player2 = Player()

    for(let i = 0; i< gridBoxes.length; i++){
        gridBoxes[i].dataset.index = i
    }
    
    function nextTurn(){
        if(gameOver || gameboard.available_choice.length === 0) return displayWinner('-1');
        checkXO_Button(insideGrid, function(index){
            const player = (insideGrid === 'X') ? player1 : player2

            let boxIndex = gameboard.available_choice.indexOf(index)
            player.pushChoice(index)
            gameboard.available_choice.splice(boxIndex, 1)
            if(checkWinner(gameboard, player)){
                gameOver = true
                return displayWinner(insideGrid)
            }
            insideGrid = (insideGrid === 'X') ? 'O' : 'X';
            nextTurn()
        })
    }
    nextTurn()
}

function displayWinner(who){
    const player1El = document.querySelector('.player-1');
    const player2El = document.querySelector('.player-2');
    const score1El = document.querySelector('.player-1 .show-score');
    const score2El = document.querySelector('.player-2 .show-score');

    // clear any previous highlight classes
    const clearHighlights = () => {
        player1El.classList.remove('winner', 'tie');
        player2El.classList.remove('winner', 'tie');
    };

    clearHighlights();

    if (who === '-1') {
        // tie — give both players a subtle tie highlight
        player1El.classList.add('tie');
        player2El.classList.add('tie');
    } else if (who === 'X') {
        player1El.classList.add('winner');
        score1El.textContent = String(parseInt(score1El.textContent || '0', 10) + 1);
    } else {
        player2El.classList.add('winner');
        score2El.textContent = String(parseInt(score2El.textContent || '0', 10) + 1);
    }

    // remove highlight after a short delay
    setTimeout(() => {
        clearHighlights();
    }, 3000);
}

function main(){
    let startgame = document.querySelector(".start").addEventListener("click", async () =>{
        
        const xoButtons = document.querySelectorAll('.grid');
        xoButtons.forEach(button => {
            button.textContent = ""
            button.disabled = false
        })

        let dialog = document.createElement("dialog")
        dialog.classList.add("play-first")
        let question = document.createElement("h2")
        let play1 = document.createElement("button")
        let play2 = document.createElement("button")
        play1.textContent = "Player 1"
        play2.textContent = "Player 2"
        question.textContent = "Who's gonna play first?"
        dialog.append(question, play1, play2)
        document.body.appendChild(dialog)
        dialog.showModal()
        
        const choice = await new Promise((resolve) => {
            play1.addEventListener("click", () => resolve(1), { once: true });
            play2.addEventListener("click", () => resolve(2), { once: true });
        });

        console.log("User chose:", choice);
        dialog.close();
        controller(choice)
    })
    let reset = document.querySelector(".reset").addEventListener("click", () => {
        location.reload()
    })
}
main()
