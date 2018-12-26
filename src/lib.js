const ENCODING = 'utf8';
const NEWLINE = '\n';
const EMPTYSTRING = '';

const getCount = function(delimeter, fileContents) {
  return fileContents.split(delimeter).length;
};

const countLines = getCount.bind(null, NEWLINE);
const countCharacters = getCount.bind(null, EMPTYSTRING);

const readFile = function(fileName, fs) {
  return fs.readFileSync(fileName, ENCODING);
};

const wc = function(prerequisites, fs) {
  let [option, fileName] = prerequisites;
  let fileContents = readFile(fileName, fs);
  if (option === '-l') {
      return countLines(fileContents);
  }
  return countCharacters(fileContents);
};

module.exports = { wc };
