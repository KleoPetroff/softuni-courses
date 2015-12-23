(function() {
    'use strict';

    var inputs = {
        text: document.getElementById('inputText'),
        button: document.getElementById('submit'),
        result: document.getElementById('result'),
        ascending: document.getElementById('ascending')
    };

    var sortLetters = function(string, organizer) {
        if (organizer) {
            return string.split('').sort(function (prev, curr) {
                return prev.toLowerCase().localeCompare(curr.toLowerCase());
            }).join('');
        } else {
            return string.split('').sort(function (prev, curr) {
                return curr.toLowerCase().localeCompare(prev.toLowerCase());
            }).join('');
        }
    };

    inputs.button.addEventListener('click', function () {
        var organizer = inputs.ascending.checked;
        inputs.result.innerHTML = sortLetters(inputs.text.value, organizer);
    });
}());
