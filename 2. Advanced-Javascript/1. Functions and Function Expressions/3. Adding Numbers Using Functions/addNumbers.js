(function() {
    'use strict';

    var add = function (num) {
        var closureAddition = function (localNumber) {
            return add(num + localNumber);
        };

        closureAddition.valueOf = closureAddition.toString = function () {
            return num;
        };

        return closureAddition;
    };

    console.log(+add(3)(2)(1));
}());
