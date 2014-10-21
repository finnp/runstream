var through = require('through2')
module.exports = function() {
  return through(function(data, enc, cb) {
    cb(null, data.toString().toUpperCase())
  })
}