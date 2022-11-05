const sumAll = function(a, b) {
    if (a > 0 && b > 0 && typeof a === 'number' && typeof b === 'number') {
        let valora = a;
        let valorb = b;
        let total = 0;
        if (a < b) {
            for (var i = valora; i <= valorb; i++) {
                total += i;
            }
            return total;
        } else if (a > b) {
            for (var i = valorb; i <= valora; i++) {
                total += i;
            }
            return total;
        }
    } else {
        return 'ERROR'
     }

};

// Do not edit below this line
module.exports = sumAll;
