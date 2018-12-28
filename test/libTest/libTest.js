const { count, wc } = require('../../src/lib/lib.js');
const { createReader } = require('../testUtils/mockUtils.js');
const assert = require('assert');

describe('count', function() {
  const fs = {};
  describe('default case three options', function() {
    it('should return all three counts and fileName for default case', function() {
      const files = { numbers: '1\n2\n3\n' };
      fs.readFileSync = createReader(files);
      const prerequisites = {
        options: { line: true, word: true, character: true },
        fileNames: ['numbers']
      };
      let expectedOutput = [
        {
          fileName: 'numbers',
          lineCount: 3,
          wordCount: 3,
          characterCount: 6
        }
      ];
      let actualOutput = count(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });

  describe('single option', function() {
    const fs = {};
    it('line', function() {
      const files = { numbers: '1\n2\n3\n' };
      fs.readFileSync = createReader(files);
      const prerequisites = {
        options: { line: true, word: false, character: false },
        fileNames: ['numbers']
      };
      let expectedOutput = [
        {
          fileName: 'numbers',
          lineCount: 3
        }
      ];
      let actualOutput = count(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });

    it('word', function() {
      const files = { numbers: '1\n2\n3\n' };
      fs.readFileSync = createReader(files);
      const prerequisites = {
        options: { line: false, word: true, character: false },
        fileNames: ['numbers']
      };
      let expectedOutput = [
        {
          fileName: 'numbers',
          wordCount: 3
        }
      ];
      let actualOutput = count(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });

    it('should return number of words when there are trailing lines', function() {
      const files = { numbers: '1\n2\n3\n' };
      fs.readFileSync = createReader(files);
      const prerequisites = {
        options: { line: false, word: true, character: false },
        fileNames: ['numbers']
      };
      let expectedOutput = [
        {
          fileName: 'numbers',
          wordCount: 3
        }
      ];
      let actualOutput = count(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });

    it('character', function() {
      const files = { numbers: '1\n2\n3\n' };
      fs.readFileSync = createReader(files);
      const prerequisites = {
        options: { line: false, word: false, character: true },
        fileNames: ['numbers']
      };
      let expectedOutput = [
        {
          fileName: 'numbers',
          characterCount: 6
        }
      ];
      let actualOutput = count(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });
  describe('count function', function() {
    describe('multiple files', function() {
      it('single option', function() {
        const files = {
          numbers: '1\n2\n3\n',
          names: 'naruto\nkakkashi\nsasuke\n'
        };
        fs.readFileSync = createReader(files);
        const prerequisites = {
          options: { line: true, word: false, character: false },
          fileNames: ['numbers', 'names']
        };
        let expectedOutput = [
          {
            fileName: 'numbers',
            lineCount: 3
          },
          {
            fileName: 'names',
            lineCount: 3
          }
        ];
        let actualOutput = count(prerequisites, fs);
        assert.deepEqual(actualOutput, expectedOutput);
      });

      it('two options', function() {
        const files = {
          numbers: '1\n2\n3\n',
          names: 'naruto\nkakkashi\nsasuke\n'
        };
        fs.readFileSync = createReader(files);
        const prerequisites = {
          options: { line: true, word: true, character: false },
          fileNames: ['numbers', 'names']
        };
        let expectedOutput = [
          {
            fileName: 'numbers',
            lineCount: 3,
            wordCount: 3
          },
          {
            fileName: 'names',
            lineCount: 3,
            wordCount: 3
          }
        ];
        let actualOutput = count(prerequisites, fs);
        assert.deepEqual(actualOutput, expectedOutput);
      });

      it('default case', function() {
        const files = {
          numbers: '1\n2\n3\n',
          names: 'naruto\nkakkashi\nsasuke\n'
        };
        fs.readFileSync = createReader(files);
        const prerequisites = {
          options: { line: true, word: true, character: true },
          fileNames: ['numbers', 'names']
        };
        let expectedOutput = [
          {
            fileName: 'numbers',
            lineCount: 3,
            wordCount: 3,
            characterCount: 6
          },
          {
            fileName: 'names',
            lineCount: 3,
            wordCount: 3,
            characterCount: 23
          }
        ];
        let actualOutput = count(prerequisites, fs);
        assert.deepEqual(actualOutput, expectedOutput);
      });
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
      const files = { numbers: '1\n2\n3\n' };
      fs.readFileSync = createReader(files);
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
      const files = { numbers: '1\n2\n3\n' };
      fs.readFileSync = createReader(files);
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
      const files = { numbers: '1\n2\n3\n' };
      fs.readFileSync = createReader(files);
      let expectedOutput = '   3   numbers';
      let actualOutput = wc(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });

  describe('Multiple files', function() {
    it('should return a string of count of one option and file name', function() {
      let prerequisites = {
        options: {
          line: true,
          word: false,
          character: false
        },
        fileNames: ['numbers', 'names']
      };
      const files = { numbers: '1\n2\n3\n', names: 'naruto\nkakkashi\nsasuke\n' };
      fs.readFileSync = createReader(files);
      let expectedOutput = '   3   numbers\n   3   names\n   6   total';
      let actualOutput = wc(prerequisites, fs);
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });
});
