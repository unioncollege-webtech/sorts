var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];

// Your code goes here! Hooray!
function bubbleSort(array) {
    var arraySort = array.slice(0, array.length); 
    var completed = 0;
    while(!completed) {
        completed = 1;
        for (var i = 0; i < arraySort.length - 1; i++) {
            if (arraySort[i] > arraySort[i + 1]) {
                var holder = arraySort[i];
                arraySort[i] = arraySort[i + 1];
                arraySort[i + 1] = holder;
                
                completed = 0;

            }
        }
    }
    return arraySort;


}

console.log(group1);



console.log(bubbleSort(group1));
console.log(bubbleSort(group2));
console.log(bubbleSort(group3));

function quickSort(array) {
        if (array.length == 0)
        return array;
        
    var arrayQuickSort = array.slice(0, array.length); 
        
    var left = new Array();
    var right = new Array();
  
    
    for (var i = 1; i <array.length; i++) {
        if (array[i] < arrayQuickSort) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
        
    }
    return  quickSort(left).concat(arrayQuickSort, quickSort(right));
}

console.log(quickSort(group1));
console.log(quickSort(group2));
console.log(quickSort(group3));