const { count } = require('../src/lib.js');
const { createReader } = require('./mockUtils.js');
const assert = require('assert');

describe('count', function() {
  describe('count lines', function() {
    const fs = {};
    it('should return number of lines', function() {
      const fileName = 'numbers';
      const fileContents = '1\n2\n3\n';
      fs.readFileSync = createReader(fileName, fileContents);
      let expectedOutput = 3;
      let actualOutput = count(['-l', 'numbers'], fs);
      assert.equal(actualOutput, expectedOutput);
    });
  });

  describe('count characters', function() {
    const fs = {};
    it('should return number of characters', function() {
      const fileName = 'numbers';
      const fileContents = '1\n2\n3\n';
      fs.readFileSync = createReader(fileName, fileContents);
      let expectedOutput = 6;
      let actualOutput = count(['-c', 'numbers'], fs);
      assert.equal(actualOutput, expectedOutput);
    });
  });

  describe('count words', function() {
    const fs = {};
    it('should return number of words', function() {
      const fileName = 'numbers';
      const fileContents = '1\n2\n3\n';
      fs.readFileSync = createReader(fileName, fileContents);
      let expectedOutput = 3;
      let actualOutput = count(['-w', 'numbers'], fs);
      assert.equal(actualOutput, expectedOutput);
    });

    it('should return number of words when there are trailing lines', function() {
      const fileName = 'numbers';
      const fileContents = '\n\n\n1\n2\n3\n';
      fs.readFileSync = createReader(fileName, fileContents);
      let expectedOutput = 3;
      let actualOutput = count(['-w', 'numbers'], fs);
      assert.equal(actualOutput, expectedOutput);
    });
  });
});
