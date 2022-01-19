const reverseString = function (str) {

    if (!(str === null || str === undefined)) {
        let reversedString = "";

        for (let i = str.length - 1; i >= 0; i--) {
            reversedString += str.charAt(i);
        }

        return reversedString;
    } else return "ERROR";


};

// Do not edit below this line
module.exports = reverseString;
