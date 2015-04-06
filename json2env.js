#! /usr/bin/env node

const fs = require('fs');
const variable = process.argv[3];
const file = fs.readFileSync(process.argv[2])
  .toString()
  .split('\n')
  .filter(function(str) {
    return str.length > 0;
  })
  .map(function(str) {
    return str.trim();
  })
  .join('')
process.stdout.write(file);
process.exit();
