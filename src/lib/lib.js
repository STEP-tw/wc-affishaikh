const {
  ENCODING,
  NEWLINE,
  EMPTYSTRING,
  REGEX_FOR_WORDS
} = require('../constants.js')
const { format } = require('../io/formatter.js')

const getCount = function(delimeter, fileContents) {
  return fileContents.split(delimeter).length
}

const countLines = getCount.bind(null, NEWLINE)
const countCharacters = getCount.bind(null, EMPTYSTRING)
const countWords = getCount.bind(null, REGEX_FOR_WORDS)

const readFile = function(fileName, fs) {
  return fs.readFileSync(fileName, ENCODING)
}

const mapper = function(fs, options, fileName) {
  let fileContents = readFile(fileName, fs)
  let result = {}
  if (options.line) {
    result['lineCount'] = countLines(fileContents) - 1
  }
  if (options.word) {
    result['wordCount'] = countWords(fileContents.trim())
  }
  if (options.character) {
    result['characterCount'] = countCharacters(fileContents)
  }

  result['fileName'] = fileName
  return result
}

const count = function(prerequisites, fs) {
  let { options, fileNames } = prerequisites
  const mapFileNamesWithCount = mapper.bind(null, fs, options)
  let result = fileNames.map(mapFileNamesWithCount)
  return result
}

const reducer = function(counts1, counts2) {
  let result = {}
  let keys = Object.keys(counts1)
  for (key of keys) {
    if (key !== 'fileName') {
      result[key] = counts1[key] + counts2[key]
    }
  }
  return result
}

const calculateTotal = function(allCounts) {
  return allCounts.reduce(reducer)
}

const wc = function(prerequisites, fs) {
  let { options, fileNames } = prerequisites
  let result = count(prerequisites, fs)
  if (fileNames.length > 1) {
    let total = calculateTotal(result)
    total['fileName'] = 'total'
    result.push(total)
  }
  return format(result, options)
}

module.exports = { wc, count }
