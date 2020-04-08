// JS Arrow Functions
const sayHello = () => ({
  name: "john",
  age: 23,
  married: false,
});

// console.log(sayHello());

// ------------------- The concept of `this` ------------------------

// In objects
const userdata = {
  name: "Sohail",
  age: 20,
  walk: () => {
    console.log(this.name);
  },
};

userdata.walk();

// In event listeners
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  //console.log(this);
});

// Arrow functions do not have their own `this`

const numbers = [1, 2, 3, 5, 8];

numbers.forEach((item) => console.log(item));

// const test = param1 => param1;

const test = () =>
  //console.log(this);

  test();

const ud = {
  name: "john",
  email: "abc@gmail.com",
};

// const demo = (name, age) => ({
//   name,
//   age,
// });

// console.log(demo("john", 20));

console.log(this);

// const mybtn = document.getElementById("btn-2");

// mybtn.addEventListener("click", () => {
//   console.log(this);
// });

// const mydata = {
//   name: "siyab",
//   age: 23,
//   walk: () => {
//     console.log(this);
//   },
// };

// mydata.walk();

const items = [12, 232, 345, 54];

items.forEach((item) => console.log(item));
