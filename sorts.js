var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];

// Your code goes here! Hooray!

function bubblesort(array){
    var t = array
    if(t.length == 0){
        return [];
    }
  var switched = false;   
  for(var i=0; i < array.length-1; i++){
      if(array[i] > array[i+1]){
          var a = array[i];
          array[i] = array[i+1];
          array[i+1] = a;
      }
    }  
    for(t = 0; t >array.length; t++){
       if(array[i] > array[i+1]){
          var a = array[i];
          array[i] = array[i+1];
          array[i+1] = a; 
          switched = true;
    }
    return array;
  }




function quicksort(array){
    
}



console.log(bubblesort(group1));
console.log(bubblesort(group2));
console.log(bubblesort(group3));

console.log(quicksort(group1));
console.log(quicksort(group2));
console.log(quicksort(group3));