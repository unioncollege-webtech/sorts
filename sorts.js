var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];

function swap(arr, index, index2) {
  var temp = arr[index];
  arr[index] = arr[index2];
  arr[index2] = temp;
}

// Your code goes here! Hooray!
function bubbleSort(arrIn) {
  var arrOut = arrIn.slice(0);
  for (var i = 0; i < arrOut.length; i++) {
    for (var ii = 1; ii < (arrOut.length - i); ii++) {
      //if current is smaller than previous
      if (arrOut[ii] < arrOut[ii-1]) {
        swap(arrOut, ii, ii-1);
      }
    }
  }
  return arrOut;
}

console.log(bubbleSort(group1));
console.log(bubbleSort(group2));
console.log(bubbleSort(group3));

function doMoreQuickSort(arr, bot, top) {
  if (bot < top) {
    var pivot = Math.floor((top + bot) / 2);
    var highest = bot;
    for (var i = bot; i <= top; i++) {
      if (arr[i] < arr[pivot]) {
        if (highest == pivot) {
          pivot = i;
        }
        var temp = arr[highest];
        arr[highest] = arr[i];
        arr[i] = temp;
        highest++;
      }
    }
    var temp2 = arr[pivot];
    arr[pivot] = arr[highest];
    arr[highest] = temp2;
    pivot = highest;

    doMoreQuickSort(arr, bot, pivot - 1);
    doMoreQuickSort(arr, pivot + 1, top);
  }
}

function quickSort(arrIn) {
  var sorted = arrIn.slice();
  doMoreQuickSort(sorted, 0, arrIn.length - 1);
  return sorted;
}

console.log(quickSort(group1));
console.log(quickSort(group2));
console.log(quickSort(group3));
