/**
 * Remove a range of elements from an array
 * @param  {Array} array Array to perform on
 * @param  {Number} from  First element to remove
 * @param  {Number} to    Last element to remove
 * @return {Array}       Returns the modified array
 */
var remove = function(array, from, to) {
    var rest = array.slice((to || from) + 1 || array.length);
    array.length = from < 0 ? array.length + from : from;
    return array.push.apply(array, rest);
};

module.exports = remove;