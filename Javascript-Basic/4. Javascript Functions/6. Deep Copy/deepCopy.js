(function () {
    'use strict';

    var clone = function (obj) {
        return JSON.parse(JSON.stringify(obj))
    };

    var compareObject = function (obj, objCopy) {
        return 'obj == objCopy --> ' + (obj == objCopy);
    };

    var obj = { name: 'Ivan', age: 23},
        objDirectCopy = obj,
        objDeepCopy = clone(obj);

    console.log(compareObject(obj, objDirectCopy));
    console.log(compareObject(obj, objDeepCopy));
}());

