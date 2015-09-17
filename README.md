Sorts Exercise
==============

[![Join the chat at https://gitter.im/unioncollege-webtech/sorts](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/unioncollege-webtech/sorts?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

In this exercise, you are given several sets of numbers and strings.

    group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8]
    group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
    group3 = ['sadly','roast','Loopy','burger','gavel','lure','postpone','frontal','Gavel','lavender'];

Description
-----------

### Bubble Sort
In `sorts.js`, [define a function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Defining_functions),
`bubbleSort()` that implements the [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)
sorting method. It should accept an array as its first (and only) argument, and
return a new sorted array. It should not directly modify the array that’s passed
in. Run the `bubbleSort` function on each provided group and log the sorted
arrays to the console.

[![Bubble sort visualization](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)](https://en.wikipedia.org/wiki/Bubble_sort#/media/File:Bubble-sort-example-300px.gif)

Above is a visualization of the bubble sort, courtesy of [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort). Starting from the beginning of the list, compare every adjacent pair, swap their position if they are not in the right order (the latter one is smaller than the former one). After each iteration, one less element (the last one) is needed to be compared until there are no more elements left to be compared.

###  Quicksort

Define another function, `quickSort()`, that implements the
[Quick Sort](https://en.wikipedia.org/wiki/Quicksort) sorting method. It also 
should accept an array as its input and return a sorted array. 

Below is a brief description of the [Quicksort algorithm from Wikipedia](https://en.wikipedia.org/wiki/Quicksort#Algorithm):

> Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.

> The steps are:

> 1. Pick an element, called a pivot, from the array.
> 2. Reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
> 3. Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.

Run the `quickSort` function on each group and log the results to the console.

Completing and submitting the assignment
----------------------------------------

- To begin, [**fork** this repository](https://guides.github.com/activities/forking/).
- [Create a new Cloud9 workspace](https://docs.c9.io/docs/setting-up-github-workspace) from your new repository.
  - Alternatively, you may [**clone**](http://gitref.org/creating/#clone) your new repository to your computer.
- Modify the files and [**commit**](http://gitref.org/basic/#commit) changes to complete your solution.
- Run `node test` to verify that all tests pass.
- [Push](http://gitref.org/remotes/#push)/sync the changes up to GitHub.
- [Create a pull request](https://help.github.com/articles/creating-a-pull-request) on the original repository to turn in the assignment.

You are also welcome commit, push, and create a pull request **before** you’ve 
completed your solution. You can ask questions or request feedback there in your
pull request. Just mention `@barberboy` in your comments to get my attention.


Go the Extra Mile!
------------------

Want to learn some more? Try these variations:

- Concatenate `group1` and `group2` and sort them. (Hint: Array methods are your friend)

- Modify your sort methods so they are case insensitive.

- Concatenate `group1`, `group2`, and `group3`, and sort them. Observe how the
  results differ. Was this what you expected? Consider why it sorts this way.

Use [`git branch`](https://www.atlassian.com/git/tutorials/using-branches/git-branch)
(and `git checkout`) to work on the extra challenges on separate branches.


References
----------

- [Array documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort)
- [Quick sort](https://en.wikipedia.org/wiki/Quicksort)
- [`string.toLowerCase()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [Equality operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_operators)
- [console.log](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
