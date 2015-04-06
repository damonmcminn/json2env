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
    var json = JSON.parse(fs.readFileSync(filename).toString());
    output = JSON.stringify(json);
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

