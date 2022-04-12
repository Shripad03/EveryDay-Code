
const radius = [1, 3, 5, 7];


//traditional way 

// const calculateArea = (radius) => {
//     const output = [];

//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * (radius[i] * radius[i]));
//     }
//     return output;
// }


// const calculateCircumference = (radius) => {
//     const output = [];

//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }

// console.log("Area of the Circles... ", calculateArea(radius));
// console.log("Circumference of the Circles... ", calculateCircumference(radius));


// with Higher Order functions


const calculate = function (radius, logic) {
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

const area = (radius) => {
    return Math.PI * (radius * radius);
}

const circumference = (radius) => {
    return (2 * Math.PI * radius);
}

const diameter = (radius) => {
    return (2 * radius);
}

console.log("Area of the Circles... ", radius.map(area));
console.log("Area of the Circles... ", calculate(radius, area));
console.log("Circumference of the Circles... ", calculate(radius, circumference));
console.log("Diameter of the Circles... ", calculate(radius, diameter));
