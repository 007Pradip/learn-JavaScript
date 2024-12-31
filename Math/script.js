'use strict'







//-------------------Task 1--------------------------------
// Wap to calculate the area of a rectangle
// using prompt
const length = +prompt('Enter the length of rectangle');
const width = +prompt('Enter the width of rectangle');

const area = `The area of the rectangle is ${length * width}`;
// document.write(area);
// debugger;
console.log(area);


//-------------------Task 2--------------------------------
// Wap to calculate the area of a circle
// Using object and template literals
const circle ={
    pii: 22/72,
    radius: 5,
};
const areaOfCircle = `The area of the circle is ${circle.pii * circle.radius * circle.radius}`;
console.log(areaOfCircle);
document.write(areaOfCircle);

//-------------------Task 3--------------------------------
// Wap to calculate the area of a triangle
function calculateTriangleArea(sides) {
    /**
    In JavaScript, `!==` is the strict not equal operator. It checks whether the values of two operands are not equal and also checks their data types. 
    In the context of the provided code snippet, `sides.length !== 3` checks if the length of the `sides` array is not exactly 3, and if so, throws an error. */

    if (sides.length !== 3) {
        throw new Error("Array must contain exactly 3 sides of the triangle.");
    }
    
    const [a, b, c] = sides;  // Destructure the sides
    
    // Validate that the sides can form a triangle
    if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("The given sides do not form a valid triangle.");
    }
    
    // Calculate the semi-perimeter
    const s = (a + b + c) / 2;
    
    // Calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    //debugger;
    return area;
}

// Example usage
const sides = [6, 7, 8]; // Example triangle sides
try {
    const area = calculateTriangleArea(sides);
    /**
    In JavaScript, `${area.toFixed(2)}` is a template literal that formats the `area` value as a string with two decimal places */
    console.log(`The area of the triangle is ${area.toFixed(2)} square units.`);
} catch (error) {
    console.error(error.message);
}
