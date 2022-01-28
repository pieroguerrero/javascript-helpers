const getTheTitles = function (books = []) {

    return books.reduce((prev, curr) => {
        prev.push(curr.title);
        return prev;
    }, []);

};

// Do not edit below this line
module.exports = getTheTitles;
