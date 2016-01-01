(function() {
    'use strict';

    var Vector = function (dimensions) {
        if (!dimensions && !Array.isArray(dimensions) && dimensions.length === 0) {
            throw new Error('A Vector must have dimensions');
        }

        this.dimensions = dimensions;
    };

    Vector.prototype = (function() {
        var toString = function () {
            return '(' + this.dimensions.join() + ')';
        };

        var add = function (vector) {
            if (!(vector instanceof Vector)) {
                throw new Error('A vector can only be added to another vector');
            }

            var arrayResult = [];

            if (vector.dimensions.length !== this.dimensions.length) {
                throw new Error('Error: Vector dimension difference.');
            } else {
                var i;

                for (i = 0; i < vector.dimensions.length; i++) {
                    arrayResult.push(this.dimensions[i] + vector.dimensions[i]);
                }

                return new Vector(arrayResult);
            }
        };

        var subtract = function (vector) {
            if (!(vector instanceof Vector)) {
                throw new Error('A vector can only be added to another vector');
            }

            var arrayResult = [];

            if (vector.dimensions.length !== this.dimensions.length) {
                throw new Error('Error: Vector dimension difference.');
            } else {
                var i;

                for (i = 0; i < vector.dimensions.length; i++) {
                    arrayResult.push(this.dimensions[i] - vector.dimensions[i]);
                }
            }

            return arrayResult;
        };

        var dot = function (vector) {
            var arrayResult = [];

            if (vector.dimensions.length !== this.dimensions.length) {
                throw new Error('Error: Vector dimension difference.');
            } else {
                var i;

                for (i = 0; i < vector.dimensions.length; i++) {
                    arrayResult.push(this.dimensions[i] * vector.dimensions[i]);
                }
            }

            return arrayResult.reduce(function (prev, curr) {
                return prev + curr;
            });
        };

        var norm = function () {
            return Math.sqrt(this.dot(this));
        };

        return {
            toString: toString,
            add: add,
            subtract: subtract,
            dot: dot,
            norm: norm
        };
    }());

    var a = new Vector([1, 2, 3]);
    var b = new Vector([4, 5, 6]);
    var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

    console.log(a.toString());
    console.log(a.add(b));
    console.log(a.subtract(b));
    console.log(a.dot(b));
    console.log(a.norm());
    console.log(c.norm());
    console.log(a.add(b).norm());
}());
