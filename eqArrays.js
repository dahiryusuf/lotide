const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1])
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);