const middle = function(arr) {
  let newString = [];
  let x = 0;
  if (arr.length <= 2) {
    return newString;
  }
  if (arr.length % 2 === 0){
    x = (arr.length / 2)
    newString.push(arr[x-1], arr[x]);
    } else {
    x = (arr.length / 2) + 0.5;
    newString.push(arr[x-1]);
  }
  return newString;
};

module.exports = middle;