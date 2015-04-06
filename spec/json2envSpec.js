describe('json2env', function() {
  var json2env = require('../lib/json2env');

  var notJSON = __dirname + '/json2envSpec.js';
  var noInputFile = undefined;
  var badFilename = 'noSuchFile.json';

  it('should catch file errors', function() {
    expect(json2env(noInputFile)).toBe('No input file');
    expect(json2env(badFilename)).toBe('No such file: noSuchFile.json');
  });

  it('should fail on invalid JSON', function() {
    expect(json2env(notJSON)).toBe('Invalid JSON: ' + notJSON);
  });
});
