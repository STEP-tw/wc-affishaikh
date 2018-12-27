const {
  ENCODING,
  NEWLINE,
  EMPTYSTRING,
  REGEX_FOR_WORDS
} = require('../constants.js');
const { formatCountAndFileName } = require('../io/formatter.js');

const getCount = function(delimeter, fileContents) {
  return fileContents.split(delimeter).length;
};

const countLines = getCount.bind(null, NEWLINE);
const countCharacters = getCount.bind(null, EMPTYSTRING);
const countWords = getCount.bind(null, REGEX_FOR_WORDS);

const readFile = function(fileName, fs) {
  return fs.readFileSync(fileName, ENCODING);
};

const count = function(prerequisites, fs) {
  let { options, fileNames } = prerequisites;
  let fileContents = readFile(fileNames[0], fs);
  let result = { fileName: fileNames[0] };

  if (options.line) {
    result['lineCount'] = countLines(fileContents) - 1;
  }
  if (options.word) {
    result['wordCount'] = countWords(fileContents.trim());
  }
  if (options.character) {
    result['characterCount'] = countCharacters(fileContents);
  }
  return result;
};

const wc = function(prerequisites, fs) {
  let fileName = prerequisites[1];
  let result = count(prerequisites, fs);
  return formatCountAndFileName(result, fileName);
};

module.exports = { wc, count };
