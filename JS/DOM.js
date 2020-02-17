// JS Document Object Model

document.title = "Something else";

console.log(window.screen.availWidth);

// console.log(document.title);

console.log(document.location.protocol);
console.log(document.scripts);
console.log(document.links);
console.log(document.images);

console.log(document.body);

const user = {
  firstname: "john",
  lastnam: "brad"
};

user.firstname = "Sara";

const h1 = document.getElementById("content");
// h1.innerText = "<i>My Heading</i>   This is somthing else";
// h1.innerHTML = "My Heading";
// h1.textContent = "<i>My Heading</i>   This is somthing else";

console.log(h1);

const h2 = document.querySelector(".cont");

h2.style.color = "#fff";
h2.style.backgroundColor = "red";
h2.align = "center";
