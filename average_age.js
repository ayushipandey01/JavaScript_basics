const familyMembers = [
    {
        name : "Ayushi",
        age : 24
    },

    {
        name : "Abha",
        age : 48
    },

    {
        name : "Arnav",
        age : 23
    },

    {
        name : "Pandey",
        age : 25
    },

    {
        name : "Ayu",
        age : 30
    },

    {
        name : "Ajay",
        age : 50
    },
]

const totalAge = familyMembers.reduce((acc, cur) => acc + cur.age, 0);

// console.log(totalAge);

const averageAge = totalAge/familyMembers.length;

console.log(averageAge);