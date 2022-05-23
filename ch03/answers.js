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
