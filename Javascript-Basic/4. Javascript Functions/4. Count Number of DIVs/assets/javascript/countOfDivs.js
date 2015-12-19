(function() {
    'use strict';

    var inputs = {
        inputHTML: document.getElementById('htmlInput'),
        button: document.getElementById('count'),
        result: document.getElementById('result')
    };

    var countDivs = function (inputHTML) {
        return (inputHTML.match(/(<\/div>)/g) || []).length;
    };

    inputs.button.addEventListener('click', function() {
        inputs.result.innerHTML = 'Total number of DIV elements: ' + countDivs(inputs.inputHTML.value);
    });
}());
