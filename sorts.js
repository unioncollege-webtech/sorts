var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];

// Your code goes here! Hooray!

function bubbleSort(array) {
    var newArray = array.slice();
    var inOrder = false;
    while(inOrder == false) {
        inOrder = true;
        if (typeof newArray[0] === 'number') {
            for(var i = 0; i < newArray.length; i++) {    
                if (newArray[i] > newArray[i + 1]) {
                    var temp = newArray[i];
                    newArray[i] = newArray[i + 1];
                    newArray[i + 1] = temp;
                    inOrder = false;
                }
            }
        }
        else {
            for(var i = 0; i < newArray.length; i++) {
                if (newArray[i].localeCompare(newArray[i + 1]) > 0) {
                    var temp = newArray[i];
                    newArray[i] = newArray[i + 1];
                    newArray[i + 1] = temp;
                    inOrder = false;
                }
            }
        }
        
    }
    return newArray;
}

console.log(bubbleSort(group1));
console.log(bubbleSort(group2));
console.log(bubbleSort(group3));


function quickSort(array) {
    if (typeof array[0] == 'number') {
        var pivot,
            below = [], 
            above = [], 
            i, 
            l;
        if (array.length < 2) {
            return array;
        }
        pivot = array.pop();
        for (i = 0, l = array.length; i < l; i++) {
            if (array[i] < pivot) {
                below.push(array[i]);
            } else {
                above.push(array[i]);
            }
        }
        return [].concat(quickSort(below), pivot, quickSort(above));
    } 
    else {
        var pivot,
            below = [], 
            above = [], 
            i, 
            l;
        if (array.length < 2) {
            return array;
        }
        pivot = array.pop();
        for (i = 0, l = array.length; i < l; i++) {
            if (array[i].localeCompare(pivot) < 0) {
                below.push(array[i]);
            } else {
                above.push(array[i]);
            }
        }
        return [].concat(quickSort(below), pivot, quickSort(above));
    }
    
}


console.log(quickSort(group1));
console.log(quickSort(group2));
console.log(quickSort(group3));

//This is my difference between git branches!