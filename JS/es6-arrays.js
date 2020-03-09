// JS ES6 Array Methods

const ages = [20, 35, 23, 16, 18, 30, 19];
const users = ["john", "brad", "adam", "smith"];

// const lessThanTwenty = [];

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] < 20) {
//     lessThanTwenty.push(ages[i]);
//   }
// }

// console.log(lessThanTwenty);

// Filter
const lessThanTwenty = ages.filter(age => age < 20);

// Every
const check = ages.every(age => age < 20);

// Some
const check2 = ages.some(age => age < 20);

// Sort
ages.sort((num1, num2) => num2 - num1);

console.log(ages);
