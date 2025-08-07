const sumAll = function(start, end) {
    let result = 0
    if(start > end){
        let temp = start
        start = end
        end = temp
    }
    else if(start < 0 || end < 0 || typeof(start) != "number" || typeof(end) != "number" || !Number.isInteger(start) || !Number.isInteger(end) ){
        return "ERROR"
    }
    for(let i = start; i <= end; i++){
        result += i
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
