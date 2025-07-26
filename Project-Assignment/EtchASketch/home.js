let containerDiv = document.querySelector(".container")
let numRow = 16
let numCol = 16

for(let i = 1; i <= numRow * numCol; i++){
    let gridSquare = document.createElement("div")
    gridSquare.classList.add("grid-square")
    containerDiv.appendChild(gridSquare)
}


function markColorOnMouseMovement(){
    let markSquare = document.querySelectorAll(".grid-square")
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

