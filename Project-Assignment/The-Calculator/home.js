function add(a,b){
    return a + b
}

function subtract(a ,b){
    return a - b
}

function divide(a , b){
    return a / b
}

function multiply(a, b){
    return a * b
}

function operate(operator, a ,b){
    switch(operator){
        case "+":
            return add(a,b)
        case "-":
            return subtract(a,b)
        case "*":
            return multiply(a,b)
        case "/":
            return divide(a,b)
        default:
            return "Not a valid operator\n"
    }
}

let numberArea = document.querySelector(".number")
function createNumberButtons(){
    for(let i = 9; i > 0; i--){
        let numBox = document.createElement("button")
        numBox.classList.add("numerBox")
        numBox.style.width = "100px"
        numBox.style.height = "100px"
        numBox.innerText = i
        numberArea.appendChild(numBox)
    }
}

createNumberButtons()
