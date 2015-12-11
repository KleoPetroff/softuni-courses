(function() {
    'use strict';
    var timer = document.getElementById('clockTimer');

    var formatedTime = function () {
        var date = new Date();

        return date.getHours() + ':' + date.getMinutes() + ':'
            + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()) ;
    };

    timer.innerHTML = formatedTime();

    setInterval(function () {
        timer.innerHTML = formatedTime();
    }, 1000);
}());