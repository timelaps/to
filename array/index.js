var isArray = require('@timelaps/is/array');
var isArrayLike = require('@timelaps/is/array-like');
var isString = require('@timelaps/is/string');
var fromArrayLike = toArray.fromArrayLike = require('./from/array-like');
var COMMA = ',';
module.exports = toArray;

function toArray(object, delimiter) {
    return isArrayLike(object) ? (isArray(object) ? object : fromArrayLike(object)) : (isString(object) ? object.split(isString(delimiter) ? delimiter : COMMA) : [object]);
}