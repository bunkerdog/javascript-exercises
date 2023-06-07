//leap year rules
//year is divisible by four but not by 100 unless divisible by 400
const leapYears = function(year) {
    return (year % 4 == 0) && (year % 100 != 0) || (year % 400 ==0);

};

// Do not edit below this line
module.exports = leapYears;
