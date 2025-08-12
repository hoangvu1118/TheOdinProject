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
    let order = [7, 8 ,9, 4, 5, 6, 1, 2, 3]
    order.forEach(num => {
        let numBox = document.createElement("button")
        numBox.classList.add("numberBox")
        numBox.style.width = "100px"
        numBox.style.height = "100px"
        numBox.innerText = num
        numberArea.appendChild(numBox)
    })
}
createNumberButtons()
let expression = []
let currentText = ""
let screen = document.querySelector(".screen")
let clickNumber = document.querySelectorAll(".numberBox")
clickNumber.forEach(num => {
    num.addEventListener("click", () => {
        currentText += num.textContent
        screen.innerText += num.textContent
        screen.scrollLeft = screen.scrollWidth
    });
});

let clickOperator = document.querySelectorAll("#sign").forEach(signs => {
    signs.addEventListener("click", () => {
        expression.push(parseInt(currentText))
        currentText = ""
        screen.innerText += " " + signs.textContent + "\u00A0"
        screen.scrollLeft = screen.scrollWidth
        expression.push(signs.textContent)
    })
})

let clearButton = document.querySelector(".clearButton").addEventListener("click", () => {
    screen.innerText = ""
    currentText = ""
    expression = []
})

let zeroButton = document.querySelector(".Zero").addEventListener("click", () =>{
    screen.innerText += "0"
    currentText += "0"
})

let result = document.querySelector(".Enter").addEventListener("click", () =>{
    expression.push(parseInt(currentText))
    console.log(expression)
})
