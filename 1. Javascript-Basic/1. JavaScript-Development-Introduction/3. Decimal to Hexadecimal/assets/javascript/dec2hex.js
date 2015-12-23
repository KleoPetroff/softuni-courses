'use strict';

var getDecimal = prompt('Enter a decimal number');

var decToHex = function (dec) {
    return (+dec).toString(16).toUpperCase();
};

alert(decToHex(getDecimal));
