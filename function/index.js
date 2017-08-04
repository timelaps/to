var returns = require('@timelaps/returns/passed');
var isFunction = require('@timelaps/is/function');
var bindTo = require('function/bind-to');
module.exports = function (argument, context) {
    return isFunction(argument) ? argument.bind(context) : returns(argument);
};