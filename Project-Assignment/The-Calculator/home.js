function add(a,b){
    return a + b
}

function subtract(a ,b){
    return a - b
}

function divide(a , b){
    if(b === 0){
        alert("Cannot divide 0!")
        return 
    }
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
let equalPressed = false

let clickNumber = document.querySelectorAll(".numberBox")
clickNumber.forEach(num => {
    num.addEventListener("click", () => {
        if(equalPressed == true){
            cleanUpScreen()
            equalPressed = false
        }
        currentText += num.textContent
        screen.innerText += num.textContent
        screen.scrollLeft = screen.scrollWidth
    });
});

let clickOperator = document.querySelectorAll("#sign").forEach(signs => {
    signs.addEventListener("click", () => {
        expression.push(parseInt(currentText))
        currentText = ""
        
        if(equalPressed){
            screen.innerText = expression[0]
            equalPressed = false
        }

        let tempResult = 0
        if(expression.length > 2){
            let operator = expression[1]
            tempResult = operate(operator, expression[0], expression[2])
            expression = [tempResult]   
            screen.innerText = expression[0] + " " + signs.textContent + "\u00A0"
        }
        else{
            screen.innerText += " " + signs.textContent + "\u00A0"
        }
        console.log(expression)
        screen.scrollLeft = screen.scrollWidth
        expression.push(signs.textContent)
    })
})

let clearButton = document.querySelector(".clearButton").addEventListener("click", () => {
    screen.innerText = ""
    currentText = ""
    expression = []
})

function cleanUpScreen(){
    screen.innerText = ""
    currentText = ""
    expression = []
}

let zeroButton = document.querySelector(".Zero").addEventListener("click", () =>{
    screen.innerText += "0"
    currentText += "0"
})

let resultEqualSign = document.querySelector(".Enter").addEventListener("click", () =>{
    expression.push(parseInt(currentText))
    let tempResult = 0
    let operator = expression[1]
    tempResult = operate(operator, expression[0], expression[2])
    console.log(expression)
    expression = []
    currentText = tempResult
    console.log(tempResult)
    console.log(expression)
    let result = document.querySelector(".screen")
    let displayResult = document.createElement("p")
    displayResult.classList.add("displayResult")
    displayResult.textContent = tempResult
    result.appendChild(displayResult)
    equalPressed = true
})

let deleteButton = document.querySelector(".delButton").addEventListener("click", () => {
    screen.innerText = screen.innerText.slice(0,-1)
    currentText = currentText.slice(0,-1)
})
