const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr, arr2){
  let x = 0;
  let length = arr.length
  if(arr.length < arr2.length){
    length = arr2.length;
  }
  for(let i = 0;i < length;i++){
    if(arr[i] === arr2[i]){
        x++
      }
  }
  if(x === length){
   return true;
  }
  else{
  return false;
    
  }
}


const eqObjects = function(object1, object2) {
//if object ones values = object2s values but it should loop through object 2 then compare each value to each value in object1
let x = 0;
objectskeys = Object.keys(object1)
if(Object.keys(object1).length === Object.keys(object2).length){
  for(let val in object1){
    for(let i in object2){
      if(Array.isArray(object1[val]) && Array.isArray(object2[i])){
        return eqArrays(object1[val],object2[i])
        
      }
      if(object1[val] === object2[i]){
        x++;
      }
    }
  }
}
  if(x === Object.keys(object1).length){
    return true;
  }
  else{
    return false;
  }

};

 
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

module.exports = eqObjects;