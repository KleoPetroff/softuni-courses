(function() {
    'use strict';

    var numbersOnly = function(array) {
        return array.filter(function(element) {
            return element % 1 === 0;
        });
    };

    var minNumber = function (array) {
        return Math.min.apply(null, array);
    };

    var maxNumber = function (array) {
        return Math.max.apply(null, array);
    };

    var mode = function(array) {
        return array.sort(function(a, b) {
            return array.filter(function(v) { return v === a }).length
                - array.filter(function(v) { return v === b }).length;
        }).pop();
    };

    var sorted = function (array) {
        return array.sort(function (a, b) {
            return b - a;
        });
    };

    var flat = numbersOnly(['Pesho', 2, 'Gosho', 12, 2, 'true', 9, undefined, 0, 'Penka', { bunniesCount: 10 }, [10, 20, 30, 40]]);

    console.log('Min Number: ', minNumber(flat));
    console.log('Max number: ', maxNumber(flat));
    console.log('Most frequent number', mode(flat));
    console.log(sorted(flat));
}());
