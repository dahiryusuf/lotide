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

module.exports = eqArrays;