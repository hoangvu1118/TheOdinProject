const fibonacci = function(num) {
    if(num <= 2 && num > 0) return 1
    else if(num == 0) return 0
    else if(num < 0) return "OOPS"
    let sequence = [1, 1]
    for(let i = 0; i < num - 2; i++){
        let tempValue = sequence[i] + sequence[i+1]
        sequence.push(tempValue)
    }
    return sequence[sequence.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
