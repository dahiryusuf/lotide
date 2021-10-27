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

const without = function(source, itemsToRemove){
  let newArray = source;
  for(let i in newArray) {
    if(newArray[i] === itemsToRemove[0] || newArray[i] === itemsToRemove[i]) {
      newArray.splice(i, 1);
    }
  }
  return newArray;
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) 
without([1, 2, 3, 4, 5], [3])// => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
 //Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);