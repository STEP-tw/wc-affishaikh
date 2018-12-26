const ENCODING = 'utf8';
const NEWLINE = '\n';

const wc = function(prerequisites, fs) {
    let [option, fileName] = prerequisites;
    let fileContents = fs.readFileSync(fileName, ENCODING);
    return fileContents.split(NEWLINE).length;
}

module.exports = { wc };