// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(menu){
    for(let obj in menu){
        if(typeof(menu[obj]) == "number"){
            menu[obj] *= 2
        }
    }
}
console.log(menu)

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

function camelize(string){
    let stringHolder = string.split("-")
    let result = stringHolder.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    return result.join("")
}

console.log(camelize("list-style-image"))


let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)

function filterRange(arr, start, stop){
    return arr.filter(item => (start <= item && item <= stop))
}


let arr1 = [5, 3, 8, 1];

filterRangeInPlace(arr1, 1, 4); // removed the numbers except from 1 to 4

alert( arr1 ); // [3, 1]

function filterRangeInPlace(arr, a,  b){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] < a || arr[i] > b){
            arr.splice(i,1)
            i--
        }
    }
}

let arr2 = [5, 2, 1, -10, 8];

arr2.sort((a,b) => b - a)

alert( arr2 ); // 8, 5, 2, 1, -10


let arr3 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr3);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr3 ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr3) {
    return arr3.slice().sort()
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
let result = strings.includes("Hare")
console.log(result)


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let names = users.map(user => user.name)/* ... your code */

alert( names ); // John, Pete, Mary

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}))
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith


// Sort users by AGE
let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 28 };

let arrH = [ pete1, john1, mary1];

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

sortByAge(arrH);

// now: [john, mary, pete]
alert(arrH[0].name); // John
alert(arrH[1].name); // Mary
alert(arrH[2].name); // Pete

alert( getAverageAge(arrH) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr){
    let sum = 0
    for(let person of arr) {
        sum += person.age
    }
    let result = Math.round(sum / arr.length)
    return result
}

let users1 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users1);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
function groupById(user){
    return user.reduce((object, value) =>{
        object[value.id] = value
        return object
    },{})
}
console.table(usersById)

let test = "r3ace3car"
let temp = test.split("").reverse().join("")
console.log(temp)
console.log(test)
