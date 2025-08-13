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
let dotPressed = false

let pressDot = document.querySelector(".Dot").addEventListener("click", () => {
    currentText += "."
    screen.innerText += "."
    if(currentText.includes(".") && dotPressed){
        alert("You can not have more than 1 decimal point in a number!")
        currentText = currentText.slice(0,-1)
        screen.innerText = screen.innerText.slice(0,-1)
    }
    dotPressed = true
})

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
        if(!currentText.includes(".")){
            expression.push(parseInt(currentText))
        }
        else{
            expression.push(parseFloat(currentText))
        }
        currentText = ""
        dotPressed = false

        if(equalPressed){
            screen.innerText = expression[0]
            equalPressed = false
        }

        let tempResult = 0
        if(expression.length > 2){
            let operator = expression[1]
            tempResult = Math.round(operate(operator, expression[0], expression[2]) * 100) / 100
            expression = [tempResult]   
            screen.innerText = expression[0] + " " + signs.textContent + "\u00A0"
        }
        else{
            screen.innerText += " " + signs.textContent + "\u00A0"
        }
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
    dotPressed = false
}

let zeroButton = document.querySelector(".Zero").addEventListener("click", () =>{
    screen.innerText += "0"
    currentText += "0"
})

let resultEqualSign = document.querySelector(".Enter").addEventListener("click", () =>{
    if(!currentText.includes(".")){
            expression.push(parseInt(currentText))
    }
    else{
            expression.push(parseFloat(currentText))
    }
    let tempResult = 0
    let operator = expression[1]
    tempResult = Math.round(operate(operator, expression[0], expression[2]) * 100) / 100
    expression = []
    currentText = String(tempResult)
    let result = document.querySelector(".screen")
    let displayResult = document.createElement("p")
    displayResult.classList.add("displayResult")
    displayResult.textContent = tempResult
    result.appendChild(displayResult)
    equalPressed = true
})

let deleteButton = document.querySelector(".delButton").addEventListener("click", () => {
    screen.innerText = screen.innerText.slice(0,-1)
    let finalChar = currentText[currentText.length - 1]
    currentText = currentText.slice(0,-1)

    if(finalChar == "."){
        dotPressed = false
    }
})

