const eqArrays = function(arr, arr2) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr2[i]) {
      x++
    }
  }
  if (x === arr.length) {
    return true;
  }
  else {
    return false;

  }
}

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {
  const results = {};
  let i = 0;
  for (const item of sentence) {
    if (item !== ' ') {
      if (results[item]) {
        results[item].push(i);
      } else {
        results[item] = [i];
      }
    }
    i++;
  }
  return results;
}

countLetters("hello")