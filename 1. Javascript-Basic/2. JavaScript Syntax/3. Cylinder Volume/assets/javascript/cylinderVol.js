'use strict';

var inputs = {
    cylinderRadius: document.getElementById('cylinderRadius'),
    cylinderHeight: document.getElementById('cylinderHeight'),
    calculateButton: document.getElementById('calculate'),
    result: document.getElementById('result')
};

var CylinderVolume = (function() {
    // Private members
    var inputToArray = function (arg1, arg2) {
        return Array.prototype.slice.call(arguments);
    };

    var cylinderVolume = function (array) {
        var _radius = array[0],
            _height = array[1];

        return (Math.PI * Math.pow(_radius, 2) * _height).toFixed(3);
    };

    var domPopulate = function (domElement, content) {
        domElement.innerHTML = content;
    };

    // Public members
    return {
        inputToArray: inputToArray,
        cylinderVolume: cylinderVolume,
        domPopulate: domPopulate
    };
}());

inputs.calculateButton.addEventListener('click', function () {
    var radius = parseFloat(inputs.cylinderRadius.value),
        height = parseFloat(inputs.cylinderHeight.value),
        inputArray = CylinderVolume.inputToArray(radius, height),
        volume = CylinderVolume.cylinderVolume(inputArray);

    CylinderVolume.domPopulate(inputs.result, volume);
});
