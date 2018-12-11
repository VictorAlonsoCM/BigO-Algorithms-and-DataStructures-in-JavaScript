// Merge two sorted arrays into one
// Input: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// Output: [0, 3, 4, 4, 30, 31]

// Native solution
function mergeSortedArrays(array1, array2) {
  var mergedArray = [];
  let j = 0;
  let i = 0;

  // Check inputs
  if(array1.length === 0){
    console.log(array2);
    return array2;
  }

  if(array2.length === 0){
    console.log(array1);
    return array1;
  }

  if(array1.length >= array2.length) {
    mergedArray = array1;
    while(i <= mergedArray.length){
      if(j <= array2.length && array1[i] > array2[j]){
        mergedArray.splice(i, 0, array2[j]);
        j++;
      }
      else{
        i++;
      }
    }
  }else {
    mergedArray = array2;
    while(i <= mergedArray.length){
      if(j <= array1.length && array2[i] > array1[j]){
        mergedArray.splice(i, 0, array1[j]);
        j++;
      }
      else{
        i++;
      }
    }
  }
  console.log(mergedArray);
  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

// Better
function mergeSortedArrays2(array1, array2){
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  // Check inputs
  if(array1.length === 0){
    return array2;
  }

  if(array2.length === 0){
    return array1;
  }

  while(array1Item || array2Item){
    if(!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i]
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  console.log(mergedArray, 'better solution');
}

mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]);