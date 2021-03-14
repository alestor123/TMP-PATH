var {join} = require('path'),
uuidv = require('uuid/v4');
module.exports = dir => join(dir,`.tmp-${uuidv()}-${process.pid}`) 