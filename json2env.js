#! /usr/bin/env node

var fs = require('fs');
var output;
var message;

try {
  output = fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .filter(function(str) {
      return str.length > 0;
    })
    .map(function(str) {
      return str.trim();
    })
    .join('')
} catch (e) {
  var noFile = (e.name === 'TypeError');
  output = noFile ? 'No input file' : ('No such file: ' + e.path)
}

process.stdout.write(output);
process.exit();
