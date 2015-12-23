(function () {
    'use strict';

    var HTMLGen = (function() {
        var options = {
            parentEl: function (id) {
                return document.getElementById(id);
            }
        };

        var createParagraph = function (id, text) {
            var paragraphNode = document.createElement('p');

            paragraphNode.innerHTML = text;
            options.parentEl(id).appendChild(paragraphNode);

            return this;
        };

        var createDiv = function (id, text) {
            var divNode = document.createElement('div');

            divNode.innerHTML = text;
            options.parentEl(id).appendChild(divNode);

            return this;
        };

        var createLink = function (id, text, url) {
            var linkNode = document.createElement('a');

            linkNode.href = url;
            linkNode.innerHTML = text;
            linkNode.target = '_blank';

            options.parentEl(id).appendChild(linkNode);

            return this;
        };

        // Public API
        return {
            createParagraph: createParagraph,
            createDiv: createDiv,
            createLink: createLink
        };
    }());

    HTMLGen.createParagraph('wrapper', 'Some Text')
        .createDiv('wrapper', 'Other Text')
        .createLink('book', 'Book Title', 'http://google.com');
}());
