/* global bubbleSort, quickSort */
var readFile = require('fs').readFile;
var assert = require('assert');
var exec = require('child_process').exec;
var join = require('path').join;

readFile(join(__dirname, '../sorts.js'), 'UTF-8', function(err, expected) {
    if (err) {
        throw err;
    }

    eval(expected);

    var unsorted = [3, 4, 1];

    // bubbleSort()
    assert.equal(typeof bubbleSort, 'function', '`bubbleSort` is expected to be a function and was ' + typeof bubbleSort + '.');
    assert.deepEqual(bubbleSort(unsorted), [1, 3, 4], 'bubbleSort() should return a sorted array.');
    assert.deepEqual([3, 4, 1], unsorted, 'bubbleSort() should not modify the original array.');
    console.log('bubbleSort() is working correctly!');

    // quickSort()
    assert.equal(typeof quickSort, 'function', '`quickSort` is expected to be a function and was ' + typeof quickSort + '.');
    assert.deepEqual(quickSort(unsorted), [1, 3, 4], 'quickSort() should return a sorted array.');
    assert.deepEqual([3, 4, 1], unsorted, 'quickSort() should not modify the original array.');
    console.log('quickSort() is working correctly!');

    // Test the expected output.
    exec('node .', function(err, stdout, stderr) {
        if (err) {
            throw err;
        }
        readFile(join(__dirname, 'expected.txt'), 'UTF-8', function(err, expected) {
            if (err) {
                throw err;
            }
            assert.equal(stdout, expected, 'sorts.js should run each bubbleSort() and quickSort() for each provided group and log the results to the console.');
            console.log('All tests pass!');
        });
    });
});