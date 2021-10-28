const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};



const eqObjects = function(object1, object2) {
//if object ones values = object2s values but it should loop through object 2 then compare each value to each value in object1
let x = 0;
if(Object.keys(object1).length === Object.keys(object2).length){
  for(let val in object1){
    for(let i in object2){
      if(val === i && object1[val] === object2[i]){
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc);

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);