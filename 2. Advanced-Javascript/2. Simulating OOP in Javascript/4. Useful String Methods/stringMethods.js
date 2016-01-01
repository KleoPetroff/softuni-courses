(function() {
    'use strict';


    String.prototype.startsWith = String.prototype.startsWith || function (substring) {
        if (typeof substring !== 'string') throw new Error('Not a valid string');
        else return this.slice(0, substring.length) === substring;
    };

    String.prototype.endsWith = String.prototype.endsWith || function (substring) {
        if (typeof substring !== 'string') throw new Error('Not a valid string');
        else return this.slice(-substring.length) === substring;
    };

    String.prototype.left = String.prototype.left || function (count) {
        if (typeof count !== 'number') throw new Error('Error: not a valid number as parameter');
        else return this.slice(0, count);
    };

    String.prototype.right = String.prototype.right || function (count) {
        if (typeof count !== 'number') throw new Error('Error: not a valid number as parameter');
        else return this.slice(-count);
    };

    String.prototype.repeat = String.prototype.repeat || function (count) {
        var result = '';
        var i;
        for (i = 0; i <= count; i++) {
            result += this;
        }
        return result;
    };

    String.prototype.padLeft = String.prototype.padLeft || function(count, character) {
        var char = character || '';
        if (typeof count !== 'number') throw new Error('Error: not a valid number as parameter');
        else return char.repeat(count) + this;
    };

    String.prototype.padRight = String.prototype.padRight || function (count, character) {
        var char = character || '';
        if (typeof count !== 'number') throw new Error('Error: not a valid number as parameter');
        else return this + char.repeat(count);
    };

    var example = 'This is an example string used only for demonstration purposes.';
    console.log(example.startsWith('This'));
    console.log(example.endsWith('iss a'));
    console.log(example.left(5));
    console.log(example.right(90));
    console.log('hello'.padLeft(10, '.'));
    console.log('hello'.padLeft(2));
    console.log('hello'.padRight(4, '.'));
}());

