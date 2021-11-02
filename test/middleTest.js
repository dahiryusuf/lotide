const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([5,6,7]), [6]);
assertArraysEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);