describe('json2env', function() {
  var json2env = require('../lib/json2env');

  var notJSON = __dirname + '/json2envSpec.js';
  var noInputFile = undefined;
  var badFilename = 'noSuchFile.json';
  var goodJSON = __dirname + '/mock/good.json';

  it('should catch file errors', function() {
    expect(json2env(noInputFile)).toBe('No input file');
    expect(json2env(badFilename)).toBe('No such file: noSuchFile.json');
  });

  it('should fail on invalid JSON', function() {
    expect(json2env(notJSON)).toBe('Invalid JSON: ' + notJSON);
  });

  it('should stringify a .json file', function() {
    expect(json2env(goodJSON)).toBe('{"good":"json"}');
  });
});
