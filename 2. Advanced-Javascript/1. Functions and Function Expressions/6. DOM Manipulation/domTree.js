(function() {
    'use strict';

    var domModule = (function() {
        var appendChild = function (element, child) {
            document.querySelector(child).appendChild(element);
        };

        var removeChild = function (element, child) {
            var childElement = document.querySelector(child);
            document.querySelector(element).removeChild(childElement);
        };

        var addHandler = function (element, eventType, eventHandler) {
            var elementNode = document.querySelector(element);
            elementNode.addEventListener(eventType, eventHandler);
        };

        var retrieveElements = function (selector) {
            return document.querySelectorAll(selector);
        };

        return {
            appendChild: appendChild,
            removeChild: removeChild,
            addHandler: addHandler,
            retrieveElements: retrieveElements
        };
    }());

    var liElement = document.createElement('li');
    domModule.appendChild(liElement, '.birds-list');
    domModule.removeChild('ul.birds-list', 'li:first-child');
    domModule.addHandler('.birds', 'click', function() {
        console.log('I\'m a bird!');
    });
    var element = domModule.retrieveElements('.bird');
    console.log(element);
}());
