// level {2}

let removeEven = (arr) => {
  return arr.filter((ele) => ele % 2 !== 0);
};
removeEven([2, 4, 1, 3, 8]);

// aeiou

let addUpper = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() === "a" ||
      str[i].toLowerCase() === "e" ||
      str[i].toLowerCase() === "i" ||
      str[i].toLowerCase() === "o" ||
      str[i].toLowerCase() === "u"
    ) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};
addUpper("Elite");

let findMax = (arr) => {
  arr.sort((a, b) => b - a);
  return arr[0];
};
findMax([10, 30, 5, 1]);
