(function () {
    'use strict';

    var printArgsInfo = (function() {

        var flatten = function (array) {
            var ret = [],
                i;

            for(i = 0; i < array.length; i++) {
                if(Array.isArray(array[i])) {
                    ret = ret.concat(flatten(array[i]));
                } else {
                    ret.push(array[i]);
                }
            }

            return ret;
        };

        var checkType = function (element) {
            var type =  Function.prototype.toString.call(element.constructor);

            return type.match(/function (.*)\(/)[1].toLocaleLowerCase();
        };

        var getType = function (element) {
             return element === 'object' ? checkType(element) : typeof element;
        };

        var result = function () {
            var args =  Array.prototype.slice.call(arguments);
            var result = '';

            args.forEach(function (element) {
               if (getType(element) === 'array') {
                   result += flatten(element) + ' (' + getType(element) + ')\n';
               } else {
                   result += element + ' (' + getType(element) + ')\n';
               }
            });

            return result;
        };

        return {
            check: result
        }
    }());

    console.log(printArgsInfo.check(null, undefined, "", 0, [], {}));
    console.log(printArgsInfo.check(2, 3, 2.5, -110.5564, false));
    console.log(printArgsInfo.check([1, 2], ["string", "array"], ["single value"]));
    console.log(printArgsInfo.check("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20}));
    console.log(printArgsInfo.check([[1, [2, [3, [4, 5]]]], ["string", "array"]]));
}());