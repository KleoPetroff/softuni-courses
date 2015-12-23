(function () {
    'use strict';

    var createParagraph = function (id, text) {
        var parentEl = document.getElementById(id),
            paragraphNode = document.createElement('P');

        paragraphNode.innerHTML = text;
        parentEl.appendChild(paragraphNode);
    };

    createParagraph('wrapper', 'This is a simple text');
}());
