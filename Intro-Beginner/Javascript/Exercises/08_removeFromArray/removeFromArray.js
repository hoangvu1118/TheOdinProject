const removeFromArray = function(arr, ...key) {
    let result = []
    for(let element of arr){
        if(!key.includes(element)){
            result.push(element)
        }
    }
    return result
};  

// Do not edit below this line
module.exports = removeFromArray;
