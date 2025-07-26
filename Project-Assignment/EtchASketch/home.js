let containerDiv = document.querySelector(".container")
let numRow = 16
let numCol = 16

for(let i = 1; i <= numRow * numCol; i++){
    let gridSquare = document.createElement("div")
    gridSquare.classList.add("grid-square")
    containerDiv.appendChild(gridSquare)
}


let markSquare = document.querySelectorAll(".grid-square")
function markColorOnMouseMovement(){
    markSquare.forEach((square) => {
        square.addEventListener("mousemove", () => {
            square.style.backgroundColor = "red";
        })
    })
}


let startButton = document.querySelector(".start")
startButton.addEventListener("click", () => {
    markColorOnMouseMovement()
})

let resetButton = document.querySelector(".newDrawing")
resetButton.addEventListener("click", () => {
    markSquare.forEach((square) => {  
        square.style.backgroundColor = "white";
    })
})
