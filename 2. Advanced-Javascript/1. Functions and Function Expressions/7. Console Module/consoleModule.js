(function() {
    'use strict';
    var specialConsole = (function() {
        var writeLine = function (message) {
            if (arguments.length >= 2) {
                console.log(message.replace(/\{0}/g, arguments[1]));
            } else {
                console.log(message);
            }
        };
        var writeError = function (message) {
            if (arguments.length >= 2) {
                console.error(message.replace(/\{0}/g, arguments[1]));
            } else {
                console.error(message);
            }
        };
        var writeWarning = function (message) {
            if (arguments.length >= 2) {
                console.warn(message.replace(/\{0}/g, arguments[1]));
            } else {
                console.warn(message);
            }
        };
        var writeInfo = function(message) {
            if (arguments.length >= 2) {
                console.info(message.replace(/\{0}/g, arguments[1]));
            } else {
                console.info(message);
            }
        };
        return {
            writeLine: writeLine,
            writeError: writeError,
            writeWarning: writeWarning,
            writeInfo: writeInfo
        };
    }());

    specialConsole.writeLine('Message: hello');
    specialConsole.writeError('Error: {0}', 'A fatal error has occurred');
    specialConsole.writeWarning('Warning: {0}', 'You are not allowed to do that!');
    specialConsole.writeInfo('Info: {0}', { msg: 'An error happened', toString: function() { return this.msg; } });
}());
