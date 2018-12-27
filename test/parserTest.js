const { parseInput } = require('../src/parser.js');
const assert = require('assert');

describe('parseInput', function() {
  it('should return all options set and filename for default case', function() {
    let expectedOutput = {
      options: { line: true, character: true, word: true },
      fileNames: ['numbers.txt']
    };
    let actualOutput = parseInput(['numbers.txt']);
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return object with given option set and filename', function() {
    let expectedOutput = {
      options: { line: true, character: false, word: false },
      fileNames: ['numbers.txt']
    };
    let actualOutput = parseInput(['-l', 'numbers.txt']);
    assert.deepEqual(actualOutput, expectedOutput);
  });
});