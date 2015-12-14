(function() {
    'use strict';

    var submitButton = document.getElementById('submit'),
        result = document.getElementById('result');

    var replaceATag = function(str) {
        return str
            .replace(/(<a)/g, '[URL')
            .replace(/">/g, '"]')
            .replace(/(<\/a>)/g, '[/URL]')
            .replace(/"/g, '')
    };

    submitButton.addEventListener('click', function () {
        var inputHTML = document.getElementById('inputHTML').value;

        result.value = replaceATag(inputHTML);
    });
}());