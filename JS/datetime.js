// JS Datetime

// String
const d = new Date("2020-03-10");

// Arguments
// Y,  M, D,  H, M,  S,  MS
const d2 = new Date(2020, 2, 10, 9, 37, 00, 999);

// Timestamp (No. of Seconds since Jan 1970 - UNIX TIMESTAMP)
const d3 = new Date(765000000000);

// Without arguments
const d4 = new Date();

// Convert to 12 hours format
const converted = d4.toLocaleString("en-us", { hour12: true });

console.log(new Date().getDay());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getFullYear());
console.log(new Date().getTime());
console.log(new Date().getSeconds());
console.log(new Date().getHours());
console.log(new Date().getMinutes());

const date = new Date();

const year = date.getFullYear();
const day = date.getDate();
const month = date.getMonth() + 1;

// console.log(`${month} - ${day} - ${year}`);

const months = ["January", "February", "March"];
const days = ["Sunday", "Monday", "Tuesday"];

console.log(months[date.getMonth()]);
console.log(days[date.getDay()]);

const dElem = document.getElementById("date");

// setInterval
setInterval(function() {
  dElem.innerText = new Date().toLocaleString();
}, 1000);
