// JS Callbacks
// function a(callback) {
//   setTimeout(() => {
//     console.log("'A' function is called");
//     // Call 'b' function here as a callback
//     callback();
//   }, 2000);
// }

// function b() {
//   console.log("'B' function is called");
// }

// a(b);

//  ------------------------------------------------------
const list = document.getElementById("list");

const todos = [
  { name: "Meeting", date: "2020-03-20" },
  { name: "Cricket", date: "2020-05-04" }
];

function getTodos() {
  let output = "";

  // Loop through todos
  todos.forEach(todo => {
    output += `<li>${todo.name} - ${todo.date}</li>`;
  });

  list.innerHTML = output;
}

getTodos();

// Add todo method
function addTodo(newTodo, callback) {
  setTimeout(() => {
    todos.push(newTodo);
    // Now call the getTodos callback
    callback();
  }, 2000);
}

addTodo({ name: "Practice", date: "2020-08-02" }, getTodos);
