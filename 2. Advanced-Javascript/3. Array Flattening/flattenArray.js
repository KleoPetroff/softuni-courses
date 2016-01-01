(function() {
    'use strict';
    Array.prototype.flatten = function () {
        var ret = [],
            i;

        for (i = 0; i < this.length; i++) {
            if (Array.isArray(this[i])) {
                ret = ret.concat(this[i].flatten());
            } else {
                ret.push(this[i]);
            }
        }

        return ret;
    };

    var array = [0, ['string', 'values'], 5.5, [[1, 2, true], [3, 4, false]], 10];
    console.log(array.flatten());
}());
