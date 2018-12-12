// Given 2 Arrays, create a function that let's a user know (true/false)
// Whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
//-----------------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

// Easiest Solution

function containsCommonItem(array1, array2){
  for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
      if(array1[i] === array2[j]){
        return true;
      }
    }
  }
  return false;
}

//Time Complexity O(n*m)
//Space Complexity O(1)

// Better Solution

function containsCommonItem2(array1, array2){
  // Iterate over array1 to convert it into an object where properties === items
  let map = {};
  for(let i = 0; i < array1.length; i++){
    if(!map[array1[i]]){
      const item = array1[i];
      map[item] = true;
    }
  }
  // Iterate over second array to check if it exist on the created object
  for(let j = 0; j < array2.length; j++){
    if(map[array2[j]]){
      return true;
    }
  }

  return false;
}

//Time Complexity O(n+m)
//Space Complexity O(n)

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

console.log(containsCommonItem2(array1, array2));

//Lenguaje specific

function containsCommonItem3(array1, array2){
  return array1.some(item => array2.includes(item));
}