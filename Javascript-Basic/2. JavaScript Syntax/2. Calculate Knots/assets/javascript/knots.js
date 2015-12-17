(function() {
    'use strict';

    var calculateButton = document.getElementById('calculate'),
        result = document.getElementById('result'),
        kmHValue = document.getElementById('kilometersPerHour');

    var kmHtoKnots = function (kmH) {
        return (parseFloat(kmH) / 1.852).toFixed(2);
    };

    calculateButton.addEventListener('click', function () {
        result.innerHTML = kmHtoKnots(kmHValue.value);
    });
}());
