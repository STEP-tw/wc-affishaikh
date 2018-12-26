const {
  ENCODING,
  NEWLINE,
  EMPTYSTRING,
  REGEX_FOR_WORDS
} = require('./constants.js');

const getCount = function(delimeter, fileContents) {
  return fileContents.split(delimeter).length;
};

const countLines = getCount.bind(null, NEWLINE);
const countCharacters = getCount.bind(null, EMPTYSTRING);
const countWords = getCount.bind(null, REGEX_FOR_WORDS);

const readFile = function(fileName, fs) {
  return fs.readFileSync(fileName, ENCODING);
};

const wc = function(prerequisites, fs) {
  let [option, fileName] = prerequisites;
  let fileContents = readFile(fileName, fs);
  if (option === '-l') {
    return countLines(fileContents) - 1;
  }
  if (option === '-w') {
    return countWords(fileContents) - 1;
  }
  return countCharacters(fileContents);
};

module.exports = { wc };
