const palindromes = function (word) {

    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    word = word.replace(regex, "").replace(/\s+/g,"").toLowerCase();

    const inverse= word.split("").reverse().join("");
    
    if (word===inverse) {
        return true
    }else return false;
};

// Do not edit below this line
module.exports = palindromes;
