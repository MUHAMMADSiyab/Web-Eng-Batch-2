// JS Arrow Functions
const sayHello = () => ({
  name: "john",
  age: 23,
  married: false
});

// console.log(sayHello());

// ------------------- The concept of `this` ------------------------

// In objects
const userdata = {
  name: "Sohail",
  age: 20,
  walk: () => {
    console.log(this.name);
  }
};

userdata.walk();

// In event listeners
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  //console.log(this);
});

// Arrow functions do not have their own `this`

const numbers = [1, 2, 3, 5, 8];

numbers.forEach(item => console.log(item));

// const test = param1 => param1;

const test = () =>
  //console.log(this);

  test();

const ud = {
  name: "john",
  email: "abc@gmail.com"
};
