const { formatCountAndFileName } = require('../src/formatter.js');
const assert = require('assert');

describe('formatCountAndFileName', function() {
  it('should format when given only one count and file name', function() {
    let expectedOutput = '   10   numbers.txt';
    let actualOutput = formatCountAndFileName({
      lineCount: 10,
      fileName: 'numbers.txt'
    });
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should format when given two counts and file name', function() {
    let expectedOutput = '   10   20   numbers.txt';
    let actualOutput = formatCountAndFileName({
      wordCount: 10,
      characterCount: 20,
      fileName: 'numbers.txt'
    });
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should format for default case', function() {
    let expectedOutput = '   10   20   30   numbers.txt';
    let actualOutput = formatCountAndFileName({
      lineCount: 10,
      wordCount: 20,
      characterCount: 30,
      fileName: 'numbers.txt'
    });
    assert.deepEqual(actualOutput, expectedOutput);
  });
});
