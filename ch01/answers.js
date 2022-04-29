console.log("#1 -> ", "0 + NaN =", 0 + NaN); // NaN
console.log("#1 -> ", "0 + Infinity =", 0 + Infinity); // Infinity
console.log("#1 -> ", "0 + false =", 0 + false); // 0
console.log("#1 -> ", "0 + true =", 0 + true); // 1
console.log("#1 -> ", "0 + undefined =", 0 + undefined); // NaN
console.log();

console.log("#2 -> ", "[] + [] =", [] + []); // ''
console.log("#2 -> ", "{} + [] =", {} + []); // '[object Object]'
console.log("#2 -> ", "[] + {} =", [] + {}); // '[object Object]'
console.log("#2 -> ", "{} + {} =", {} + {}); // '[object Object][object Object]'
console.log("#2 -> ", "[] - {} =", [] - {}); // NaN
console.log();

console.log("#3 -> ", "7 % 2 =", 7 % 2); // 1
console.log("#3 -> ", "-7 % 2 =", -7 % 2); // -1
console.log("#3 -> ", "-7 % -2 =", -7 % -2); // -1
console.log("#3 -> ", "7 % -2 =", 7 % -2); // 1
console.log();

console.log("#4 -> ", "725 % 360 =", 725 % 360); // 5
console.log();

console.log(
    "#5 -> ", "\\\\", "\u{005C}\u{005C}", "\\\u{005C}", "\u005C\u005C",
    `${String.fromCodePoint(0x5C)}${String.fromCodePoint(0x5C)}`
); // \\ \\ \\ \\ \\
console.log();

console.log("#6 -> ", "\u{1F310}", "🌐", "\uD83C\uDF10"); // 🌐 🌐 🌐
console.log();

const specialSign = "_";
console.log("#7 -> ", `This is an outer template: '${[1, 2, 3].join(`"${specialSign}"`)}'`); // '1"_"2"_"3'
console.log();

console.log("#8 -> ", "[0, , 2, , , , 6] =", [0, , 2, , , , 6]); // [ 0, <1 empty item>, 2, <3 empty items>, 6 ]
console.log("#8 -> ", "[0, undefined, 2, undefined, 4] =", [0, undefined, 2, undefined, 4]);
// [ 0, undefined, 2, undefined, 4 ]
const arrayWithHoles = [0, 1];
arrayWithHoles[4] = 4;
console.log("#8 -> ", "arrayWithHoles =", arrayWithHoles); // [ 0, 1, <2 empty items>, 4 ]
console.log();

const arrayOtherIndex = [];
arrayOtherIndex[0] = 0;
arrayOtherIndex[0.5] = 0.5;
arrayOtherIndex[1] = 1;
arrayOtherIndex[1.5] = 1.5;
arrayOtherIndex[2] = 2;
console.log("#9 -> ", "arrayWithHoles =", arrayOtherIndex); // [ 0, 1, 2, '0.5': 0.5, '1.5': 1.5 ]
console.log();

console.log("#10 -> ", "String([0, 2, 4], [1, 3, 5]) =", String([[0, 2, 4], [1, 3, 5]])); // '0,2,4,1,3,5'
console.log("#10 -> ", "`${[[0, 2, 4], [1, 3, 5]]}` =", `${[[0, 2, 4], [1, 3, 5]]}`); // '0,2,4,1,3,5'
console.log();

try {
    const harry = {
        name: "Harry",
        friends: []
    }

    const sally = {
        name: "Sally",
        friends: [harry]
    }
    harry.friends.push(sally)
    console.log("#11 -> ", JSON.stringify(harry));
}catch(e) {
    console.log("#11 -> ", e.message);
}