var calcCircleArea = (function() {
    'use strict';

    var domElement = document.getElementById('circleArea');

    var circleArea = function (r) {
        return Math.pow(r, 2) * Math.PI;
    };

    var domInsertion = function (radius) {
        return domElement.innerHTML += 'r = ' + radius + '\; area = ' + circleArea(radius) + '<br />';
    };

    return {
        calculate: domInsertion
    };
}());

calcCircleArea.calculate(7);
calcCircleArea.calculate(1.5);
calcCircleArea.calculate(20);
