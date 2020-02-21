// Select elements
const todoName = document.getElementById("todo-name");
const form = document.getElementById("todo-form");
const todosList = document.getElementById("todos-list");

// Attach event listener to form
form.addEventListener("submit", addTodo);

/**
 * @method addTodo
 * @desc Adds a todo item
 */
function addTodo(e) {
  // Prevent the page from reloding
  e.preventDefault();

  const todoText = todoName.value;

  //  Save to localStorage
  const todoKey = `todo_key_${localStorage.length + 1}`;

  localStorage.setItem(todoKey, todoText);

  addToDom(todoText);
}

/**
 * @method getTodos
 * @desc Gets all the todos from the localStorage
 */
function getTodos() {
  const keys = Object.keys(localStorage);

  keys.forEach(function(key) {
    if (key.startsWith("todo_key_")) {
      const todoText = localStorage.getItem(key);

      addToDom(todoText);
    }
  });
}

getTodos();

/**
 * @method addToDom
 * @desc Adds items to DOM
 */
function addToDom(todoText) {
  //   Add to DOM
  const li = document.createElement("li");
  const content = document.createTextNode(todoText);

  //   Add classes to li
  li.className = "list-group-item";

  //   Append
  li.appendChild(content);
  todosList.prepend(li);
}
