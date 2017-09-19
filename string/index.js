module.exports = toString;
var isArray = require('@timelaps/is/array');
var isNil = require('@timelaps/is/nil');
var baseToString = require('../base/string');

function toString(value, delimiter) {
    if (isNil(value)) {
        return '';
    } else if (isArray(value)) {
        return value.join(delimiter || ',');
    } else {
        return baseToString(value);
    }
}