const sumAll = function (a, b) {

    if ((typeof a === "number") && (typeof b === "number")
        && Number.isInteger(a) && Number.isInteger(b)
        && (a > 0) && (b > 0)) {

        let start;
        let end;

        if (a >= b) {
            start = b;
            end = a;
        } else {
            start = a;
            end = b;
        }

        return getSumOfNumbers(end) - getSumOfNumbers(start === 0 ? 0 : start - 1);
    } else return "ERROR";


};

function getSumOfNumbers(n) {
    return n * (n + 1) / 2;
}

// Do not edit below this line
module.exports = sumAll;
