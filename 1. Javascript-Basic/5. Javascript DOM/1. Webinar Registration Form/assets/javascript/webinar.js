(function () {
    'use strict';

    var inputs = {
        checkbox: document.getElementById('invoiceCheck'),
        clear: document.getElementById('clear'),
        invoiceContent: document.getElementById('invoiceInputs'),
    };

    var showInvoiceInputs = function () {
        if (inputs.checkbox.checked) inputs.invoiceContent.style.display = 'block';
        else inputs.invoiceContent.style.display = 'none';
    };

    var clearInputs = function () {
        document.getElementById('webinarForm').reset();
        inputs.invoiceContent.style.display = 'none';
    };

    inputs.checkbox.addEventListener('click', showInvoiceInputs);
    inputs.clear.addEventListener('click', clearInputs);
}());