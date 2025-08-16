const findTheOldest = function(objects) {
    let oldest = objects[0]
    let date = new Date()
    for(let person of objects){
        let age = 0
        if(!("yearOfDeath" in person)){
            age = date.getFullYear() - person.yearOfBirth
            person["yearOfDeath"] = date.getFullYear()
        }
        else{
            age = person.yearOfDeath - person.yearOfBirth
        }
        let ageOfPrevious = oldest.yearOfDeath - oldest.yearOfBirth
        if(ageOfPrevious <= age){
            oldest = person
        }
    }
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
