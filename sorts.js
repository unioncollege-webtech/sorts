var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];

// Your code goes here! Hooray!
function bubbleSort(array){
    var sort = array.slice(0, array.length);
    var done = false;
    while(!done)
    {
        done = true;
        for(var i = 0; i<sort.length-1; i++)
        {
            if(sort[i] >  sort[i+1])
            {
                var temp = sort[i];
                sort[i] = sort[i+1];
                sort[i+1] = temp;
                done = false;
            }
        }
    }
    return sort;
}


function quickSort(array){

    if(array.length === 0)
        return array;
        
    var sort = array.slice(0, array.length);
    var midpoint = Math.floor(sort.length/2);
    
    var left = [];
    var right = [];
    for(var i = 0; i < sort.length; i++){
        if(sort[i] < sort[midpoint])
            left.push(sort[i]);
        else if(sort[i] > sort[midpoint])
            right.push(sort[i]);
    }

    var end=[];

    end = end.concat(quickSort(left));
    end = end.concat(sort[midpoint]);
    end = end.concat(quickSort(right));

    return end;
}

console.log(bubbleSort(group1));
console.log(bubbleSort(group2));
console.log(bubbleSort(group3));

console.log(quickSort(group1));
console.log(quickSort(group2));
console.log(quickSort(group3));