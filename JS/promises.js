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

// Add todo method
function addTodo(newTodo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.push(newTodo);

      if (newTodo.name !== undefined) {
        resolve(true);
      } else {
        reject(new Error("Todo name must be provided"));
      }
    }, 2000);
  });
}

// addTodo({ date: "2020-08-02" })
//   .then(getTodos)
//   .catch(err => console.error(err));

// Async-await (ES7)
async function get() {
  await addTodo({ date: "2020-08-02" });
  // this is run after `addTodo` executes
  getTodos();
}
get();

const p1 = Promise.resolve("123");
const p2 = Promise.reject("Xplode Tech");
const p3 = Promise.reject(new Error("Some error"));

Promise.all([p1, p2, p3])
  .then(data => console.log(data))
  .catch(err => console.log(err));
