const { wc } = require('./src/lib/lib.js');
const { parseInput } = require('./src/io/parser.js');
const fs = require('fs');

const main = function() {
  const preqrequisites = parseInput(process.argv.slice(2));
  console.log(wc(preqrequisites, fs));
};

main();
