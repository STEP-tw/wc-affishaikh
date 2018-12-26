const insertState = function(options, fileNames) {
  return { options, fileNames };
};

const parseInput = function(args) {
  let prerequisites = {};
  if (!args[0].startsWith('-')) {
    prerequisites = insertState(
      { line: true, word: true, character: true },
      args.slice(0)
    );
  }

  if (args[0] === '-l') {
    prerequisites = insertState(
        { line: true, word: false, character: false },
        args.slice(1)
      );
  }
  if (args[0] === '-w') {
    prerequisites = insertState(
        { line: false, word: true, character: false },
        args.slice(1)
      );
  }
  if (args[0] === '-c') {
    prerequisites = insertState(
        { line: false, word: false, character: true },
        args.slice(1)
      );
  }
  return prerequisites;
};

module.exports = { parseInput };
