const { wc } = require('../src/lib.js');
const assert = require('assert');
const ENCODING = 'utf8';

const createReader = function(expectedFileName, fileContents) {
  return function(actualFileName, actualEncoding) {
    if (actualFileName === expectedFileName && actualEncoding === ENCODING) {
      return fileContents;
    }
  };
};

describe('wc', function() {
  describe('count lines', function() {
    const fs = {};
    it('should return number of lines', function() {
      const fileName = 'numbers';
      const fileContents = '1\n2\n3';
      fs.readFileSync = createReader(fileName, fileContents);
      let expectedOutput = 3;
      let actualOutput = wc(['-l', 'numbers'], fs);
      assert.equal(actualOutput, expectedOutput);
    });
  });

  describe('count characters', function() {
    const fs = {};
    it('should return number of characters', function() {
      const fileName = 'numbers';
      const fileContents = '1\n2\n3';
      fs.readFileSync = createReader(fileName, fileContents);
      let expectedOutput = 5;
      let actualOutput = wc(['-c', 'numbers'], fs);
      assert.equal(actualOutput, expectedOutput);
    });
  });
});
