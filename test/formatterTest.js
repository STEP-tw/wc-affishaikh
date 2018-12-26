const { formatCountAndFileName } = require('../src/formatter.js');
const assert = require('assert');

describe('formatCountAndFileName', function(){
    it('should format when given only one count and file name', function(){
        let expectedOutput = '   10   numbers.txt';
        let actualOutput = formatCountAndFileName(10, 'numbers.txt');
        assert.deepEqual(actualOutput, expectedOutput);
    });
});