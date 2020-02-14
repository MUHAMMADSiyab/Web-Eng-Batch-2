// JS Web Storages

if (localStorage) {
  console.log(true);
} else {
  console.log(false);
}

console.log(localStorage.length);

// Insert items
// localStorage.setItem("last_visit_time", "9:10 PM");
// localStorage.name = "John";
// localStorage.age = "25";
// localStorage.married = "false";

// Get item
let lvt = localStorage.getItem("last_visit_time");

// Remove item
localStorage.removeItem("last_visit_time");

// Clear whole storage
// localStorage.clear();

console.log(lvt);

let keys = Object.keys(localStorage);

for (let i = 0; i < keys.length; i++) {
  let item = localStorage.getItem(keys[i]);

  console.log(item);
}
