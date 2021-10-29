const eqArrays = function(arr, arr2){
  let x = 0;
  for(let i = 0;i < arr.length;i++){
    if(arr[i] === arr2[i]){
        x++
      }
  }
  if(x === arr.length){
   return true;
  }
  else{
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



const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word.length);

assertArrayEqual(results1[0], words[0][0])
assertArrayEqual(results2[1], words[1][1])
assertArrayEqual(results3[1], words[1].length)



