const container = document.getElementById("container");

// Creating elements
const h1 = document.createElement("h1");
const content = document.createTextNode("Hello World");

h1.className = "myheading head-1";
h1.classList.add("h1");

// append
h1.appendChild(content);
container.appendChild(h1);

// Removing elements
const h3 = document.getElementById("head-3");

container.removeChild(h3);

// Selecting elements
const anchors = document.getElementsByTagName("a");
const h4s = document.querySelectorAll(".head-4");

console.log(h4s);
// const anchors = document.getElementsByClassName("a");

for (let i = 0; i < anchors.length; i++) {
  anchors.item(i).style.color = "red";
}

// Selecting elements based on their relation
console.log(container.parentElement);
console.log(container.childElementCount);
console.log(container.firstElementChild);
console.log(container.lastElementChild);
console.log(container.nextElementSibling);
console.log(container.previousElementSibling);
console.log(container.parentElement.parentElement);
