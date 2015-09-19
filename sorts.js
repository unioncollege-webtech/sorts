var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];

// Your code goes here! Hooray!

function bubbleSort(oldArray) {
   
   var newArray = oldArray.slice();
   var arraySize = newArray.length;
   var swap;
   
   // To convert all strings to lowercase
   for (var j = 0; j < arraySize; j++) {
      if (typeof newArray[j] === 'string') { 
      newArray[j] = newArray[j].toLowerCase();
      }
   }
   
   for (var i = 0; i < (arraySize - 1); i++) {
       for (var k = 0; k < (arraySize - i - 1); k++) {
           if (newArray[k] > newArray[k + 1]) {
               swap = newArray[k];
               newArray[k] = newArray[k + 1];
               newArray[k + 1] = swap;
           }
       }
   }
   return newArray;
}


function quickSort(originalArray) {
   
   var coolArray = originalArray.slice();
   var coolSize = coolArray.length;
   var left = [];
   var right = [];
   var pivot = coolArray[0];
   
    if (coolArray.length === 0) {
        return [];
    }
 
   // To convert all strings to lowercase
   for (var j = 0; j < coolSize; j++) {
      if (typeof coolArray[j] === 'string') { 
      coolArray[j] = coolArray[j].toLowerCase();
      }
   }

    for (var i = 1; i < coolArray.length; i++) {
        if (coolArray[i] < pivot) {
           left.push(coolArray[i]);
        } else {
           right.push(coolArray[i]);
        }
    }
 
    return quickSort(left).concat(pivot, quickSort(right));
}   

console.log(bubbleSort(group1));
console.log(bubbleSort(group2));
console.log(bubbleSort(group3));

console.log(quickSort(group1));
console.log(quickSort(group2));
console.log(quickSort(group3));