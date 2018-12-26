const { wc } = require('./src/lib.js');
const fs = require('fs');

const main = function() {
  const preqrequisites = process.argv.slice(2);
  console.log(wc(preqrequisites, fs));
}

main();