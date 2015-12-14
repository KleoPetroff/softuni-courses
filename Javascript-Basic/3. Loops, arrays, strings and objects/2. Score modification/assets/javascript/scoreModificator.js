(function() {
    'use strict';

    var scoreModification = function (array) {
        return array
            .filter(function (score) { return score > 0 && score < 400; })
            .map(function (score) { return score - (score * 0.2 ); })
            .sort(function (prev, curr) { return prev - curr; })
    };

    console.log(scoreModification([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]));
}());