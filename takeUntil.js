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


const takeUntil = function(array, callback) {
  let val = array.map(callback);
  let arr = [];
  for(let i in val){
    if(!val[i]){
      arr.push(array[i]);
    }
    else{
      return arr;
    }
  }
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArrayEqual(results1[0], data1[0])
assertArrayEqual(results2[1], data2[1])

module.exports = takeUntil;
