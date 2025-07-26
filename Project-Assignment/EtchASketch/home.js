let containerDiv = document.querySelector(".container")
let row = 36
let col = 40
let isDrawing = false
let markSquare
let darken = 0.1

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
                const hexColor = getRandomHexColor();
                if(darken <= 1){
                   square.style.backgroundColor = "black";
                   square.style.opacity = darken 
                   darken += 0.1
                }
                else{
                    square.style.backgroundColor = hexColor;
                }
            }
        })
    })
}

function getRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 0xFFFFFF).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
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
        darken = 0
        square.style.backgroundColor = "white";
    })
})

let newSketch = document.querySelector(".newSketch")
newSketch.addEventListener("click", () => {
    let column = window.prompt("How many squares per side for the new grid?")
    while(column * column > col * row) {
        column = window.prompt("Please enter a smaller number max(30/side): ")
    }
    darken = 0
    removeSketch()
    editGrid(column, column)
})
