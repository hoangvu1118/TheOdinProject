let containerDiv = document.querySelector(".container")
let row = 36
let col = 40
let isDrawing = false
let markSquare

editGrid(row, col)
function editGrid(numRow, numCol){
    for(let i = 1; i <= numRow * numCol; i++){
        let gridSquare = document.createElement("div")
        gridSquare.classList.add("grid-square")
        containerDiv.appendChild(gridSquare)
    }
}

function markColorOnMouseMovement(){
    markSquare = document.querySelectorAll(".grid-square")
    markSquare.forEach((square) => {
        square.addEventListener("mousemove", () => {
            if(isDrawing){
                square.style.backgroundColor = "red";
            }
        })
    })
}

function removeSketch(){
    let newGrid = document.querySelector(".container")
    let boxes = newGrid.querySelectorAll(".grid-square")

    boxes.forEach((box => {
        newGrid.removeChild(box)
    }))
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

let newSketch = document.querySelector(".newSketch")
newSketch.addEventListener("click", () => {
    let column = window.prompt("How many squares per side for the new grid?")
    while(column * column > col * row) {
        column = window.prompt("Please enter a smaller number max(30/side): ")
    }
    removeSketch()
    editGrid(column, column)
})
