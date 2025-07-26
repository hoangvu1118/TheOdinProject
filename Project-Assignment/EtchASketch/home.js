let containerDiv = document.querySelector(".container")
let numRow = 40
let numCol = 45
let isDrawing = false

for(let i = 1; i <= numRow * numCol; i++){
    let gridSquare = document.createElement("div")
    gridSquare.classList.add("grid-square")
    containerDiv.appendChild(gridSquare)
}


let markSquare = document.querySelectorAll(".grid-square")
function markColorOnMouseMovement(){
    markSquare.forEach((square) => {
        square.addEventListener("mousemove", () => {
            if(isDrawing){
                square.style.backgroundColor = "red";
            }
        })
    })
}


let startButton = document.querySelector(".start")
startButton.addEventListener("click", () => {
    isDrawing = true
    markColorOnMouseMovement()
})

let resetButton = document.querySelector(".newDrawing")
resetButton.addEventListener("click", () => {
    markSquare.forEach((square) => {  
        isDrawing = false
        square.style.backgroundColor = "white";
    })
})
