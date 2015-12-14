(function() {
    'use strict';

    var data = [
        {
            "name": "George",
            "score": 91
        },
        {
            "name": "Lilia",
            "score": 290
        },
        {
            "name": "Alex",
            "score": 343
        },
        {
            "name": "Ivan",
            "score": 400
        },
        {
            "name": "Merry",
            "score": 50
        }
    ];

    // TODO : DRY the code
    var dataObj = JSON.parse(JSON.stringify(data));

    dataObj.map(function (person) {
        return person.score = person.score + (person.score * 0.1);
    });

    dataObj.sort(function (prev, curr) {
        return prev.name.localeCompare(curr.name);
    });

    dataObj.forEach(function (person) {
        person.hasPassed = person.score > 100;
    });

    var finalObj = dataObj.filter(function (person) {
        return person.hasPassed;
    });

    console.log(finalObj);
}());