var returns = require('@timelaps/returns/passed');
var isFunction = require('@timelaps/is/function');
module.exports = function (argument, context) {
    return isFunction(argument) ? (context ? argument.bind(context) : argument) : returns(argument);
};