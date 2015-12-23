(function() {
    'use strict';

    var submitButton = document.getElementById('calculate'),
        result = document.getElementById('result');

    var calcSupply = function (age, maxAge, food, foodPerDay) {
        return ((maxAge - age) * foodPerDay) * 365 + 'kg of ' + food +
            ' will be enough until I am ' + maxAge + ' years old.';
    };

    submitButton.addEventListener('click', function () {
        var inputs = {
            age: parseFloat(document.getElementById('age').value),
            maxAge: parseFloat(document.getElementById('maxAge').value),
            food: document.getElementById('favoriteFood').value,
            foodPerDay: parseFloat(document.getElementById('foodPerDay').value)
        };

        result.innerHTML = calcSupply(inputs.age, inputs.maxAge, inputs.food, inputs.foodPerDay);
        document.getElementById('form').reset();
    });
}());
