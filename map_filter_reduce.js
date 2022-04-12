const arr = [1, 2, 3, 4, 5, 6];

const users = [
    { fname: "Shreepad", lname: "Avhad", age: 29 },
    { fname: "MS", lname: "Dhoni", age: 42 },
    { fname: "Elon", lname: "Musk", age: 49 },
    { fname: "Thomas", lname: "Shelby", age: 29 },
];


const name = users.map(x => (x.fname + " " + x.lname));
const age = users.filter(x => x.age === 29);

console.log(name);
console.log("People with 29 age are....", age);


const output = arr.filter((a) => a % 2);

const output2 = arr.filter((a) => a > 5);


const output3 = arr.filter(a => a > 4);


console.log(output3);

