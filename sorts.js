var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];

// Your code goes here! Hooray!

// bubbleSorting the first group: group1
function bubbleSort(group1)
{
    var moved;
    do {
        moved = false;
        for (var i=0; i < group1.length-1; i++) {
            if (group1[i] > group1[i+1]) {
                var temp = group1[i];
                group1[i] = group1[i+1];
                group1[i+1] = temp;
                moved = true;
            }
        }
    } while (moved);
}
 
bubbleSort(group1);
console.log(group1);


// bubbleSorting the second group: group2
function bubbleSort(group2)
{
    var moved;
    do {
        moved = false;
        for (var i=0; i < group2.length-1; i++) {
            if (group2[i] > group2[i+1]) {
                var temp = group2[i];
                group2[i] = group2[i+1];
                group2[i+1] = temp;
                moved = true;
            }
        }
    } while (moved);
}
 
bubbleSort(group2);
console.log(group2);

// bubbleSorting the third group: group3

function bubbleSort(group3)

{
    var moved;
    do {
        moved = false;
        for (var i=0; i < group3.length-1; i++) {
            if (group3[i] > group3[i+1]) {
                var temp = group3[i];
                group3[i] = group3[i+1];
                group3[i+1] = temp;
                moved = true;
            }
        }
    } while (moved);
}
 
bubbleSort(group3);
console.log(group3);

//Quicksorting group1
function quicksort(group1)
{
    if (group1.length == 0)
        return [];
 
    var left = new Array();
    var right = new Array();
    var pivot = group1[0];
 
    for (var i = 1; i < group1.length; i++) {
        if (group1[i] < pivot) {
           left.push(group1[i]);
        } else {
           right.push(group1[i]);
        }
    }
 
    return quicksort(left).concat(pivot, quicksort(right));
}
 
console.log(quicksort(group1));

//Quicksorting group2
function quicksort(group2)
{
    if (group2.length == 0)
        return [];
 
    var left = new Array();
    var right = new Array();
    var pivot = group2[0];
 
    for (var i = 1; i < group2.length; i++) {
        if (group2[i] < pivot) {
           left.push(group2[i]);
        } else {
           right.push(group2[i]);
        }
    }
 
    return quicksort(left).concat(pivot, quicksort(right));
}


 
console.log(quicksort(group2));

//Quicksorting group3
function quicksort(group3)
{
    if (group3.length == 0)
        return [];
 
    var left = new Array();
    var right = new Array();
    var pivot = group3[0];
 
    for (var i = 1; i < group3.length; i++) {
        if (group3[i] < pivot) {
           left.push(group3[i]);
        } else {
           right.push(group3[i]);
        }
    }
 
    return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort(group3));