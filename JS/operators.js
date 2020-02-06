// Assignment
var x = 5;

x += 2; // output => 7
x -= 2; // output => 5
x *= 2; // output => 10
x /= 2; // output => 5
x **= 2; // output => 25
x %= 2; // output => 1

// console.log(x);

// Arithmetic
var y = 4;
var z = 8;

console.log("Add", y + z);
console.log("Sub", y - z);
console.log("Mul", y * z);
console.log("Div", y / z);
console.log("Modulus", y % z);
console.log("Square", y ** z);

console.log("This number is " + z);
console.log(x + z + y + " Some text");

// Comparison
var a = 8;
var b = 7;

console.log(a == b); // values
console.log(a === b); // values & data types
console.log(a != b); // NOT equal
console.log(a !== b); // NOT equal & identical
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than
console.log(a <= b); // Less than

// Logical
console.log(a > b && a == b); // AND اور

console.log(a > b || a == b); // OR یا

console.log(!(a > b)); // OR یا
