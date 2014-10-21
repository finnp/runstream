var through = require('through2')
module.exports = function() {
  // pipe number to it
  return through.obj(function(data, enc, cb) {
    cb(null, data + 10)
  })
}