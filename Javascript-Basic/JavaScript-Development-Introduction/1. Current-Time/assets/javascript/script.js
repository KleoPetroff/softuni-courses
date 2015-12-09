"use strict";

var getTime = function () {
    return new Date().toUTCString()
};

var element = document.getElementById('currentTime');
element.innerHTML = getTime();