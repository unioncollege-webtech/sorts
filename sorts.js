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
   console.log(newArray);
}

function swap(myArray, indexOne, indexTwo) {
    
    var holding = myArray[indexOne];
    myArray[indexOne] = myArray[indexTwo];
    myArray[indexTwo] = holding;
    
}

function partition(myArray, left, right) {

    var pivot   = myArray[Math.floor((right + left) / 2)],
        x       = left,
        y       = right;


    while (x <= y) {

        while (myArray[x] < pivot) {
            x++;
        }

        while (myArray[y] > pivot) {
            y--;
        }

        if (x <= y) {
            swap(myArray, x, y);
            x++;
            y--;
        }
    }
    return x;
}

function quickSort(oldArray, left, right) {

    var newArray = oldArray.slice();
    var index;
    
    // To convert all strings to lowercase
   for (var j = 0; j < newArray.length; j++) {
      if (typeof newArray[j] === 'string') { 
      newArray[j] = newArray[j].toLowerCase();
      }
   }

    if (newArray.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? newArray.length - 1 : right;

        index = partition(newArray, left, right);

        if (left < index - 1) {
            quickSort(newArray, left, index - 1);
        }

        if (index < right) {
            quickSort(newArray, index, right);
        }

    }
   console.log(newArray);
}

//bubbleSort(group1);
//bubbleSort(group2);
//bubbleSort(group3);

//quickSort(group1);
//quickSort(group2);
quickSort(group3);