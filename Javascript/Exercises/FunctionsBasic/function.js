function add7(n){
    return n + 7
}

let multiply = (num1, num2) => num1 * num2

let capitalize = str => str.replace(str[0], str[0].toUpperCase())

function lastLetter(str1){
    return str1.slice(-1)
}
console.log(add7(8))
console.log(multiply(4, 5))
console.log(capitalize("hOaNg"))
console.log(lastLetter("minH"))
