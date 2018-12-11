// Create a function that reverses a string
// 'Hi My name is Victor' should be:
// 'rotciV si eman yM iH'

let text = 'Hi My name is Victor'

function reverse(str) {
  // Check input
  if(!str || str.length < 2 || typeof str !== 'string'){
    return 'Not good';
  }

  let reversedStr = '';
  for(let i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
  }

  console.log(reversedStr);
  return reversedStr;
}

reverse(text)
// Time O(n)
// Space O(n)

function reverse2(str){
  return str.split('').reverse().join('');
}

reverse2(text)

const reverse3 = str => str.split('').reverse().join('');

reverse3(text)

const reverse4 = str => [...str].reverse().join('');

reverse4(text)