const numbers = [4, 12, 3, 8, 0, 22, 16];

let maxFor01 = -Infinity;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxFor01) {
        maxFor01 = numbers[i];
    }
}
console.log("#6", "maxFor01:", maxFor01);

let maxFor02 = -Infinity;
for (let myNumber of numbers) {
    if (myNumber > maxFor02) {
        maxFor02 = myNumber;
    }
}
console.log("#6", "maxFor02:", maxFor02);

let maxFor03 = -Infinity;
for (let index in numbers) {
    if (numbers[index] > maxFor03) {
        maxFor03 = numbers[index];
    }
}
console.log("#6", "maxFor03:", maxFor03);

console.log("#6", "maxArrayBonus:", Math.max(...numbers));


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
for (i in arr) {
    console.log(i, typeof i, i + 1)
    if (i + 1 === 10) console.log(arr[i])
}

const digitToName = (strDigit) => {
    switch (strDigit) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        default:
            throw new Error("Not a digit");
    }
};

for (let i = 0; i < 11; i++) {
    try {
        console.log("#8", i, digitToName(i));
    } catch (e) {
        console.error("#8", i, e.message)
    }
}
console.log();

const digitToNameUsingObject = (strDigit) => {
    const digitNames = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    const digitName = digitNames[strDigit];
    if (digitName === undefined) {
        throw new Error("Not a digit");
    }
    return digitName;
};
for (let i = 0; i < 11; i++) {
    try {
        console.log("#8", i, digitToNameUsingObject(i));
    } catch (e) {
        console.error("#8", i, e.message)
    }
}

let years;
let balance = 0;
const goal = 10;
let paymentAmount = 1;
const interestRate = 10;
for (years = 0; balance < goal; years++) {
    balance += paymentAmount;
    let interest = balance * interestRate / 100;
    balance += interest;

}
console.log("#10", `${years} years.`);
console.log();

let j = 0;
while (j <= 10) {
    console.log("#11", j);
    j++;
}

// #12
outer:
    for (let n = 0; n < arr.length; n++) {
        for (let p = 0; p < arr[n].length; p++) {
            if (arr[n][p] < 0) {
                break outer;
            }
        }
    }


// #13
let k = 0;
let m = 0;
let flag = true;
while ((k < arr.length) && flag) {
    while ((m < arr[k].length) && flag) {
        if (arr[k][m] < 0) {
            flag = false;
        } else {
            m++;
        }
    }
    k++;
    m = 0;
}

// #14
let count = 0;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        count++;
        sum += arr[i];
    }
}
let avg = count === 0 ? 0 : sum / count;

let result = undefined;
const a = [0, 10, 20, 30, 40, 50];
const b = [20, 30];
outside:
    for (let i = 0; i < a.length - b.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i + j] != b[j]) {
                break;
            }
            result = i;
            break outside;
        }
    }
console.log("#15", result);


result = undefined;
let found = false;
let firstIndex = 0;
while ((firstIndex < a.length - b.length) && !found) {
    let isBroken = false;
    let secondIndex = 0;
    while ((secondIndex < b.length) && !isBroken) {
        if (a[firstIndex + secondIndex] != b[secondIndex]) {
            isBroken = true;
        }
        secondIndex++;
    }
    if (!isBroken) {
        result = firstIndex;
        found = true;
    }
    firstIndex++
}
console.log("#15", result);