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

module.exports = eqArrays;