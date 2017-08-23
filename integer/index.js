module.exports = toInteger;
var toNumber = require('@timelaps/hacks/to-number');
var safeInteger = require('@timelaps/is/valid-integer');
var toInteger = require('@timelaps/number/to-integer');
var isNan = require('@timelaps/is/nan');
var clamp = require('@timelaps/number/clamp');
var MAX_ARRAY_INDEX = require('@timelaps/constants/max-array-index');

function toInteger(number, notSafe) {
    var converted;
    return toInteger((converted = toNumber(number)) == number ? (notSafe ? clamp(number, 0, MAX_ARRAY_INDEX) : converted) : isNan(converted) ? 0 : converted);
}