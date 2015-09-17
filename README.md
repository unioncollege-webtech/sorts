Sorts Exercise
==============

[![Join the chat at https://gitter.im/unioncollege-webtech/sorts](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/unioncollege-webtech/sorts?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

In this exercise, you are given several sets of numbers and strings.

    group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8]
    group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
    group3 = ['sadly','roast','Loopy','burger','gavel','lure','postpone','frontal','Gavel','lavender'];

Description
-----------
In `sorts.js`, [define a function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Defining_functions),
`bubbleSort()` that implements the [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)
sorting method. Define another function, `quickSort()`, that implements the
[Quick Sort](https://en.wikipedia.org/wiki/Quicksort) sorting method. Each
function should accept an array as its input and return a sorted array. Run each
function on each provided group and log the results to the console.

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
