const removeFromArray = function () {

    if (arguments.length > 0) {
        let arr = arguments[0];

        for (let i = 1; i < arguments.length; i++) {

            arr = arr.filter((element) => {
                return element !== arguments[i]
            });
        }
        return arr;
    } else {
        return "ERROR."
    };
}

};

// Do not edit below this line
module.exports = removeFromArray;