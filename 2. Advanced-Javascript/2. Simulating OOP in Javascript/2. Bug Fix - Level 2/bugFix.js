(function() {
    'use strict';
    var Person = function (firstName, secondName) {
        this.firstName = firstName;
        this.lastName = secondName;

        Object.defineProperty(this, 'fullName', {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            set: function (fullName) {
                var names = fullName.split(' ');
                this.firstName = names[0];
                this.lastName = names[1];
            }
        });
    };

    var person = new Person('Peter', 'Jackson');
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.fullName);
    console.log('------');
    person.firstName = 'Michael';
    console.log(person.firstName);
    console.log(person.fullName);
    person.lastName = 'Williams';
    console.log(person.lastName);
    console.log(person.fullName);
}());
