(function () {
    'use strict';

    var inputs = {
        emailInput: document.getElementById('emailInput'),
        validation: document.getElementById('validation'),
        submit: document.getElementById('validate')
    };

    var validateEmail = function (emailStr) {
        var resultElement = inputs.validation;

        resultElement.innerHTML = inputs.emailInput.value;
        if (emailStr.match(/@\S/g) && emailStr.match(/\.\S/)) resultElement.style.background = '#76ee00';
        else resultElement.style.background = '#ff0000';
    };

    inputs.submit.addEventListener('click', function () {
        validateEmail(inputs.emailInput.value);
    })
}());
