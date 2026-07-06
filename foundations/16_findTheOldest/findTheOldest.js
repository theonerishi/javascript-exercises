
function findAge(person, now) {
    let age;
    if ("yearOfDeath" in person && person.yearOfDeath !== undefined) {
        age = person.yearOfDeath - person.yearOfBirth;
    } else {
        age = now.getFullYear() - person.yearOfBirth;
    }
    return age;
}

const findTheOldest = function(people) {
    let age;
    let maxAge = -100;
    const now = new Date();
    for (person of people) {
        age = findAge(person, now);
        if (age > maxAge) {
            maxAge = age;
        }
    }
    for (person of people) {
        age = findAge(person, now);
        if (age == maxAge) {
            return person;
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
