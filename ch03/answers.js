"use strict";

function indexOf(arr, value) {
    for (let i in arr) {
        if (arr[i] === value) return i
    }
    return -1
}
console.log("#1", indexOf([0, 10, 20, 30, 40], 30));
// returns key that matches the value
console.log("#1", indexOf({ a: 10, b: 20, c: 30, d: 40 }, 20));


function lastIndexOf(arr, value) {
    const keys = Object.keys(arr).reverse();
    for (let key of keys) {
        if (arr[key] === value) {
            return key;
        }
    }
    return -1;
}
console.log("#2",
    lastIndexOf([0, 10, 20, 10, 40, 50, 60, 70, 80, 90, 100, 110], 10)
);
console.log("#2", lastIndexOf({ a: 10, b: 20, c: 10, d: 40 }, 10));


function values(f, low, high) {
    const arr = [];
    for (let i = low; i <= high; i++) {
        arr.push(() => {
            const x = i;
            return f(x);
        })
    }
    return arr;
}
const a = values((x) => console.log("#3", `x is ${x}`), 12, 15);
a.forEach(f => f());


console.log("#4", [30, 20, 50, 10, 18].sort((x, y) => y - x));
console.log("#4", [30, 20, 50, 10, 18].sort((x, y) => x - y));
console.log("#4", ["Dog", "Bird", "Moose", "Cat"].sort(
    (x, y) => x.length - y.length)
);

function constructCounter(initValue, step) {
    let counter = initValue;
    return {
        count: () => {
            const oldCounter = counter;
            counter += step;
            return oldCounter;
        }
    };
}

const myFirstCounter = constructCounter(0, 2)
console.log("#5", myFirstCounter.count()) // 0
console.log("#5", myFirstCounter.count()) // 2



function f(a = 1, b = 2) { 
    a = a + 5;
    console.log(`a=${a}, b=${b}`);
};
f(); // a=1, b=2
// f(a=5); // a=5, b=2
// f(a = 7, b = 10); // a=7, b=10
// f(b = 10, a = 7); // Order is required: a=10, b=7
// In the web browser console doesn't show error but with Node.js in strict
// mode shows this error: 
// Uncaught TypeError TypeError: Assignment to constant variable. 
// It looks like it something related to a redeclaration of the variable if
// the name parameter is passed. If we want this behavior we should try
// destructured parameters


function average(...numbers) {
    if (numbers.length === 0) {
        return NaN;
    }
    let total = 0;
    for(let number of numbers) {
        total += number;
    }
    return total / numbers.length;
}
console.log("#7", `average(1, 2, 3) = ${average(1, 2, 3)}`);
console.log("#7", `average(1, 1, 2) = ${average(1, 1, 2)}`);


function capitalization(...str) {
    if(str.length === 0) {
        return "";
    }
    let strCamelCase = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        strCamelCase += str[i];
    }
    return strCamelCase;
}
console.log("#8", capitalization());
console.log("#8", capitalization(...""));
console.log("#8", capitalization(..."bruno"));