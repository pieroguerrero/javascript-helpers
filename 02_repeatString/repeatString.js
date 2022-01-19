const repeatString = function (text, n) {
    if ((!Number.isNaN(n)) && (n >= 0)) {
        let stringResult = "";
        for (let i = 1; i <= n; i++) {
            stringResult += text;
        }
        return stringResult;
    } else return "ERROR";

};

// Do not edit below this line
module.exports = repeatString;
