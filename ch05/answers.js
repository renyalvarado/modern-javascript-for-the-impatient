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
  