var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];

function bubbleSort(origArray) {
    // Copy the original array
    var array = origArray.slice()
    var len = array.length;

    // Repeat for the entire array
    for (var j = 0; j < len; j++) {

        // For each slot in the array, 
        for (var i = 0; i < len; i++) {
            var el = array[i],
                next = array[i + 1]

            // Compare the element to its next sibling,
            if (el > next) {
                // And shift the larger element to the right
                array[i] = next
                array[i + 1] = el
            }
        }
    }
    return array
}

function quickSort(origArray) {
    // Copy the original array
    var array = origArray.slice()

    // Single element (or empty) arrays are already sorted (base case)
    if (array.length < 2) return array

    // Use the last element as the pivot
    var pivot = array.pop()

    // Left and right sub-arrays
    var left = [],
        right = [],
        center = [pivot]

    // Compare each array element and place in appropriate segment
    for (var i = 0, len = array.length; i < len; i++) {
        var el = array[i]

        if (el < pivot) {
            left.push(el)
        }
        else if (el === pivot) {
            center.push(el)
        }
        else /* (el > pivot ) */ {
            right.push(el)
        }
    }

    // Sort left and right sub-arrays, concatenate, and return
    var sorted = quickSort(left).concat(center).concat(quickSort(right))
    return sorted
}


// Log sorted values to the console.
console.log(bubbleSort(group1))
console.log(bubbleSort(group2))
console.log(bubbleSort(group3))

console.log(quickSort(group1))
console.log(quickSort(group2))
console.log(quickSort(group3))
