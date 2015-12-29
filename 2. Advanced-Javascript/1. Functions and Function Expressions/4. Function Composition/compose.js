(function() {
    'use strict';

    var compose = function(f, g) {
        return function () {
            return f.call(this, g.apply(this, arguments));
        };
    };

    var add = function (x, y) {
        return x + y;
    };

    var addOne = function (x) {
        return x + 1;
    };

    var square = function (x) {
        return Math.pow(x, 2);
    };

    console.log(compose(addOne, square)(5));
    console.log(compose(addOne, add)(1, 5));
    console.log(compose(addOne, Math.cos)(-1));
    var compositeFunction = compose(Math.sqrt, Math.cos);
    console.log(compositeFunction(0.5));
    console.log(compositeFunction(1));
    console.log(compositeFunction(-1));
}());
