var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];

// Your code goes here! Hooray!

function bubbleSort(array) {
    var sortedArray = array.slice();
    for (var j = 0; j < sortedArray.length - 1; j++) {
        for (var i = 0; i < sortedArray.length - j; i++) {
            if (sortedArray[i + 1] < sortedArray[i]) {
                var temp = sortedArray[i + 1];
                sortedArray[i + 1] = sortedArray[i];
                sortedArray[i] = temp;
            }
        }
    }
    return sortedArray;
}
console.log(bubbleSort(group1));
console.log(bubbleSort(group2));
console.log(bubbleSort(group3));


function quickSort(array) {
    var sortedArray = array.slice();
    recursiveQuickSort(sortedArray, 0, array.length - 1);
    return sortedArray;
    
    function recursiveQuickSort(array, low, high) {
        if (low < high) {
            var pivot = Math.floor((high + low) / 2);
            var highestSorted = low;
            for (var i = low; i <= high; i++) {
                if (array[i] < array[pivot]) {
                    if (highestSorted == pivot) {
                        pivot = i;
                    }
                    var temp = array[highestSorted];
                    array[highestSorted] = array[i];
                    array[i] = temp;
                    highestSorted++;
                }
            }
            var temp2 = array[pivot];
            array[pivot] = array[highestSorted];
            array[highestSorted] = temp2;
            pivot = highestSorted;
            
            recursiveQuickSort(array, low, pivot - 1);
            recursiveQuickSort(array, pivot + 1, high);
        }
    }
}

console.log(quickSort(group1));
console.log(quickSort(group2));
console.log(quickSort(group3));