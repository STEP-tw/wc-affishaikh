const { format } = require('../../src/io/formatter.js');
const assert = require('assert');

describe('format', function() {
  it('should format when given only one count and file name', function() {
    let expectedOutput = '   10   numbers.txt';
    let allFilesCountsDetails = [
      {
        lineCount: 10,
        fileName: 'numbers.txt'
      }
    ];
    let options = {
      line: true,
      word: false,
      character: false
    };
    let actualOutput = format(allFilesCountsDetails, options);
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should format when given two counts and file name', function() {
    let expectedOutput = '   10   20   numbers.txt';
    let allFilesCountsDetails = [
      {
        wordCount: 10,
        characterCount: 20,
        fileName: 'numbers.txt'
      }
    ];
    let options = { line: false, word: true, character: true };
    let actualOutput = format(allFilesCountsDetails, options);
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should format for default case', function() {
    let expectedOutput = '   10   20   30   numbers.txt';
    let allFilesCountsDetails = [
      {
        lineCount: 10,
        wordCount: 20,
        characterCount: 30,
        fileName: 'numbers.txt'
      }
    ];
    let options = { line: true, word: true, character: true };
    let actualOutput = format(allFilesCountsDetails, options);
    assert.deepEqual(actualOutput, expectedOutput);
  });
});


