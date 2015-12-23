(function() {
    'use strict';

    var people = [
        { firstname: 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
        { firstname: 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
        { firstname: 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
        { firstname: 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
    ];

    var youngestPerson = function (array) {
        var targetPerson = array
            .filter(function (person) {
                return person.hasSmartphone;
            })
            .sort(function (prev, curr) {
                return prev.age - curr.age;
            })[0];

        return 'The youngest person is ' + targetPerson.firstname + ' ' + targetPerson.lastname;
    };

    console.log(youngestPerson(people));
}());
