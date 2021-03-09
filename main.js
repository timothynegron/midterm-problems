function isEvenlyDivisible(num1, num2) {
  return num1 % num2 === 0 ? true : false;
}

function halfSquare(num) {
  return (num * num) / 2;
}

function exclaim(str) {
  return str.replaceAll("!", "") + "!";
}

function isLong(str) {
  if (str.length >= 15) {
    return true;
  } else {
    return false;
  }
}

function countWords(words) {
  let count = 1;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === " ") {
      count++;
    }
  }
  return count;
}

function containsDigit(str) {
  if (str === "") {
    return false;
  }
  const numbers = "1234567890";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (str[i] === numbers[j]) {
        return true;
      }
    }
  }
  return false;
}

function containsSpace(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      return true;
    }
  }
  return false;
}

function digits(num) {
  if (num < 0) {
    num *= -1;
  }
  let arr = num.toString().split(".").join("");
  return Array.from(arr).map((i) => Number(i));
}

function truncate(str) {
  return str.length < 15 ? str : str.slice(0, 8) + "...";
}

function containsLowerCase(str) {
  if (str.length === 0) {
    return false;
  } else if (/[a-z]/.test(str)) {
    return true;
  } else {
    return false;
  }
}

function containsUpperCase(str) {
  if (str.length === 0) {
    return false;
  } else if (/[A-Z]/.test(str)) {
    return true;
  } else {
    return false;
  }
}

function containsNonAlphanumeric(str) {
  if (str.length === 0) {
    return false;
  } else if (/[^a-zA-Z0-9]/.test(str)) {
    return true;
  } else {
    return false;
  }
}

function isValidPassword(password) {
  if (!containsLowerCase(password)) {
    return false;
  }
  if (!containsUpperCase(password)) {
    return false;
  }
  if (containsSpace(password)) {
    return false;
  }
  if (!containsDigit(password)) {
    return false;
  }
  if (!containsNonAlphanumeric(password)) {
    return false;
  }
  return true;
}

function onlyPunchy(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].replaceAll("!", "");
    if (temp.length < 15) {
      newArr.push(exclaim(arr[i]));
    }
  }
  return newArr;
}

module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
};
