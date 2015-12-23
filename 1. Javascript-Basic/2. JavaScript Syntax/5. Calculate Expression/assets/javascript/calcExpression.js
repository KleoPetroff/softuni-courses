(function() {
    'use strict';

    var submitButton = document.getElementById('evalButton'),
        result = document.getElementById('result');

    submitButton.addEventListener('click', function () {
        var expression = document.getElementById('expression');

        result.innerHTML = eval(expression.value); // DON'T EVER, EVER USE eval()
    });
}());
