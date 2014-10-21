#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))
var path = require('path')
var ndjson = require('ndjson')
var pump = require('pumpify')

var file = argv._[0]
if(file.slice(-3) !== '.js') file += '.js'
  
try {
  var module = require(path.resolve(process.cwd(), file))
} catch(e){
  console.error('Module', file, 'not found.')
  process.exit(1)
}

var stream = (argv.json || argv.ndjson || argv.j)
  ? pump(ndjson.parse(), module(), ndjson.stringify())
  : module()

process.stdin
  .pipe(stream)
  .pipe(process.stdout)
