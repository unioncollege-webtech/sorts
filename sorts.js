//var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
//var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
//var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];


var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];


function bubbleSort(array)
{
    var group = array.slice(0);
    var moved;
    do {
        moved = false;
        for (var i=0; i < group.length-1; i++) {
            if (group[i] > group[i+1]) {
                var temp = group[i];
                group[i] = group[i+1];
                group[i+1] = temp;
                moved = true;
            }
        }
    } while (moved);
    return group;
}
 
console.log(bubbleSort(group1));
console.log(bubbleSort(group2));
console.log(bubbleSort(group3));


function quicksort(array)
{
    var group = array.slice(0);
    if (group.length == 0)
        return [];
 
    var left = new Array();
    var right = new Array();
    var pivot = group[0];
 
    for (var i = 1; i < group.length; i++) {
        if (group[i] < pivot) {
           left.push(group[i]);
        } else {
           right.push(group[i]);
        }
    }
 
    return quicksort(left).concat(pivot, quicksort(right));
}
 
console.log(quicksort(group1));
console.log(quicksort(group2));
console.log(quicksort(group3));