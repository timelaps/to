var isNil = require('@timelaps/is/nil');
var baseToString = require('../base/string');
module.exports = function (value) {
    return isNil(value) ? '' : baseToString(value);
};