const { TAB } = require('../constants.js');

const createReducer = function(options) {
  let delimeter = '';
  return function(formattedFileCountDetails, fileCountDetails) {
    formattedFileCountDetails += delimeter;
    if (options.line) {
      formattedFileCountDetails += TAB + fileCountDetails['lineCount'];
    }
    if (options.word) {
      formattedFileCountDetails += TAB + fileCountDetails['wordCount'];
    }
    if (options.character) {
      formattedFileCountDetails += TAB + fileCountDetails['characterCount'];
    }
    formattedFileCountDetails += TAB + fileCountDetails['fileName'];
    delimeter = '\n';
    return formattedFileCountDetails;
  };
};

const format = function(allFilesCountDetails, options) {
  const reducer = createReducer(options);
  let formattedAllFilesCountDetails = allFilesCountDetails.reduce(reducer, '');
  return formattedAllFilesCountDetails;
};

module.exports = { format };
