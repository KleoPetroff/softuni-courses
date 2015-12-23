(function() {
    'use strict';

    var checkType = function (obj) {
        var type = Function.prototype.toString.call(obj.constructor);

        return type.match(/function (.*)\(/)[1];
    };

    var extractObjects = function (array) {
        var filteredArray = [],
            i;
        for (i = 0; i < array.length; i++) {
            if (checkType(array[i]) === 'Object') {
                filteredArray.push(array[i]);
            }
        }

        return filteredArray;
    };

    console.log(extractObjects(['Pesho', 4, 4.21, { name: 'Valyo', age: 16 }, { type: 'fish', model: 'zlatna ribka' }, [1, 2, 3], 'Gosho', { name: 'Penka', height: 1.65 }]));
}());
