var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];

// Your code goes here! Hooray!
function bubbleSort(arr){
    var newsort = arr.slice(0, arr.length);
    var swapped = true;
    while(swapped)
    {
        swapped = false;
        for(var i = 0; i < newsort.length-1; i++)
        {
            if(newsort[i] >  newsort[i+1])
            {
                var s = newsort[i];
                newsort[i] = newsort[i+1];
                newsort[i+1] = s;
                swapped = true;
            }
        }
    }
    return newsort;
}

console.log(bubbleSort(group1));
console.log(bubbleSort(group2));
console.log(bubbleSort(group3));

function quickSort(arr) {
    var sort = arr.slice(0);
    if (sort.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = sort[0];
    for (var i = 1; i < sort.length; i++) {
        if (sort[i] > pivot) {
            right.push(sort[i]);
        }
        else {
            left.push(sort[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(group1));
console.log(quickSort(group2));
console.log(quickSort(group3));