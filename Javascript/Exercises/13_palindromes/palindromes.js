const palindromes = function (str) {
    let palindromeCheck = ""
    for(let char of str){
        if(char != " " && char != "." && char != "," && char != "!"){
            palindromeCheck += char.toLowerCase()
        }
    }
    let reverseChar = reversed(palindromeCheck)
    return palindromeCheck === reverseChar ? true : false
};

function reversed(str){
    return str.split("").reverse().join("")
}
// Do not edit below this line
module.exports = palindromes;
