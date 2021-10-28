const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};



const eqObjects = function(object1, object2) {
//if ovbject ones values = object2s values but it should loop through object 2 then compare each value to each value in abject1
if(object1.length === object2.length){
  return true;
}


};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc);

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);