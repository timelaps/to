var isString = require('@timelaps/is/string');
var isArray = require('@timelaps/is/array');
var exp = /\]\.|\.\[|\.|\]|\[|\]/igm;
toPath.parse = parse;
module.exports = toPath;

function toPath(string) {
    return isArray(string) ? string : (isString(string) ? parse(string) : []);
}

function parse(string_) {
    var string = string_.trim();
    var last = string.length && string[string.length - 1];
    var split = string.split(exp);
    return last === ']' ? split.slice(0, split.length - 1) : split;
}