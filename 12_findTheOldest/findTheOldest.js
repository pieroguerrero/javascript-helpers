function calculateAge(person) {

    if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return (new Date()).getFullYear() - person.yearOfBirth;
    }
}

const findTheOldest = function (people) {

    return people.reduce((prev, curr) => {
        if (calculateAge(prev) > calculateAge(curr)) {
            return prev
        } else return curr;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
