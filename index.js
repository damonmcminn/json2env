#! /usr/bin/env node

var json2env = require('./lib/json2env');
var filename = process.argv[2];

var output = json2env(filename);

process.stdout.write(output);
process.exit();
