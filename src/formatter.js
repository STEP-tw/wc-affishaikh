const { TAB } = require('./constants.js');

const formatCountAndFileName = function(requiredCount, fileName) {
  return TAB + requiredCount + TAB + fileName;
};

module.exports = { formatCountAndFileName };
