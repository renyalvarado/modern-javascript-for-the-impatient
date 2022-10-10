// # 1
function plusMinusZero(x) {
	if (Object.is(x, 0)) {
		return 1;
	}
	if (Object.is(x, -0)) {
		return -1;
	}
	return 0;
}

function plusMinusZero2(x) {
	const result = 1 / x;
	if (result === Infinity) {
		return 1;
	}
	if (result === -Infinity) {
		return -1;
	}
	return 0;
}

console.log(`plusMinusZero(0): ${plusMinusZero(0)}`);
console.log(`plusMinusZero(-0): ${plusMinusZero(-0)}`);
console.log(`plusMinusZero(10): ${plusMinusZero(10)}`);
console.log(`plusMinusZero2(0): ${plusMinusZero2(0)}`);
console.log(`plusMinusZero2(-0): ${plusMinusZero2(-0)}`);
console.log(`plusMinusZero2(10): ${plusMinusZero2(10)}`);

// # 2
// How numbers are encoded in JavaScript
// https://2ality.com/2012/04/number-encoding.html
// https://indepth.dev/posts/1139/here-is-what-you-need-to-know-about-javascripts-number-type

// IEEE 754
// https://en.wikipedia.org/wiki/IEEE_754
// https://en.wikipedia.org/wiki/Minifloat
// Two's complement -> https://en.wikipedia.org/wiki/Two%27s_complement
// https://float.exposed/

function fromFloatToBinaryStr(floatNumber) {
	const dv = new DataView(new ArrayBuffer(8)); // 64 bits
	dv.setFloat64(0, floatNumber);
	let result = "";
	for (let i = 0; i < 8; i++) {
		const byteStr = dv.getUint8(i).toString(2);
		result = result + byteStr.padStart(8, "0");
	}

	return result;
}

function getIEEE754PartsFromBinaryStr(binaryStr) {
	const strSign = binaryStr[0];
	const strExponent = binaryStr.slice(1, 12);
	return {
		signNumber: strSign,
		signSign: strSign === "0" ? "+" : "-",
		offsetExponent: strExponent,
		exponent: parseInt(strExponent, 2) - 1023,
		significand: binaryStr.slice(12),
	};
}

function classifyNumber(floatNumber) {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
	if (!Number.isFinite(floatNumber)) {
		return "special";
	}
	if (floatNumber == 0) {
		return "denormalized";
	}
	const iee754Parts = getIEEE754PartsFromBinaryStr(
		fromFloatToBinaryStr(floatNumber)
	);
	if (iee754Parts.exponent == -1022) {
		return "denormalized";
	}
	return "normalized";
}
for (let i = -9; i <= 11; i++) {
	const binaryStr = fromFloatToBinaryStr(i);
	console.log(
		i.toString().padStart(2, "0"),
		binaryStr,
		"\n",
		getIEEE754PartsFromBinaryStr(binaryStr)
	);
}

[
	1,
	2,
	3,
	Infinity,
	-Infinity,
	NaN,
	0,
	2 ** -1022,
	35.6,
	4.45014771701440227211e-308,
	2.22507385850720385342e-308,
].map((i) => {
	const binaryStr = fromFloatToBinaryStr(i);
	console.log(getIEEE754PartsFromBinaryStr(binaryStr));
	console.log(i, " -> ", classifyNumber(i), "\n");
});

// # 3
// p has to be greater than e
console.log("(1e4).toPrecision(3):", (1e4).toPrecision(3));
console.log("(1e4).toPrecision(4): ", (1e4).toPrecision(4));
console.log("(1e4).toPrecision(5)", (1e4).toPrecision(5));

// # 4
function format(n, strFormat) {
	const regexFmt = /%((?<zero>0)?(?<numbersize>[1-9]))?(?<vartype>[fexodi])/;
	const m = strFormat.match(regexFmt);
	if (m == null) { // Not match
		throw new Error("Format provided doesn't match format required");
	}
	if (m.groups.vartype === "f") {
		return Number.parseFloat(n);
	}
	if (m.groups.vartype === "e") {
		return Number.parseFloat(n).toExponential();
	}
	const numSystem = {
		"x": 16,
		"o": 8,
		"d": 10,
		"i": 10,
	}
	const base = numSystem[m.groups.vartype];
	if (base == null) {
		throw new Error(`Invalid num system: ${base}`);
	}
	const finalNumber = n.toString(base);
	const fillerStr = m.groups.zero ? "0" : " ";
	const numberSize = parseInt(m.groups.numbersize);
	return finalNumber.padStart(numberSize, fillerStr).toUpperCase();
}

console.log(format(42, "%04x"));
console.log(format(3.14, "%f"));
console.log(format(123.456, "%e"));
console.log(format(42, "%04o"));


