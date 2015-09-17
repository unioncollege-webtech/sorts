/* globals group1 group2 group3 */
var readFile = require('fs').readFile;
var assert = require('assert');
var exec = require('child_process').exec;

exec('node .', function(error, stdout, stderr) {
    if (error) {
        throw error;
    }
        readFile('./sorts.js', "utf-8", function(err, value) {
            if (err) throw err;

            eval(value);

            if(group1 != group1.sort()) 
            {
                assert(false, "group1 is not sorted!");
            }

            if(group2 != group2.sort()){
                assert(false, "group2 is not sorted!");
            }
            if(group3 != group3.sort()){
                assert(false, "group3 is not sorted!");
            }
            console.log("All tests pass!")
        });
});


