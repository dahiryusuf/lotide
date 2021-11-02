const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(obj, callback) {
  let key;
  let i = 0;
  for (const item in obj) {
    let val = obj[item];
    if (callback(val)) {
      key = item;
    if(key){
      return key;
    }
  }
}
}

assertEqual(findKey({
  "Blue Hill": { stars: 2 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "Blue Hill") // => "noma"

module.exports = findKey;