let array = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];

const findDuplicatesInArray = (array) => {
  let obj = {};
  let result = [];
  for (element of array) {
    if (obj[element]) {
      obj[element] = obj[element] + 1;
    } else {
      obj[element] = 1;
    }
  }
  for (property in obj) {
    if (obj[property] >= 2) {
      result.push(property);
    }
  }
  return result;
};

console.log(findDuplicatesInArray(array));

const removeFalsy = (arr) => {
  let result = [];
  for (let value of arr) {
    if (value) {
      result.push(value);
    }
  }
  return result;
};
array = [NaN, 0, 15, false, -22, "", undefined, 47, null];
console.log(removeFalsy(array));

const findPair = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
};
console.log(findPair([10, 20, 10, 40, 50, 60, 70], 50));
