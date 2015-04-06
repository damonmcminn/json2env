# json2env
CLI for outputting a JSON config file as a single line.
Intended for setting a single environment variable as a JSON string.

#### Installation
    npm install --global json2env

#### Example Usage
```
VARIABLE_NAME=$(json2env /path/to/config/file.json)
```
