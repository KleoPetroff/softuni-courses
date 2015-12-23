(function() {
    'use strict';

    var calculateButton = document.getElementById('calculate'),
        result = document.getElementById('result'),
        domA = document.getElementById('numberA'),
        domB = document.getElementById('numberB'),
        domC = document.getElementById('numberC');

    var quadraticCalculation = function(a, b, c) {
        var _a = parseFloat(a),
            _b = parseFloat(b),
            _c = parseFloat(c),
            discriminant = Math.sqrt(Math.pow(_b, 2) - 4 * _a * _c);

        if (isNaN(discriminant)) return 'No real roots';
        if (discriminant === 0) return 'X: ' + ((-_b / (2 * _a)) % 1 === 0 ? (-_b / (2 * _a)) : (-_b / (2 * _a).toFixed(1)));

        else {
            var x1 = (-_b - discriminant) / (2 * _a);
            var x2 = (-_b + discriminant) / (2 * _a);

            return 'x1: ' + x1 + '<br />' + 'x2: ' + x2;
        }
    };

    calculateButton.addEventListener('click', function () {
        result.innerHTML = quadraticCalculation(domA.value, domB.value, domC.value);
        document.getElementById('form').reset();
    });
}());
