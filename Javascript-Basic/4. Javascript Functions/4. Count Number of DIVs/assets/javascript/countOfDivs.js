(function() {
    'use strict';

    var inputs = {
        inputHTML: document.getElementById('htmlInput'),
        button: document.getElementById('count'),
        result: document.getElementById('result')
    };

    var countDivs = function (inputHTML) {
        var divsCount = (inputHTML.match(/(<\/div>)/g) || []).length,
            openDivCount = (inputHTML.match(/(<div)/g) || []).length;
        if (openDivCount === divsCount) return divsCount;
        else return 'Invalid HTML input!'
    };

    inputs.button.addEventListener('click', function() {
        inputs.result.innerHTML = 'Total number of DIV elements: ' + countDivs(inputs.inputHTML.value);
    });
}());
