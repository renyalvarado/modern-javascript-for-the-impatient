// # 1
const escapedCodePoints = {
    8: "\\b", // backspace
    12: "\\f", // form feed
    10: "\\n", // line feed
    13: "\\r", // carriage return
    9: "\\t", // horizontal tab
    11: "\\v", // vertical tab
    39: "\\'", // apostrophe
    92: "\\", // backslash
}
function toEscapedString(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const codePoint = str.codePointAt(i);
        if (codePoint > 128) {
            result += `\\u{${codePoint.toString(16)}}`
        } else {
            const escapedCodePoint = escapedCodePoints[codePoint];
            result += escapedCodePoint ? escapedCodePoint : str.at(i);
        }
    }
    return result;
}
const exercise01Str = "I💛yellow \t(spanish - español-> amarillo)"
console.log(
    `Original String: ${exercise01Str}, `,
    `Escaped String ${toEscapedString(exercise01Str)}`
);
console.log("\n")

// # 2
// https://stackoverflow.com/questions/69032512/can-the-the-string-with-2-different-codepoints-which-form-1-character-consider
// https://dmitripavlutin.com/what-every-javascript-developer-should-know-about-unicode/
const ELIPSIS = "\u{2026}";
function fitsString(str, max_length) {
    if (max_length >= str.length) {
        return str
    }
    if (max_length < 1) {
        return ELIPSIS;
    }
    if (max_length === 1) {
        return str[0] + ELIPSIS;
    }
    let maxIndex = max_length - 1;
    const lastCharCode = str.charCodeAt(maxIndex);
    // 1 Character with two codepoints
    console.log("lastCharCode", lastCharCode);
    if ((lastCharCode >= 0XD800) && (lastCharCode <= 0XDBFF)) {
        maxIndex = maxIndex - 1;
    }
    return str.slice(0, maxIndex + 1) + ELIPSIS;
}

const exercise02Str = "This character (💛) is a yellow heart";
for (let i = 0; i <= exercise02Str.length + 3; i++) {
    console.log(i, fitsString(exercise02Str, i));
}
console.log("\n");


// # 3
const weirdStrinFunctionParams = [
  NaN,
  -NaN,
  Infinity,
  -Infinity,
  0,
  1,
  2,
  "string",
  [],
  {},
  null,
  undefined,
];
const exercise03Str = "This is a big string";
for(const param01 of weirdStrinFunctionParams) {
    for(const param02 of weirdStrinFunctionParams) {
        console.log(
            `exercise03Str.slice(${param01}, ${param02}): `, 
            exercise03Str.slice(param01, param02)
        );
    }
}
console.log("\n");


// # 4
function getAllSubstrings(str){
    const substrings = new Set();
    const chars = [...str];
    for (let i = 0; i < chars.length; i++) {
        for (let j = i + 1; j <= chars.length; j++) {
            const subchars = chars.slice(i, j);
            substrings.add(subchars.join(""));
        }
    }
    return [...substrings];
}
const exercise04Str = "This 💛 is yellow";
console.log(
    exercise04Str,
    getAllSubstrings(exercise04Str)
);
console.log("\n");


// # 5
function otherSlice(str, start, end) {
    return [...str].slice(start, end).join("");
}

const exercise05Str = "This char💛is a yellow heart";
console.log(
    otherSlice(exercise05Str, 8, 11)
);
