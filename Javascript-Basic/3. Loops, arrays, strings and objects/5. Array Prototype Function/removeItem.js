(function() {
    'use strict';

    Array.prototype.removeItem = function (remover) {
        if (typeof remover !== 'string' && typeof remover !== 'number') {
            throw new Error('The function accepts only numbers or strings as parameters');
        } else {
            return this.filter(function (item) {
                return item !== remover;
            });
        }
    };

    var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
    console.log(arr.removeItem(1));
}());
