const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"]; 
let result = tail(words)
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
