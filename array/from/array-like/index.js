module.exports = function arrayLikeToArray(arrayLike) {
    return arrayLike.length === 1 ? [arrayLike[0]] : Array.apply(null, arrayLike);
};