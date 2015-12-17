(function() {
    'use strict';
    var timer = document.getElementById('clockTimer');

    var formattedTime = function () {
        var date = new Date();

        return date.getHours() + ':' + date.getMinutes() + ':'
            + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    };

    timer.innerHTML = formattedTime();

    setInterval(function () {
        timer.innerHTML = formattedTime();
    }, 1000);
}());
