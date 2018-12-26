const { ENCODING } = require('../src/constants.js');

const createReader = function(expectedFileName, fileContents) {
  return function(actualFileName, actualEncoding) {
    if (actualFileName === expectedFileName && actualEncoding === ENCODING) {
      return fileContents;
    }
  };
};

module.exports = { createReader };
