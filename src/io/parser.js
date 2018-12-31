const insertState = function(fileNames, options) {
  return { options, fileNames };
};

const indexFinder = function(arg) {
  return !arg.startsWith('-');
};

const findIndexOfFirstFile = function(args) {
  return args.findIndex(indexFinder);
};

const reducer = function(options, unparsedOption) {
  if (unparsedOption.includes('l')) {
    options['line'] = true;
  }
  if (unparsedOption.includes('w')) {
    options['word'] = true;
  }
  if (unparsedOption.includes('c')) {
    options['character'] = true;
  }
  return options;
};

const isDefaultCase = indexOfFirstFile => indexOfFirstFile === 0;

const parseInput = function(args) {
  const indexOfFirstFile = findIndexOfFirstFile(args);
  const fileNames = args.slice(indexOfFirstFile);
  const insertOptions = insertState.bind(null, fileNames);

  if (isDefaultCase(indexOfFirstFile)) {
    return insertOptions({ line: true, word: true, character: true });
  }

  const unparsedOptions = args.slice(0, indexOfFirstFile);
  let options = unparsedOptions.reduce(reducer, {
    line: false,
    word: false,
    character: false
  });
  return insertOptions(options);
};

module.exports = { parseInput };
