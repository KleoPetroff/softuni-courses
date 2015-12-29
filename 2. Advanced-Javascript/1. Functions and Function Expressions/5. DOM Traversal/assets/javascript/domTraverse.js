'use strict';

function traverse(selector) {
    var node = document.querySelector(selector);
    function traverseNode(node, spacing) {

        var nodeId = node.getAttribute('id'),
            nodeClass = node.getAttribute('class');
        spacing = spacing || '  ';
        console.log(spacing + node.nodeName.toLowerCase() + ':'
            + (nodeId ? ' id="' + nodeId + '"' : '')
            + (nodeClass ? ' class="' + nodeClass + '"' : ''));

        for (var i = 0; i < node.childNodes.length; i++) {
            var child = node.childNodes[i];
            if (child.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + '  ');
            }
        }
    }
    if (node !== undefined && node !== null) {
        traverseNode(node, '');
    }
}

traverse('.birds');
