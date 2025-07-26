let containerDiv = document.querySelector(".container")
let numRow = 16
let numCol = 16

for(let i = 1; i <= numRow * numCol; i++){
    let gridSquare = document.createElement("div")
    gridSquare.classList.add("grid-square")
    containerDiv.appendChild(gridSquare)
}

function trackTheMouseMovementOnGrid(){
    
}


let startButton = document.querySelector(".start")
startButton.addEventListener("click", () => {

})
