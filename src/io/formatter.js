const { TAB } = require('../constants.js');

const format = function(fileCountDetails, options) {
  let formattedFileCountDetails = '';
  if (options.line) {
    formattedFileCountDetails = TAB + fileCountDetails['lineCount'];
  }
  if (options.word) {
    formattedFileCountDetails += TAB + fileCountDetails['wordCount'];
  }
  if (options.character) {
    formattedFileCountDetails += TAB + fileCountDetails['characterCount'];
  }
  formattedFileCountDetails += TAB + fileCountDetails['fileName'];
  return formattedFileCountDetails;
};

module.exports = { format };
