const employee = [
    {
        name : "Ayushi",
        yearsOfExperience : 2 ,
    },

    {
        name : "Amita",
        yearsOfExperience : 23 ,
    },

    {
        name : "Raj",
        yearsOfExperience : 8 ,
    },

    {
        name : "Sid",
        yearsOfExperience : 5 ,
    },

    {
        name : "Ayu",
        yearsOfExperience : 3 ,
    },
]

//1 method 
const arr = [];

for (let num in employee){
    if(employee[num].yearsOfExperience > 3 )
    arr.push(employee[num].name);
}

// console.log(arr);

//2 method 

const result = employee.filter(employee => employee.yearsOfExperience > 3).map(employee => employee.name);   //chaining methods

console.log(result);
