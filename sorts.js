var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];

// Your code goes here! Hooray!
function bubbleSort(array) {
    var tempArray = array.slice(0);
    var switched = true;
    while(switched){
        switched = false;
        for (var i = 0; i < tempArray.length; i++) {
            if(tempArray[i] > tempArray[i + 1]){
                var temp = tempArray[i];
                tempArray[i] = tempArray[i+1];
                tempArray[i+1] = temp;
                switched = true;
            }
        }
    }
    return tempArray;
}

function quickSort(array) {
    var pivot = array[0];
    var right = [];
    var left = [];
    while(true) {
        left =[] -1;
        while ([] > pivot) {
            right = [] + 1
        }
    
        while (array < pivot) {
            if ([] < left) {
                
            }
        }
    }
    
}




console.log(bubbleSort(group1))
console.log(group1);
//console.log(bubbleSort(group2));
//console.log(bubbleSort(group3));
