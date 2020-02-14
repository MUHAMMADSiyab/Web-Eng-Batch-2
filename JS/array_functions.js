// JS Array Functions

let users = ["John", "Sara", "Kim", "Brad"];
let numbers = [1, 2, 3, 4, 5];

// Length
console.log(users.length);

// Append
users.push("Mike"); // End
users.unshift("Jane"); // Start

// Remove
users.pop(); // End
users.shift(); // Start

// Replace
users.splice(0, 1, "Sohail", "Usman");

// Concatenate
let merged = users.concat(numbers);

// Join
let joined = numbers.join("+");

// toString

console.log(users.toString());
