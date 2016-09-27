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
        /**var temp = arrOut[ii];
        arrOut[ii] = arrOut[ii-1];
        arrOut[ii-1] = temp;**/
      }
    }
  }
  return arrOut;
}

//console.log(bubbleSort(group1));
//console.log(bubbleSort(group2));
//console.log(bubbleSort(group3));


//TODO: fix this broken thing...
function quickSort(arrIn) {
  if (arrIn.length <= 25) {
    console.log('Arrin: ' + arrIn.length);
    var pivotIndex = Math.floor(arrIn.length/2);
    var pivot = arrIn[pivotIndex];
    for (var ii = 0; ii < arrIn.length; ii++) {
      //console.log(arrIn.length + ' :Len | ii: ' + ii + ' / iiVal: ' + arrIn[ii]);
      //console.log('p: ' + pivot);
      //console.log('pi: ' + pivotIndex);
      if (arrIn[ii] <= pivot) {
        arrIn.unshift(arrIn[ii]);
        arrIn.splice(ii, 1);
        //console.log('l: '+ arrIn);
      }
      else {
        arrIn.push(arrIn[ii]);
        arrIn.splice(ii, 1);
        //console.log('r: ' + arrIn);
      }
      //console.log('----------------------------------');
    }
    console.log('loop');
    console.log(arrIn);
    return quickSort(arrIn.splice(0, pivotIndex)).push(quickSort(arrIn.splice(pivotIndex)));
  }
}

/**
function quickSort(arrIn) {
  if (arrIn.length <= 1) {
    return;
  }
  var pivot = arrIn[Math.floor(arrIn.length/2)];
  var left = [];
  var right = [];
  for (var ii = 0; ii < arrIn.length; ii++) {
    if (arrIn[ii] <= pivot) {
      left.push(arrIn[ii]);
      console.log('l:'+left);
    }
    else {
      right.push(arrIn[ii]);
      console.log('r'+right);
    }
  }
  console.log('newloop');
  return quickSort(left).push(quickSort(right));
}
**/
console.log(quickSort(group1));
//console.log(quickSort(group2));
//console.log(quickSort(group3));
