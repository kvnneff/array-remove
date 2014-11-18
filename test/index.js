var remove = require('../');
var fixture;
var assert;

assert = function assert (expr, err) {
    if (!expr) throw new Error(err || 'it\'s broken');
};

fixture = function fixture() {
    return [10, 11, 12, 13, 14];
};

describe('remove(array, from, to)', function () {
    it('allows positive indices to be used', function () {
        var array = fixture();
        var expected = [10, 13, 14];
        remove(array, 1, 2);
        for (var i = array.length; i--;) {
            assert(array[i] == expected[i]);
        }
    });

    it('allows negative indices to be used', function () {
        var array = fixture();
        var expected = [10, 11, 12];
        remove(array, -2, -1);
        for (var i = array.length; i--;) {
            assert(array[i] == expected[i]);
        }
    });

    it('allows a single item to be removed', function () {
        var array = fixture();
        var expected = [11, 12, 13, 14];
        remove(array, 0);
        for (var i = array.length; i--;) {
            assert(array[i] == expected[i]);
        }
    });
});