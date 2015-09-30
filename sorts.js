var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];

// Your code goes here! Hooray!

// Buble Sort Function
function bubbleSort(arrayToSort) {
    
    // Clone the array
    var sortedArray = arrayToSort.slice(0);
    
    // Process sorting for each element in the array - 1
    for (var i = sortedArray.length - 1; i > 0; i--) {
        
        // Loop through each array pair
        for (var j = 0; j < i; j++) {
            
            // Swap the pair, if the left side is greater than the right side
            if (sortedArray[j] > sortedArray[ j + 1 ]) {
                var temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
            
        }
        
    }
    
    return sortedArray;
}

// Quick Sort Function
function quickSort(arrayToSort) {
    
    var sortedArray = arrayToSort.slice(0);
    
    if (sortedArray.length == 0) {
        return [];
    }
    
    var left = [];
    var right = [];
    var pivot = sortedArray[0];
    
    for (var i = 1; i < sortedArray.length; i++) {
        
        var item = sortedArray[i];
        
        if (item < pivot) {
            
            left.push(item);
            
        } else {
            
            right.push(item);
            
        }
        
    }
    
    return quickSort(left).concat(pivot).concat( quickSort(right) );
}

console.log( bubbleSort(group1) );
console.log( bubbleSort(group2) );
console.log( bubbleSort(group3) );

console.log( quickSort(group1) );
console.log( quickSort(group2) );
console.log( quickSort(group3) );
