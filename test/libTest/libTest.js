const { count, wc  } = require('../../src/lib/lib.js');
const { createReader } = require('../testUtils/mockUtils.js');
const assert = require('assert');

describe('count', function() {
  const fs = {};
  describe('default case three options', function() {
    it('should return all three counts and fileName for default case', function() {
      const fileName = 'numbers';
      const fileContents = '1\n2\n3\n';
      fs.readFileSync = createReader(fileName, fileContents);
      const prerequisites = {
        options: { line: true, word: true, character: true },
        fileNames: ['numbers']
      };
      let expectedOutput = {
        fileName: 'numbers',
        lineCount: 3,
        wordCount: 3,
        characterCount: 6
      };
      let actualOutput = count(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });

  describe('single option', function() {
    const fs = {};
    it('line', function() {
      const fileName = 'numbers';
      const fileContents = '1\n2\n3\n';
      fs.readFileSync = createReader(fileName, fileContents);
      const prerequisites = {
        options: { line: true, word: false, character: false },
        fileNames: ['numbers']
      };
      let expectedOutput = {
        fileName: 'numbers',
        lineCount: 3
      };
      let actualOutput = count(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });

    it('word', function() {
      const fileName = 'numbers';
      const fileContents = '1\n2\n3\n';
      fs.readFileSync = createReader(fileName, fileContents);
      const prerequisites = {
        options: { line: false, word: true, character: false },
        fileNames: ['numbers']
      };
      let expectedOutput = {
        fileName: 'numbers',
        wordCount: 3
      };
      let actualOutput = count(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });

    it('should return number of words when there are trailing lines', function() {
      const fileName = 'numbers';
      const fileContents = '\n\n\n1\n2\n3\n';
      fs.readFileSync = createReader(fileName, fileContents);
      const prerequisites = {
        options: { line: false, word: true, character: false },
        fileNames: ['numbers']
      };
      let expectedOutput = {
        fileName: 'numbers',
        wordCount: 3
      };
      let actualOutput = count(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });

    it('character', function() {
      const fileName = 'numbers';
      const fileContents = '1\n2\n3\n';
      fs.readFileSync = createReader(fileName, fileContents);
      const prerequisites = {
        options: { line: false, word: false, character: true },
        fileNames: ['numbers']
      };
      let expectedOutput = {
        fileName: 'numbers',
        characterCount: 6
      };
      let actualOutput = count(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });
});

describe('wc', function() {
  const fs = {};
  describe('default case', function() {
    it('should return a string of all options count and file name', function() {
      let prerequisites = {
        options: {
          line: true,
          word: true,
          character: true
        },
        fileNames: ['numbers']
      };
      const fileName = 'numbers';
      const fileContents = '1\n2\n3\n';
      fs.readFileSync = createReader(fileName, fileContents);
      let expectedOutput = '   3   3   6   numbers';
      let actualOutput = wc(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });

  describe('Two options', function() {
    it('should return a string of count of two options and file name', function() {
      let prerequisites = {
        options: {
          line: true,
          word: true,
          character: false
        },
        fileNames: ['numbers']
      };
      const fileName = 'numbers';
      const fileContents = '1\n2\n3\n';
      fs.readFileSync = createReader(fileName, fileContents);
      let expectedOutput = '   3   3   numbers';
      let actualOutput = wc(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });

  describe('Single options', function() {
    it('should return a string of count of one option and file name', function() {
      let prerequisites = {
        options: {
          line: true,
          word: false,
          character: false
        },
        fileNames: ['numbers']
      };
      const fileName = 'numbers';
      const fileContents = '1\n2\n3\n';
      fs.readFileSync = createReader(fileName, fileContents);
      let expectedOutput = '   3   numbers';
      let actualOutput = wc(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });
});
