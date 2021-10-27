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

const middle = function(arr) {
  let newString = [];
  let x = 0;
  if (arr.length <= 2) {
    return newString;
  }
  if (arr.length % 2 === 0){
    x = arr.length % 2;
    newString.push(arr[x+1], arr[x+2]);
    } else {
    x = (arr.length / 2) + 0.5;
    newString.push(arr[x-1]);
  }
  return newString;
};

console.log(middle([1, 2, 3, 4])) // => [2]
console.log(middle([1, 2, 3]))

assertArrayEqual(middle([5,6,7]), 6);
assertArrayEqual(middle(["Hello", "Lighthouse", "Labs"]), "Lighthouse");