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
