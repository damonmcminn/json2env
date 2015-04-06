var fs = require('fs');
var filename = process.argv[2];
var output;
var message;

module.exports = function(filename) {
  /** 
   * @param {string} filename - relative path to file
   * @returns {string} Single-line JSON | error message
   */

  var output;

  try {
    output = fs.readFileSync(filename)
      .toString()
      .split('\n')
      .filter(function(str) {
        return str.length > 0;
      })
      .map(function(str) {
        return str.trim();
      })
      .join('');
    // test if input is valid JSON
    JSON.parse(output); 
  } catch (e) {
    var errors = {
      "TypeError": 'No input file',
      "SyntaxError": 'Invalid JSON: ' + filename,
      "Error": 'No such file: ' + filename
    };
    output = errors[e.name];
  }
  return output;
}