// # 5
function getExponent(n) {
	if (n === 0) {
		return 0;
	}
	let exponent = 0;
	if (n < 0) {
		n = -1 * n;
	}
	const [multiplier, step] = (n >= 1) ? [0.1, 1] : [10, -1];
	while ((n >= 10.0) || (n < 1)) {
		n = n * multiplier;
		exponent = exponent + step;
	}
	return exponent;

}

console.log(getExponent(42));
console.log(getExponent(45.89));
console.log(getExponent(3520));
console.log(getExponent(-100));
console.log(getExponent(0.5));
console.log(getExponent(0.01));
console.log(getExponent(0.0));
console.log(getExponent(1));
console.log(getExponent(10));


// # 6
console.log("Largest number:", Number.MAX_VALUE);
console.log("Smallest positive number:", Number.MIN_VALUE);
console.log(
	"Difference between 1 and the smallest float number greater than 1:",
	Number.EPSILON
);


// # 7
console.log("Smallest representable number after 1", 1 + Number.EPSILON);

// # 8
function thousandDigit(digit) {
	return BigInt(digit.repeat(1000))
}
console.log(thousandDigit("3"));


// # 9
function dateToPlainObject(myDate) {
	return {
		year: myDate.getFullYear(),
		month: myDate.getMonth(),
		day: myDate.getDate(),
		weekday: myDate.getDay(),
		hours: myDate.getHours(),
		minutes: myDate.getMinutes(),
		seconds: myDate.getSeconds(),
		millis: myDate.getMilliseconds()
	}
}
console.log("dateToPlainObject(new Date())", dateToPlainObject(new Date()));


// # 10
function diffHoursFromUTC() {
	const now = new Date();
	return now.getTimezoneOffset() / 60.0;
}
console.log("diffHoursFromUTC()", diffHoursFromUTC());


// # 11
function isLeapYear(year) {
	if (year % 4 !== 0) {
		return false;
	}
	if (year % 100 !== 0) {
		return true;
	}
	return (year % 400 === 0);
}
console.log("isLeapYear(2000)", isLeapYear(2000));
console.log("isLeapYear(2020)", isLeapYear(2020));
console.log("isLeapYear(2022)", isLeapYear(2022));
console.log("isLeapYear(2100)", isLeapYear(2100));


// # 12
function getWeekDay(myDate) {
	const days = myDate.getTime() / (1000 * 60 * 60 * 24);
	return Math.trunc(((days % 7) + 4) % 7);
}
const firstDayEpoch = new Date(1970, 0, 1);
const importantDay = new Date(2022, 9, 10);
console.log(firstDayEpoch, getWeekDay(firstDayEpoch));
console.log(importantDay, getWeekDay(importantDay));

// # 13
function getArrayCalendar(yearNumber, monthNumber) {
	const month = [];
	let week = [];
	let day = 1;
	let date = new Date(yearNumber, monthNumber, day);
	for (let i = 0; i < date.getDay(); i++) {
		week.push(null);
	}
	// month[0] = week;
	while (date.getMonth() == monthNumber) {
		if (week.length == 7) {
			month.push(week);
			week = []
		}
		week.push(day);
		day = day + 1;
		date = new Date(yearNumber, monthNumber, day);
	}
	for (let i = week.length; i < 7; i++) {
		week.push(null);
	}
	month.push(week);
	return month;
}

function arrayCalendarToString(arrayCalendar) {
	return arrayCalendar.map(
		week => week.map(
			day => day ? day.toString().padStart(2, " ") : "  "
		).join(" ")
	).join("\n");
}
const calendar = getArrayCalendar(2022, 09)
console.log(calendar);
console.log(arrayCalendarToString(calendar));


// # 14
function diffDatesDays(date01, date02) {
	const diffMilliseconds = date02.getTime() - date01.getTime();
	return diffMilliseconds / (1000 * 60 * 60 * 24);
}
const d01 = new Date(2022, 09, 3);
const d02 = new Date(2022, 09, 4, 12);
console.log(diffDatesDays(d01, d02));


// # 15
function diffDatesYears(date01, date02) {
	;
	return diffDatesDays(date01, date02) / 365;
}
const d03 = new Date(2020, 09, 3);
const d04 = new Date(2022, 09, 4, 12);
console.log(diffDatesYears(d03, d04));


// # 16
const deadline = new Date(Date.UTC(2020, 0 /* January */ , 31));
deadline.setUTCMonth(1 /* February */ );
deadline.setUTCDate(1);
console.log(deadline.toUTCString());


// # 16
const deadline02 = new Date(Date.UTC(2020, 1 /* January */ , 1));
// Try to change deadline to March 31th
deadline02.setUTCDate(31);
deadline02.setUTCMonth(2 /* March */ );
deadline02.setUTCFullYear(2020);
console.log(deadline02.toUTCString());


// # 17
const stringDates = [
	"3/14/2020",
	"March 14, 2020",
	"14 March 2020",
	"2020-03-14",
	"2020-03-14 ",
];

stringDates.forEach(stringDate => {
	console.log(stringDate, new Date(stringDate));
});
