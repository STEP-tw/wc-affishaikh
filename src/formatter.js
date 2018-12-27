const { TAB } = require('./constants.js');

const formatCountAndFileName = function(result) {
  let formattedResult = '';
  let keys = Object.keys(result);
  if(keys.includes('lineCount')) {
    formattedResult = TAB + result['lineCount'];
  }
  if(keys.includes('wordCount')) {
    formattedResult += TAB + result['wordCount'];
  }
  if(keys.includes('characterCount')) {
    formattedResult += TAB + result['characterCount'];
  }
  formattedResult += TAB + result['fileName'];
  return formattedResult;
};

module.exports = { formatCountAndFileName };
