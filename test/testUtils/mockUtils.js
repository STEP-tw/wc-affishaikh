const { ENCODING } = require('../../src/constants.js');

const createReader = function(expectedFiles) {
  return function(actualFileName, actualEncoding) {
    if (actualEncoding === ENCODING) {
      return expectedFiles[actualFileName];
    }
  };
};

module.exports = { createReader };
