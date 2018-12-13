//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//First solution
// Objects in JavaScript can work as HashTables
// That's why this solution works, hashing in Objects the key of the first occurrence of a character

function firstRecurringCharacter(input) {
  let map = {};
  for(let i = 0; i < input.length; i++) {
    if(!map[input[i]]){
      map[input[i]] = true;
    }else{
      console.log(input[i]);
      return input[i];
    }
  }
  console.log(undefined);
  return undefined;
}
//Test Cases
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
// array = [2,3,4,5]; // It should return undefined
// array = [2,1,0,9,3,5,7,2,4]; // It should return 2
// array = [2,5,5,2,3,5,1,2,4]; // It should return 5
// array = [2,1,1,2,3,5,1,2,4]; // It should return 1
array = [2,5,1,2,3,5,1,2,4]; // It should return 2
firstRecurringCharacter(array)
firstRecurringCharacter2(array)
/****************************
// Time Complexity  O(n)    |
// Space Complexity O(n)    |
****************************/

// Second solution:

function firstRecurringCharacter2(input) {
  let map = {};
  for(let i = 0; i < input.length; i++) {
    if(map[input[i]] !== undefined) {
      console.log(input[i]);
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  console.log(undefined);
  return undefined;
}