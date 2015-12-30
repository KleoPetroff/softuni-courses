(function() {
    'use strict';

    var Person = function (firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.name = this.firstName + ' ' + this.secondName;
    };

    var peter = new Person('Peter', 'Jackson');
    console.log(peter.name);
    console.log(peter.firstName);
    console.log(peter.secondName);
}());
