(function() {
    'use strict';

    var textContent = function () {
        return this;
    };

    // executed in the browser textContent() should return the global object - window;
    console.log(textContent());
    // executed in another function the textContent() should return the main function itself;
    console.log(function() { return textContent(); });
    // invoked as a constructor, textContent() should return the new object reference;
    console.log(new textContent());
}());
