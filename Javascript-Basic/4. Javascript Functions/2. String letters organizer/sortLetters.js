(function() {
    'use strict';

    var sortLetters = function(string, organizer) {
        if (organizer) {
            return string.split('').sort(function (prev, curr) {
                return prev.toLowerCase().localeCompare(curr.toLowerCase());
            }).join('');
        } else {
            return string.split('').sort(function (prev, curr) {
                return curr.toLowerCase().localeCompare(prev.toLowerCase());
            }).join('');
        }
    };

    console.log(sortLetters('HelloWorld', false));
}());
